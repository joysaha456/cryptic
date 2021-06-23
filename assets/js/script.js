/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // buttonEffect
    $(function () {
        document.querySelectorAll('.buttonEffect').forEach(button => button.innerHTML = '<div><span>' + button.textContent.split(' ').join('</span> <span>') + '</span></div>');
    });

    // for isolatedPageTitle and isolatedHeader
    $(function () {
        if ($('.isolatedPageTitle').length) {
            $('.header').addClass('isolatedHeader').css({
                position: 'initial',
                backgroundColor: 'var(--mainColor)',
                padding: '20px 0'
            });
        }
    });

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // $('html, body').niceScroll
    $(function () {
        $('html, body').niceScroll({
            cursorwidth: 8,
            cursoropacitymin: 0.4,
            cursorcolor: 'var(--subOrdinateColor)',
            cursorborder: 'none',
            scrollspeed: 120,
            smoothscroll: true,
            cursorborderradius: 4,
            autohidemode: 'leave',
            zindex: 9999
        });
        if ($('.scrollBar').length) {
            $(".scrollBar").niceScroll({
                cursorwidth: 6,
                cursoropacitymin: 0.4,
                cursorcolor: '#6e8cb6',
                cursorborder: 'none',
                scrollspeed: 150,
                smoothscroll: true,
                cursorborderradius: 4,
                autohidemode: 'leave'
            });
        }
    });


    // Jquery webTicker
    $(function () {
        if ($('#webTicker').length) {
            $('#webTicker').webTicker();
        }
    })

    // initialization textarea#tiny
    if ($('textarea.tiny').length) {
        $('textarea.tiny').tinymce({
            height: 250,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
        });
    }


    // bitCoinCarouselInitial
    if ($('.homeHeroCarousel').length) {
        $('.homeHeroCarousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: $(window).width() > 1300 ? true : false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: ["<span class='ni ni-chevron-left'></span>", "<span class='ni ni-chevron-right'></span>"],
        });
    }

    // bitCoinCarouselInitial
    if ($('.bitCoinCarouselInitial').length) {
        $('.bitCoinCarouselInitial').owlCarousel({
            loop: true,
            margin: 30,
            nav: $(window).width() > 1300 ? true : false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: ["<span class='ni ni-chevron-left'></span>", "<span class='ni ni-chevron-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }


    // back to top
    if ($("#backToTop").length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $("#backToTop").fadeIn('slow');
            } else {
                $("#backToTop").fadeOut('slow');
            }
        });
        $("#backToTop").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
        });
    }



});
