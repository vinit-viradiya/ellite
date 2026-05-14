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
// Hero swiper
// -------------------------------------------------------------

if (document.querySelector('.hero_swiper')) {
    var swiper = new Swiper(".hero_swiper", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 2500,
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
            delay: 2500,
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
            delay: 2500,
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