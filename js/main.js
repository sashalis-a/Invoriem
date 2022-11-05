$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        autoWidth: true,
    });
})

// VIDEO
const videoWrapper = document.querySelector('.about__content');
const videoStartBtn = document.querySelector('.video__start-btn');
const videoPreview = document.querySelector('#preview');
const video = document.querySelector('#video');

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPreview.classList.add('none');
        videoWrapper.classList.remove('about__content');
        videoStartBtn.classList.add('none');
        
        video.play();
    }else {
        videoWrapper.classList.add('about__content');
        videoStartBtn.classList.remove('none');

        video.pause();
    }
})