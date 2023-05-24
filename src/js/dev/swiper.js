import Swiper, { Navigation, Autoplay, EffectCoverflow } from 'swiper';

export const swiper = () => {
  const swiperAbout = new Swiper('.swiper-about', {
    modules: [Navigation, Autoplay, EffectCoverflow],

    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 20,
      stretch: 2,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },

    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-about__arrow_next',
      prevEl: '.swiper-about__arrow_prev',
    },
  });
};
