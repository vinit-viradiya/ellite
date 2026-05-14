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
        autoplay: {
            delay: 5000,
        },
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
        autoplay: {
            delay: 3500,
        },
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
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
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
                slidesPerView: 2.5,
                spaceBetween: 25,
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
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
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
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
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
        spaceBetween: 20,
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            prevEl: ".testimonials_swiper_prev",
            nextEl: ".testimonials_swiper_next",
        },
        breakpoints: {
            1600: {
                slidesPerView: 2.2,
                spaceBetween: 40,
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
// Accordion
// -------------------------------------------------------------

// app.js

function accordion(defaultOpen = false) {
    return {

        open: defaultOpen,
        height: 0,

        init() {
            this.$nextTick(() => {
                this.setHeight()
            })
        },

        toggle() {
            this.open = !this.open

            this.$nextTick(() => {
                this.setHeight()
            })
        },

        setHeight() {
            this.height = this.open
                ? this.$refs.content.scrollHeight
                : 0
        }
    }
}