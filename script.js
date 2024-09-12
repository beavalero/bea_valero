//script.js

function setLanguage(lang) {
    document.documentElement.lang = lang;
    updateActiveButton(lang);
  }
  
  function updateActiveButton(lang) {
    var btnEn = document.getElementById('btn-en');
    var btnEs = document.getElementById('btn-es');
    
    if (lang === 'en') {
      btnEn.classList.add('active');
      btnEs.classList.remove('active');
    } else if (lang === 'es') {
      btnEn.classList.remove('active');
      btnEs.classList.add('active');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');
    const container = document.querySelector('.image-container');
    let currentIndex = 0;

    const showImage = (index) => {
      if (index < 0 || index >= images.length) return;
      images[index].classList.add('visible');
    };

    const hideImage = (index) => {
      if (index < 0 || index >= images.length) return;
      images[index].classList.remove('visible');
    };

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const containerMidPoint = container.offsetTop + container.offsetHeight / 2;

      if (scrollPosition > containerMidPoint + (currentIndex * 150)) {
        showImage(currentIndex);
        currentIndex++;
      } else if (scrollPosition < containerMidPoint + ((currentIndex - 1) * 150)) {
        hideImage(currentIndex - 1);
        currentIndex--;
      }
    });
  });
  

// script.js
document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Establece un temporizador para mostrar la pantalla de carga después de 500 ms
  let loadingTimer = setTimeout(function() {
      loader.style.visibility = 'visible';
  }, 50);

  // Simula una carga retardada (por ejemplo, 2 segundos)
  setTimeout(function() {
      // Si la pantalla de carga se muestra, inicia el desvanecimiento
      if (loader.style.visibility === 'visible') {
          loader.style.opacity = '0';
          setTimeout(function() {
              loader.style.display = 'none';
              content.style.display = 'block';
          }, 1000); // Espera a que la transición termine (1 segundo)
      } else {
          // Si la pantalla de carga no se muestra, oculta directamente y muestra el contenido
          clearTimeout(loadingTimer);
          content.style.display = 'block';
      }
  }, 1000); // Simula un tiempo de carga de 2 segundos
});