               
            const testimonialsSwiper = new Swiper(".swiper",{
                effect: "cards",
                cardsEffect: {
                    slideShadows: !0
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".slider-btn-right",
                    prevEl: ".slider-btn-left"
                },
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !0,
                    slideToClickedSlide: !0
                }
            });
