// --------------------
// Control de scroller MH
// --------------------
const swiperMh = new Swiper('.swiper-mh', {
  direction: 'horizontal',
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 800,
});

const mhDots = document.querySelectorAll('.dot-mh');

mhDots.forEach(dot => {
  dot.addEventListener('click', e => {
    const index = parseInt(e.target.getAttribute('data-slide'), 10);
    swiperMh.slideTo(index);
  });
});

function updateMhDots() {
  mhDots.forEach(dot => {
    const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
    dot.classList.toggle('active', slideIndex === swiperMh.activeIndex);
  });
}
swiperMh.on('slideChange', updateMhDots);
updateMhDots();


// --------------------
// Control de scroller Secondary Nav
// --------------------
const selectedSlide = document.querySelector('.swiper-secondary-nav .current-selected-icon');
let startIndex = 0;

if (selectedSlide) {
  const parentSlide = selectedSlide.closest('.swiper-slide');
  const allSlides = Array.from(document.querySelectorAll('.swiper-secondary-nav .swiper-slide'));
  startIndex = allSlides.indexOf(parentSlide);
}

const swiperSecondaryNav = new Swiper('.swiper-secondary-nav', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: startIndex,
  freeMode: false,
});

// Botones de navegación
document.querySelector('.nav-next').addEventListener('click', () => {
  swiperSecondaryNav.slideNext();
});

document.querySelector('.nav-prev').addEventListener('click', () => {
  swiperSecondaryNav.slidePrev();
});


// --------------------
// Control de scroller SQPI servicios
// --------------------
const swiperSqpiServicios = new Swiper('.swiper-sqpi-servicios', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1.5,
  freeMode: false,
  initialSlide: 1,
  centeredSlides: true,
});

const sqpiDots = document.querySelectorAll('.sqpi');

sqpiDots.forEach(dot => {
  dot.addEventListener('click', e => {
    const index = parseInt(e.target.getAttribute('data-slide'), 10);
    swiperSqpiServicios.slideTo(index);
  });
});

function updateSqpiDots() {
  sqpiDots.forEach(dot => {
    const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
    dot.classList.toggle('active', slideIndex === swiperSqpiServicios.activeIndex);
  });
}
swiperSqpiServicios.on('slideChange', updateSqpiDots);
updateSqpiDots();
