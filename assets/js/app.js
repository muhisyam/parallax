let swiperCards = new Swiper(".gallery__card", {
    // loop: true,
    loopedSlides: 2,
    cssMode: true,
    effect: 'fade',
});

let swiperThumbs = new Swiper(".gallery__thumbs", {
    // loop: true,
    // loopedSlides: 1,
    // slidesPerView: 1,
    centeredSlides: true,
    slideToClickedSlide: true,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

swiperThumbs.controller.control = swiperCards