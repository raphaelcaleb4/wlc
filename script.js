function getCurrentSlideIndex(swiper) {
    return swiper.realIndex;
}

function handleVideoPlayback(swiper) {
    const videos = document.querySelectorAll('.swiper-slide video');
    const currentSlideIndex = getCurrentSlideIndex(swiper);
    const currentVideo = videos[currentSlideIndex];

    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
    });

    if (currentVideo) {
        currentVideo.muted = true;
        currentVideo.play();
    }
}

function setupVideoListeners() {
    const videos = document.querySelectorAll('.swiper-slide video');
    videos.forEach(video => {
        video.addEventListener('canplaythrough', event => {
            if (video === event.target && video.paused) {
                video.muted = true;
                video.play();
            }
        });

        video.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                video.currentTime = 0;
                video.play();
            } else {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    });
}

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 33,
    centeredSlides: true,
    /*
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/
    on: {
        init: function () {
            setupVideoListeners();
            handleVideoPlayback(this);
        },
        slideChange: function () {
            handleVideoPlayback(this);
        },
    },
});