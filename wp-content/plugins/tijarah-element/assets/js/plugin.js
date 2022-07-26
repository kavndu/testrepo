(function($) {
    "use strict";

    $(window).on("load", function() {

        // Download
        if ($('.download_items').length) {
            $('.download-filter ul li').on("click", function() {
                $(".download-filter ul li").removeClass("select-cat");
                $(this).addClass("select-cat");
            });
        }

        // Newest
        if ($('.newest_items').length) {
            $('.newest-filter ul li').on("click", function() {
                $(".newest-filter ul li").removeClass("select-cat");
                $(this).addClass("select-cat");
            });
        }


    }); // window load end 3

    // AJAX Search
    $(document).mouseup(function(e) {

        var searchresuls = $(".sidebar-search");

        // if the target of the click isn't the container nor a descendant of the container
        if (!searchresuls.is(e.target) && searchresuls.has(e.target).length === 0) {
            $("#datafetch").hide();
        }
    });

    // Products Tooltip
    $(".site-preview").smartImageTooltip({ previewTemplate: "envato", imageWidth: "500px" });

    // Masonry
    $('.masonry-grid').masonry({
        itemSelector: '.masonry-grid>div'
    });

    // Banner Carousel
    $(window).on("load", function() {
        $('.banner').show();
    });

    // Slick RTL Support
    function rtl_slick() {
        if ($('body').hasClass("rtl")) {
            return true;
        } else {
            return false;
        }
    }

    // testimonial
    $('.testimonials').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        rtl: rtl_slick(),
        asNavFor: '.testimonials-nav'
    });

    $('.testimonials-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonials',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        rtl: rtl_slick(),
        centerMode: false,
        focusOnSelect: true
    });

    // Elementor front-end
    $(window).on('elementor/frontend/init', function() {

        elementorFrontend.hooks.addAction('frontend/element_ready/testimonials.default', function($scope, $) {

            $scope.find('.testimonials').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.testimonials-nav'
            });

            $scope.find('.testimonials-nav').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.testimonials',
                dots: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
                centerMode: false,
                focusOnSelect: true
            });

        });

    });

})(jQuery);