// -------------------------------------------------------------
// Offcanvas
// -------------------------------------------------------------

document.addEventListener('alpine:init', () => {
    Alpine.data('offcanvas', () => ({
        open: false,

        show() {
            this.open = true
        },

        hide() {
            this.open = false
        }
    }))
})

// -------------------------------------------------------------
// Dropdown
// -------------------------------------------------------------

function dropdown() {
    return {
        open: false,

        toggle() {
            this.open = !this.open
        },

        close() {
            this.open = false
        }
    }
}

// -------------------------------------------------------------
// Popup
// -------------------------------------------------------------

document.addEventListener('alpine:init', () => {
    Alpine.data('popup', () => ({
        open: false,

        show() {
            this.open = true
        },

        hide() {
            this.open = false
        }
    }))
})


// -------------------------------------------------------------
// Offers swiper
// -------------------------------------------------------------

if (document.querySelector('.offers_swiper')) {
    var swiper = new Swiper(".offers_swiper", {
        spaceBetween: 30,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
    });
}


// -------------------------------------------------------------
// Hero swiper
// -------------------------------------------------------------

if (document.querySelector('.hero_swiper')) {
    var swiper = new Swiper(".hero_swiper", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        // autoplay: {
        //     delay: 3500,
        // },
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            prevEl: ".hero_swiper_prev",
            nextEl: ".hero_swiper_next",
        },
    });
}


// -------------------------------------------------------------
// Solution swiper
// -------------------------------------------------------------

if (document.querySelector('.solution_swiper')) {
    var swiper = new Swiper(".solution_swiper", {
        slidesPerView: 1.8,
        spaceBetween: 16,
        loop: true,
        // autoplay: {
        //     delay: 3500,
        // },
        navigation: {
            prevEl: ".solution_swiper_prev",
            nextEl: ".solution_swiper_next",
        },
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 3.6,
                spaceBetween: 10,
            },
            1600: {
                slidesPerView: 3.6,
                spaceBetween: 40,
            },
        },
    });
}


// -------------------------------------------------------------
// new_pro_swiper swiper
// -------------------------------------------------------------

if (document.querySelector('.new_pro_swiper')) {
    var swiper = new Swiper(".new_pro_swiper", {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 3500,
        // },
        navigation: {
            prevEl: ".new_pro_swiper_prev",
            nextEl: ".new_pro_swiper_next",
        },
        breakpoints: {
            576: {
                slidesPerView: 1.6,
            },
            768: {
                slidesPerView: 2.2,
            },
            992: {
                slidesPerView: 1.6,
            },
            1200: {
                slidesPerView: 2.1,
            },
            1400: {
                slidesPerView: 3.1,
            },
            1800: {
                slidesPerView: 3.1,
                spaceBetween: 40,
            },
        },
    });
}

// -------------------------------------------------------------
// top_seller_swiper
// -------------------------------------------------------------

if (document.querySelector('.top_seller_swiper')) {
    var swiper = new Swiper(".top_seller_swiper", {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 3500,
        // },
        navigation: {
            prevEl: ".top_seller_swiper_prev",
            nextEl: ".top_seller_swiper_next",
        },
        breakpoints: {
            576: {
                slidesPerView: 1.6,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
}


// -------------------------------------------------------------
// testimonials_swiper
// -------------------------------------------------------------

if (document.querySelector('.testimonials_swiper')) {
    var swiper = new Swiper(".testimonials_swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        // autoplay: {
        //     delay: 3500,
        // },
        navigation: {
            prevEl: ".testimonials_swiper_prev",
            nextEl: ".testimonials_swiper_next",
        },
        breakpoints: {
            768: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 1.8,
                spaceBetween: 32,
            },
            1200: {
                slidesPerView: 2.2,
                spaceBetween: 64,
            },
        },
    });
}


// -------------------------------------------------------------
// Back to top button
// -------------------------------------------------------------

document.addEventListener('alpine:init', () => {
    Alpine.data('backToTop', () => ({
        visible: false,

        init() {
            window.addEventListener('scroll', this.handleScroll.bind(this))
        },

        handleScroll() {
            this.visible = window.scrollY > 300
        },

        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }))
})

// -------------------------------------------------------------
// coupons_swiper
// -------------------------------------------------------------

if (document.querySelector('.coupons_swiper')) {
    var swiper = new Swiper(".coupons_swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 5000,
        // },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}

// -------------------------------------------------------------
// product_imgs_swiper
// -------------------------------------------------------------

if (document.querySelector('.product_imgs_swiper')) {
    var swiper = new Swiper(".product_imgs_swiper", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            576: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 4,
            },
            992: {
                slidesPerView: 5,
            },
        },
    });
    var productSwiper = new Swiper(".product_imgs_swiper2", {
        loop: true,
        zoom: true,
        spaceBetween: 12,
        thumbs: {
            swiper: swiper,
        },
    });
}

// -------------------------------------------------------------
// zoomed_product_swiper
// -------------------------------------------------------------

if (document.querySelector('.zoomed_product_swiper')) {
    var swiper = new Swiper(".zoomed_product_swiper", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 4.3,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
    });
    var productSwiperZoomed = new Swiper(".zoomed_product_swiper2", {
        loop: true,
        zoom: true,
        spaceBetween: 12,
        thumbs: {
            swiper: swiper,
        },
    });
}

// -------------------------------------------------------------
// Reels swiper sync (Above both)
// -------------------------------------------------------------

if (productSwiper) {
    productSwiper.on('click', function (swiper) {
        const realIndex = swiper.clickedSlide.dataset.swiperSlideIndex;
        requestAnimationFrame(() => {
            productSwiperZoomed.slideToLoop(Number(realIndex), 0);
            productSwiperZoomed.update();
        });
    });
}

// -------------------------------------------------------------
// reels_swiper
// -------------------------------------------------------------

if (document.querySelector('.reels_swiper')) {
    var reels_swiper = new Swiper(".reels_swiper", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 4,
        navigation: {
            prevEl: ".reels_swiper_prev",
            nextEl: ".reels_swiper_next",
        },
        breakpoints: {
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 8,
            },
            992: {
                slidesPerView: 6,
            },
            1600: {
                slidesPerView: 7,
                spaceBetween: 16,
            },
        },
    });
}


// -------------------------------------------------------------
// reels_popup_swiper
// -------------------------------------------------------------

if (document.querySelector('.reels_popup_swiper')) {
    var reels_popup_swiper = new Swiper(".reels_popup_swiper", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
            prevEl: ".reels_popup_swiper_prev",
            nextEl: ".reels_popup_swiper_next",
        },
        on: {
            init() {
                playActiveVideo(this);
            },
            slideChange() {
                playActiveVideo(this);
            }
        },
        breakpoints: {
            768: {
                slidesPerView: 1.8,
            },
            992: {
                slidesPerView: 2.3,
            },
            1200: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });
    function playActiveVideo(swiper) {
        document.querySelectorAll('.reels_popup_swiper video').forEach(video => {
            video.pause();
        });
        const activeVideo = swiper.slides[swiper.activeIndex].querySelector('video');
        if (activeVideo) {
            activeVideo.play().catch(() => { });
        }
    }
}


// -------------------------------------------------------------
// Reels swiper sync (Above both)
// -------------------------------------------------------------

if (reels_swiper) {
    reels_swiper.on('click', function (swiper) {
        const realIndex = swiper.clickedSlide.dataset.swiperSlideIndex;
        requestAnimationFrame(() => {
            reels_popup_swiper.slideToLoop(Number(realIndex), 0);
            reels_popup_swiper.update();
        });
    });
}


// -------------------------------------------------------------
// Accordion with progress bar
// -------------------------------------------------------------

function accordionSlider() {
    return {
        active: 0,

        setActive(index) {
            this.active = index;
        }
    }
}


// -------------------------------------------------------------
// quickCartHandler
// -------------------------------------------------------------

document.addEventListener('alpine:init', () => {
    Alpine.data('quickCartHandler', () => ({
        showCart: true,

        init() {
            window.addEventListener('scroll', () => {
                this.checkScroll();
            });

            this.checkScroll();
        },

        checkScroll() {
            const scrollBottom =
                window.innerHeight + window.scrollY;

            const pageHeight =
                document.documentElement.scrollHeight;

            this.showCart = scrollBottom < (pageHeight - 100);
        }
    }));
});


// -------------------------------------------------------------
// Alpine for tabs
// -------------------------------------------------------------

document.addEventListener('alpine:init', () => {
    Alpine.data('tabs', tabs)
})

function tabs() {
    return {
        active: 'tab1',

        set(tab) {
            this.active = tab
        },

        is(tab) {
            return this.active === tab
        }
    }
}

// -------------------------------------------------------------
// tes_zoomed_swiper
// -------------------------------------------------------------

if (document.querySelector('.tes_zoomed_swiper')) {
    var swiper = new Swiper(".tes_zoomed_swiper", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            576: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 4,
            },
            992: {
                slidesPerView: 5,
            },
        },
    });
    var productSwiper = new Swiper(".tes_zoomed_swiper2", {
        loop: true,
        zoom: true,
        spaceBetween: 12,
        thumbs: {
            swiper: swiper,
        },
        navigation: {
            prevEl: ".tes_zoomed_swiper_prev",
            nextEl: ".tes_zoomed_swiper_next",
        },
    });
}