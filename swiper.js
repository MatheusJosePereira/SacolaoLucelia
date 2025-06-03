const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  }
});
