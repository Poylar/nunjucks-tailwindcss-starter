/* eslint-disable import/no-unresolved */
import Swiper, { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';

// import breakpoints from '../utils/MatchMedia';

class Sliders {
  static hero() {
    const root = document.querySelector('.js-hero-slider') as HTMLElement;
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel, Pagination],
      init: false,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },
      pagination: {
        el: root?.querySelector('.swiper-pagination') as HTMLElement,
        clickable: true,

        bulletClass: 'slider-pagination__bullet',
        bulletActiveClass: 'slider-pagination__bullet--active',
      },
    });

    sliderInstance.init();
  }
}

function slidersInit() {
  Sliders.hero();
}

document.addEventListener('DOMContentLoaded', () => {
  slidersInit();
});

window.addEventListener('resize', () => {
  setTimeout(() => {
    slidersInit();
  }, 1000);
});
