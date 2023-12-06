/* Слайдер 1: образцы открыток, нижний */
const swiperThumb = new Swiper('.gift__swiper_thumb', {
  // direction: 'vertical', /* Вертикальная прокрутка */
  // loop: true, /* Бесконечная прокрутка */
  spaceBetween: 16, /* gap, расстояние между слайдами */
  slidesPerView: 6, /* Кол-во слайдов предпросмотра */
  freeMode: true, /* Свободное перемещение, без автовыравнивания */
  // watchSlidesProgress: true, /* Добавление класса активному слайду */
});

/* Слайдер 2: основной, верхний */
const swiperMain = new Swiper('.gift__swiper_card', {
  spaceBetween: 16, /* gap, расстояние между слайдами */
  /* Смена слайда при клике по образцу: */
  thumbs: {
    swiper: swiperThumb, /* Выбор свайпера в качестве образца */
  },
});

