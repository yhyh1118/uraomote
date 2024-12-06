'use strict';
{
    $(function () {

        // ハンバーガーメニューの開閉処理
        $('.nav__open').on('click', function () {
            $('.nav').toggleClass('active');
            $('.header').toggleClass('active');
        });

        $('.nav__close, .nav__item a').on('click', function () {
            $('.nav').removeClass('active');
            setTimeout(function () {
                $('.header').removeClass('active');
            }, 400);
        });

    });
}
