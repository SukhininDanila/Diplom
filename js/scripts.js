new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    700: {
      slidesPerView: 2,
			spaceBetween: 35
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true
  },
  navigation: {
    nextEl: '.slider__button_next',
    prevEl: '.slider__button_prev',
  },
});
