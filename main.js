const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

const rect = slides[0].getBoundingClientRect();
const slideWidth = rect.width;

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});
