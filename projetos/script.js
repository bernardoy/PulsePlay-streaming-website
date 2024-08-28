document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Login bem-sucedido!");
        form.reset();
    });
});

  document.querySelectorAll('.faq__pergunta').forEach(pergunta => {
    pergunta.addEventListener('click', () => {
      const item = pergunta.parentElement;
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carrossel__botao--esquerda');
    const nextButton = document.querySelector('.carrossel__botao--direita');
    const slides = document.querySelector('.carrossel__slides');
    const slideCount = slides.children.length;
    let index = 0;
  
    function updateCarousel() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  
    nextButton.addEventListener('click', function () {
      index = (index + 1) % slideCount;
      updateCarousel();
    });
  
    prevButton.addEventListener('click', function () {
      index = (index - 1 + slideCount) % slideCount;
      updateCarousel();
    });
  
    updateCarousel();
  });
  