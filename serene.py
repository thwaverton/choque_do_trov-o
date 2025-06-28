import cv2
from ultralytics import YOLO
import numpy as np
import pygame.mixer # Importa o mixer do pygame

#---------------------------------------------
# python main.py
#---------------------------------------------

# 1. Carregar o modelo YOLO para detecção de pessoas
# Você pode usar 'yolov8n.pt' para um modelo menor e mais rápido, ou 'yolov8m.pt' para um modelo mais preciso.
# Certifique-se de ter o modelo baixado ou ele será baixado automaticamente na primeira execução.
model = YOLO('yolov8n.pt')

# 2. Definir a área de perigo (um retângulo fixo na tela)
# Coordenadas (x_min, y_min, x_max, y_max) da área de perigo
# Adapte estes valores conforme a sua necessidade e resolução da câmera
DANGER_ZONE = (200, 100, 400, 380) # Exemplo: um retângulo no centro da tela

# Caminho para a imagem que você deseja colocar na zona de perigo
# Certifique-se de que esta imagem exista no mesmo diretório do script ou forneça o caminho completo.
IMAGE_PATH = 'alerta.png' # Substitua 'alerta.png' pelo nome do seu arquivo de imagem

# Caminho para o arquivo de áudio da sirene
SIREN_SOUND_PATH = 'sirene.mp3' # Substitua 'sirene.mp3' pelo nome do seu arquivo de áudio

# Inicializa o mixer do pygame
pygame.mixer.init()
try:
    siren_sound = pygame.mixer.Sound(SIREN_SOUND_PATH)
except pygame.error as e:
    print(f"Erro ao carregar o arquivo de som: {e}")
    print("Por favor, verifique o caminho do arquivo 'sirene.mp3' e tente novamente.")
    exit()

# Carregar a imagem da zona de perigo
try:
    danger_image = cv2.imread(IMAGE_PATH, cv2.IMREAD_UNCHANGED) # IMREAD_UNCHANGED para suportar transparência (PNG)
    if danger_image is None:
        raise FileNotFoundError(f"Não foi possível carregar a imagem em: {IMAGE_PATH}")
    
    # Redimensionar a imagem para o tamanho da DANGER_ZONE
    zone_width = DANGER_ZONE[2] - DANGER_ZONE[0]
    zone_height = DANGER_ZONE[3] - DANGER_ZONE[1]
    danger_image_resized = cv2.resize(danger_image, (zone_width, zone_height))
    
    # Se a imagem tiver um canal alfa (transparência), separe-o
    if danger_image_resized.shape[2] == 4:
        b, g, r, alpha = cv2.split(danger_image_resized)
        danger_image_rgb = cv2.merge((b, g, r))
    else:
        danger_image_rgb = danger_image_resized
        alpha = None # Não há canal alfa
        
except FileNotFoundError as e:
    print(e)
    print("Por favor, verifique o caminho da imagem e tente novamente.")
    exit()
except Exception as e:
    print(f"Ocorreu um erro ao processar a imagem: {e}")
    exit()


# Função para calcular a distância (neste caso, a distância euclidiana entre o centro da pessoa e o centro da área de perigo)
def calcular_distancia(ponto1, ponto2):
    return np.sqrt((ponto1[0] - ponto2[0])**2 + (ponto1[1] - ponto2[1])**2)

# Captura de vídeo da webcam
cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Erro ao abrir a câmera.")
    exit()

# Variável de controle para o som
siren_playing = False

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Inverter o frame para espelhamento (opcional, dependendo da câmera)
    frame = cv2.flip(frame, 1)
    
    # --- Efeito Térmico: Início ---
    # 1. Converter o frame para tons de cinza
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # 2. Aplicar um colormap. Existem vários tipos:
    # cv2.COLORMAP_JET (popular para térmico), cv2.COLORMAP_HOT, cv2.COLORMAP_MAGMA, cv2.COLORMAP_INFERNO, cv2.COLORMAP_TURBO
    thermal_frame = cv2.applyColorMap(gray_frame, cv2.COLORMAP_JET)
    
    # Agora todas as operações (deteccao, desenho, etc.) serão feitas no 'thermal_frame'
    display_frame = thermal_frame.copy()
    # --- Efeito Térmico: Fim ---

    # Obter as coordenadas da área de perigo
    x_min, y_min, x_max, y_max = DANGER_ZONE

    # 2. Colocar a imagem na área de perigo
    # Verifique se a área da imagem cabe no display_frame
    if y_min + danger_image_rgb.shape[0] < display_frame.shape[0] and \
       x_min + danger_image_rgb.shape[1] < display_frame.shape[1]:
        
        # Se houver canal alfa, use-o para sobrepor a imagem com transparência
        if alpha is not None:
            # Criar uma máscara para a região onde a imagem será colocada
            alpha_norm = alpha / 255.0
            inv_alpha_norm = 1.0 - alpha_norm

            for c in range(0, 3):
                display_frame[y_min:y_max, x_min:x_max, c] = (alpha_norm * danger_image_rgb[:, :, c] +
                                                      inv_alpha_norm * display_frame[y_min:y_max, x_min:x_max, c])
        else:
            # Se não houver canal alfa, apenas substitua os pixels
            display_frame[y_min:y_max, x_min:x_max] = danger_image_rgb

    # Desenhar o retângulo da área de perigo no frame térmico (display_frame)
    # Note que o texto da "Area de Perigo" também está no display_frame agora
    cv2.putText(display_frame, "Area de Perigo", (DANGER_ZONE[0], DANGER_ZONE[1] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2, cv2.LINE_AA)

    # 1. Identificar pessoas
    # Rodar a inferência YOLOv8 no frame ORIGINAL (para detecção precisa, não no térmico)
    results = model(frame, stream=True, classes=[0]) # classes=[0] para detectar apenas 'person'

    pessoa_detectada = False
    perigo_proximo = False # Variável para controlar o estado de proximidade de perigo

    for r in results:
        boxes = r.boxes
        for box in boxes:
            # Coordenadas da bounding box da pessoa
            x1, y1, x2, y2 = box.xyxy[0].int().tolist()
            
            # Centro da bounding box da pessoa
            centro_pessoa_x = (x1 + x2) // 2
            centro_pessoa_y = (y1 + y2) // 2
            centro_pessoa = (centro_pessoa_x, centro_pessoa_y)

            # Desenhar a bounding box e o centro da pessoa no display_frame (térmico)
            cv2.rectangle(display_frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
            cv2.circle(display_frame, centro_pessoa, 5, (0, 255, 0), -1)
            cv2.putText(display_frame, "Pessoa", (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2, cv2.LINE_AA)
            
            # 3. Calcular a distância da pessoa até a área de perigo
            # Centro da área de perigo (ainda baseado na DANGER_ZONE)
            centro_zona_perigo_x = (DANGER_ZONE[0] + DANGER_ZONE[2]) // 2
            centro_zona_perigo_y = (DANGER_ZONE[1] + DANGER_ZONE[3]) // 2
            centro_zona_perigo = (centro_zona_perigo_x, centro_zona_perigo_y)
            
            cv2.circle(display_frame, centro_zona_perigo, 5, (0, 0, 255), -1) # Desenha o centro da zona de perigo no display_frame

            param = 100 # Fator de conversão de pixels para "metros" (aproximação)
            dist = calcular_distancia(centro_pessoa, centro_zona_perigo)
            dist_metros = dist / param
            
            # Definir limites de segurança em "metros"
            limite_alerta_metros = 2.0 # Ex: 2 metros para ALERTA
            limite_perigo_metros = 1.0 # Ex: 1 metro para PERIGO
            
            status_perigo = ""
            cor_status = (255, 255, 255) # Branco

            if dist_metros < limite_perigo_metros:
                status_perigo = "PERIGO: CORRA!"
                cor_status = (0, 0, 255) # Vermelho
                perigo_proximo = True # Ativa o sinal para tocar o som
            elif dist_metros < limite_alerta_metros:
                status_perigo = "ALERTA: MUITO PROXIMO!"
                cor_status = (0, 100, 255) # Laranja (um pouco mais suave que vermelho puro)
                perigo_proximo = True # Ativa o sinal para tocar o som
            else:
                status_perigo = "Distancia Segura"
                cor_status = (0, 255, 0) # Verde
                perigo_proximo = False # Desativa o sinal
                
            cv2.putText(display_frame, f"Distancia: {dist_metros:.2f} metros", (centro_pessoa_x, centro_pessoa_y + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 0), 2, cv2.LINE_AA)
            cv2.putText(display_frame, status_perigo, (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, cor_status, 2, cv2.LINE_AA)
            
            pessoa_detectada = True
            
    # Lógica para tocar/parar a sirene
    if perigo_proximo and not siren_playing:
        siren_sound.play(-1) # Toca o som em loop (-1 para loop infinito)
        siren_playing = True
    elif not perigo_proximo and siren_playing:
        siren_sound.stop() # Para o som
        siren_playing = False
            
    if not pessoa_detectada:
        cv2.putText(display_frame, "Nenhuma pessoa detectada", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
        if siren_playing: # Se não há pessoa, pare o som se estiver tocando
            siren_sound.stop()
            siren_playing = False


    # Exibir o frame com o efeito térmico
    cv2.imshow('Sistema de Deteccao de Perigo (Efeito Termico)', display_frame)

    # Pressione 'q' para sair
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
pygame.mixer.quit() # Encerra o mixer do pygame ao fechar