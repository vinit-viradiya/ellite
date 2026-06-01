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
                slidesPerView: 1.8,
                spaceBetween: 25,
            },
            1600: {
                slidesPerView: 2.35,
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
        slidesPerView: 1.2,
        spaceBetween: 16,
        loop: true,
        // autoplay: {
        //     delay: 3500,
        // },
        navigation: {
            prevEl: ".new_pro_swiper_prev",
            nextEl: ".new_pro_swiper_next",
        },
        breakpoints: {
            576: {
                slidesPerView: 1.8,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 1.8,
                spaceBetween: 16,
            },
            1600: {
                slidesPerView: 2.3,
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
        slidesPerView: 1,
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
            },
            992: {
                slidesPerView: 1.8,
            },
            1200: {
                slidesPerView: 2.2,
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
    var swiper2 = new Swiper(".product_imgs_swiper2", {
        loop: true,
        zoom: true,
        spaceBetween: 12,
        thumbs: {
            swiper: swiper,
        },
    });
}

// -------------------------------------------------------------
// reels_swiper
// -------------------------------------------------------------

if (document.querySelector('.reels_swiper')) {
    var swiper = new Swiper(".reels_swiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            prevEl: ".reels_swiper_prev",
            nextEl: ".reels_swiper_next",
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 12,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 22,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
        },
    });
}


// -------------------------------------------------------------
// reels_popup_swiper
// -------------------------------------------------------------

if (document.querySelector('.reels_popup_swiper')) {
    var swiper = new Swiper(".reels_popup_swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            prevEl: ".reels_popup_swiper_prev",
            nextEl: ".reels_popup_swiper_next",
        }
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
// Copy to clipboard
// -------------------------------------------------------------

function couponCode(el) {
    return {
        copied: false,

        copyCode() {
            const code = el.querySelector('.coupon-code').innerText;

            // Modern clipboard API
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(code);
            } else {
                // Fallback
                const textArea = document.createElement('textarea');
                textArea.value = code;

                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';

                document.body.appendChild(textArea);

                textArea.focus();
                textArea.select();

                document.execCommand('copy');

                textArea.remove();
            }

            this.copied = true;

            setTimeout(() => {
                this.copied = false;
            }, 2000);
        }
    };
}


// -------------------------------------------------------------
// Copy to clipboard
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
    var swiper2 = new Swiper(".zoomed_product_swiper2", {
        loop: true,
        zoom: true,
        spaceBetween: 12,
        thumbs: {
            swiper: swiper,
        },
    });
}
