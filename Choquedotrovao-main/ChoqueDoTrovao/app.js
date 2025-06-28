// Configuração do Particles.js com a nova paleta
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50, // Menos partículas para um look mais limpo
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#FFBF00" // Âmbar Elétrico
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 2,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#A0A0A0", // Cinza para as linhas
      "opacity": 0.1, // Linhas bem sutis
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Efeito sutil de conexão ao passar o mouse
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.3
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});


// NOVO SCRIPT PARA O EFEITO AURORA NOS CARDS
document.querySelectorAll('.aurora-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});