const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  direction: "horizontal",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  LoopfillGroupwithBlank: true,

  autoplay: {
    delay: 2000,
  },
  speed: 400,
  spaceBetween: 100,


  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    968: {
      slidesPerView: 3,
    }
}
});
