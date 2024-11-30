'use strict';
{

    $(function () {
        $('.nav__btn').on('click', function () {
            $('.nav').toggleClass('active');
        });

        $('.close, .nav__menu, .logo').on('click', function () {
            $('.nav').removeClass('active');
        });
    });

    function initSlick() {
        if ($(window).width() <= 769) {
            if (!$('.slider').hasClass('slick-initialized')) { // 既に初期化されていないか確認
                $('.slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: true,
                });
            }
        } else {
            if ($('.slider').hasClass('slick-initialized')) { // 既に初期化されているか確認
                $('.slider').slick('unslick'); // スライダーを無効化
            }
        }
    }
    
    // 初期化
    $(document).ready(function() {
        initSlick(); // ページ読み込み時にスライダーの状態を初期化
    });
    
    // リサイズ時の処理
    $(window).resize(function() {
        initSlick(); // リサイズ時にもスライダーの状態をチェック
    });

}