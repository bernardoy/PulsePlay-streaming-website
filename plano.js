document.addEventListener('DOMContentLoaded', function() {
    const inner = document.querySelector('.carousel__inner');
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');

    const itemWidth = document.querySelector('.carousel__item').offsetWidth;
    const itemCount = document.querySelectorAll('.carousel__item').length;
    const visibleCount = Math.floor(inner.offsetWidth / itemWidth);
    const maxScroll = (itemCount - visibleCount) * itemWidth;

    let scrollPosition = 0;

    function updateButtons() {
        prevButton.disabled = scrollPosition <= 0;
        nextButton.disabled = scrollPosition >= maxScroll;
    }

    function scrollCarousel(offset) {
        scrollPosition += offset;
        scrollPosition = Math.max(0, Math.min(maxScroll, scrollPosition));
        inner.style.transform = `translateX(-${scrollPosition}px)`;
        updateButtons();
    }

    prevButton.addEventListener('click', function() {
        scrollCarousel(-itemWidth);
    });

    nextButton.addEventListener('click', function() {
        scrollCarousel(itemWidth);
    });

    updateButtons(); 
});


document.addEventListener('DOMContentLoaded', function () {
    const rodape = document.querySelector('.rodape');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Rolando para baixo
            rodape.classList.add('show');
        } else {
            // Rolando para cima
            rodape.classList.remove('show');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
    });
});