let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    mousewheel: true,
    keyboard: true,
});
