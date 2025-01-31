let index = 0;

function moverSlide(n) {
    let slides = document.querySelectorAll(".slide");
    let totalSlides = slides.length;
    
    index += n;
 
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 2;
    }
    
    let carrusel = document.querySelector(".carrusel");
    let slideWidth = slides[0].clientWidth;
    carrusel.style.transform = `translateX(-${index * slideWidth}px)`;
}

function autoSlide() {
    moverSlide(1);
}

setInterval(autoSlide, 5000);

