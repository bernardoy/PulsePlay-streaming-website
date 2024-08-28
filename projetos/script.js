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

  let slideIndex = 0;
  const slides = document.querySelectorAll('.movie-card');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  }
  
  function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
  }
  
  showSlide(slideIndex);
  