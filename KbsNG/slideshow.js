// Voeg deze JavaScript-code toe voor de diavoorstelling

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(slideIndex) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (slideIndex + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

showSlide(currentSlide);
