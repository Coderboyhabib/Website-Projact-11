$(document).ready(function () {
    //slider
    $('.slider_active').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // services slider

    $('.active_slider_services').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })

    $('.test-popup-link').magnificPopup({
        type: 'image'
    });


    //active testimonials

    $('.active_testimonial').slick({
        slidesToShow: 1,
        slidesToScrool: 1,
        arrows: false,
        fade: false,
        asNavFor: '.testimonial_calint_images',
    });


    $('.testimonial_calint_images').slick({
        slidesToShow: 1,
        slidesToScrool: 1,
        asNavFor: '.active_testimonial',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        useCSS: true,
        centerPadding: '0',
        prevArrow: '<i id="arrow_left_test" class="fas fa-chevron-left"></i>',
        nextArrow: '<i id="arrow_right_test" class="fas fa-chevron-right"></i>',
    });

});