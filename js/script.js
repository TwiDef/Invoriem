$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000
    });
});

const videoBtn = document.querySelector('#video-btn');
const videoPic = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');


videoWrapper.addEventListener('click', () => {
    if (video.paused) {
        videoPic.classList.add('none');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play();
    } else {
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        video.pause();
    }

});