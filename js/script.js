$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        autoplayTimeout: 2000,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
                margin: 32,
            },
            601: {
                items: 3,
                margin: 32,
            },

            1001: {
                items: 3,
                margin: 48
            }
        }
    });
});

const videoBtn = document.querySelector('#video-btn');
const videoPic = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');


videoWrapper.addEventListener('click', () => {
    if (video.paused) {
        videoPic.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play();
    } else {
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        video.pause();
    }

});