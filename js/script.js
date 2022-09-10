$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
});

const videoBtn = document.querySelector('#video-btn');
const videoPic = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');

videoBtn.addEventListener('click', () => {
    videoPic.classList.add('none');
    videoWrapper.classList.remove('video-overlay');
});