// Control de scroller de MH

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
        
function updateDots() {
    mhDots.forEach(dot => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
        dot.classList.toggle('active', slideIndex === swiperMh.activeIndex);
    });
}
swiperMh.on('slideChange', updateDots);
updateDots();

// Control de scrollers generales
