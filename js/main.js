$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        autoWidth: true,
        autoplay: true,
        responsive: {
            // breakpoint from 0 up
            0 : {
                margin: 38,
            },
            // breakpoint from 480 up
            600 : {
                margin: 48,
            }
        },
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

// Mobile nav

const openBtn = document.querySelector('#openNav');
const closeBtn = document.querySelector('#closeNav');
const mobileNav = document.querySelector('#mobileNav');

openBtn.addEventListener('click', function () {
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
})

closeBtn.addEventListener('click', function () {
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
})