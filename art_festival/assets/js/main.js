'use strict';
{
    $(function(){
        // header__btn & menu
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });

        // slick
        $('.slider').slick({
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 769, // 768px以下のブラウザサイズ
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        //scrollTop
        $('.topBtn').on('click', function(){
            const position = 0;
            const speed = 600;
            $("html,body").animate({
                scrollTop: position
            }, speed);
        });

        //fadeIn
        $(window).on('load scroll', function(){
            const fadeIn = $('.fadeIn');

            fadeIn.each(function() {
                const boxOffset = $(this).offset().top;
                const scrollPos = $(window).scrollTop();
                const wh = $(window).height();

                if(scrollPos > boxOffset - wh + 100) {
                    $(this).addClass('animated');
                }
            });
        });


    });// jQuery
}