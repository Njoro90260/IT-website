document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-item img');
    carouselImages.forEach(image => {
        image.style.height = image.clientWidth * (9 / 16) + 'px';
    });
});
