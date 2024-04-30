
document.addEventListener('DOMContentLoaded', function () {
    // Oculta todas as descrições de projeto ao carregar a página
    document.querySelectorAll('.project-description').forEach(function (description) {
        description.style.display = 'none';
    });
    var activeSlideIndex = swiper.realIndex; // Índice do slide ativo
    var activeSlideDescription = document.querySelector('.swiper-slide:nth-child(' + (activeSlideIndex + 1) + ') .project-description');
    if (activeSlideDescription) {
        activeSlideDescription.style.display = 'block';
    }
});

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: "auto",
    allowTouchMove: true,
    spaceBetween: 100,
    coverflowEffect: {
      rotate: 8,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    navigation: {
        pagination: '.swiper-pagination',
    },
});

swiper.on('slideChange', function () {
    // Oculta todas as descrições de projeto
    document.querySelectorAll('.project-description').forEach(function (description) {
        description.style.display = 'none';
    });

    // Mostra a descrição do projeto correspondente ao slide ativo
    var activeSlideIndex = swiper.realIndex; // Índice do slide ativo
    var activeSlideDescription = document.querySelector('.swiper-slide:nth-child(' + (activeSlideIndex + 1) + ') .project-description');
    if (activeSlideDescription) {
        activeSlideDescription.style.display = 'block';
    }
});