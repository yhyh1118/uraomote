'use strict';
{

    $(function () {
        // humburger
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

        //dark-light
        $('.moon').on('click', function () {
            $('.dark-light').addClass('switch');
        });

        $('.sun').on('click', function () {
            $('.dark-light').removeClass('switch');

        });

        // banner
        var pos = 0; // 前回のスクロール位置
        var banner = $('.banner');
        var clicked = false; // クリックされたかどうかのフラグ

        function toggleBannerAndScroll() {
            var scrollTop = $(window).scrollTop();

            if (banner.hasClass('hide') && scrollTop === 0 && scrollTop < pos) {
                // ページの一番上で上にスクロールしたときにバナーを表示する
                banner.removeClass('hide');

            } else if (!banner.hasClass('hide') && (scrollTop > pos)) {
                // 下にスクロールしたとき、かつバナーが非表示になったとき、またはクリックされたときにスクロールを有効化
                banner.addClass('hide');
                $('body').css('overflow', 'hidden'); // スクロールを無効化
                setTimeout(function () {
                    $('body').css('overflow', 'auto'); // スクロールを再度有効化
                }, 1100); // 3000ミリ秒 (3秒) 後に実行
            }

            pos = scrollTop; // 現在の位置を保存
        }

        // スクロールとクリックイベントで同じ処理を呼び出す
        $(window).on('scroll', toggleBannerAndScroll);

        banner.on('click', function () {
            // clicked = true; // クリックされたフラグを立てる
            banner.addClass('hide'); // バナーを非表示にする
            $('main').css('overflow', 'auto'); // スクロールを有効化
        });
    });


    // チェックボックスの取得
    const btn = document.querySelector("#btn-mode");

    // チェックした時の挙動
    btn.addEventListener("change", () => {
        if (btn.checked == true) {
            // ダークモード
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
        } else {
            // ライトモード
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
    });

    // dark-light要素を取得
    const toggleSwitch = document.getElementById('toggleSwitch');

    // クリックイベントを追加
    toggleSwitch.addEventListener('click', () => {
        // switchクラスをトグル
        toggleSwitch.classList.toggle('switch');
    });



}