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

        // バナー表示・非表示の切り替え処理
        var pos = 0; // 前回のスクロール位置
        var banner = $('.banner');
        var isForcedScroll = false;

        $(window).on('scroll', function () {
            var scrollTop = $(window).scrollTop();

            //強制スクロール中は何もしない
            if (isForcedScroll) return;

            if (banner.hasClass('hide') && scrollTop === 0 && scrollTop < pos) {
                banner.removeClass('hide'); // 上にスクロールしてページの上部に来たらバナーを表示
            } else if (!banner.hasClass('hide') && scrollTop > pos) {
                banner.addClass('hide'); // 下にスクロールでバナーを非表示
                $('body').css('overflow', 'hidden');

                //0.1s後にトップにスクロール
                setTimeout(function () {
                    isForcedScroll = true;
                    window.scrollTo(0,0);
                    
                    //1後に、
                    setTimeout(function(){
                        isForcedScroll = false;
                        $('body').css('overflow', 'auto');
                    },1500);
                }, 100);
            }

            pos = scrollTop; // 現在の位置を保存
        });

        banner.on('click', function () {
            banner.addClass('hide'); // バナーを非表示にする
            $('main').css('overflow', 'auto'); // スクロールを再度有効化
        });


        // ライト・ダークモード切り替え
        const checkToggle = document.getElementById('js_mode_toggle');
        const rotateIcon = document.getElementById('js_rotate');
        const classLight = 'js-mode-light';
        const keyLocalStorage = 'whike-theme-mode';
        let nowRotate = 0;

        if (localStorage.getItem(keyLocalStorage) === 'light') {
            rotateIcon.style.transform = 'rotate(180deg)';
            document.body.classList.add(classLight);
            checkToggle.checked = true;
        } else if (localStorage.getItem(keyLocalStorage) === 'dark') {
            document.body.classList.remove(classLight);
            checkToggle.checked = false;
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            rotateIcon.style.transform = 'rotate(180deg)';
            document.body.classList.add(classLight);
            checkToggle.checked = true;
        }

        checkToggle.addEventListener('change', function (e) {
            nowRotate += 180;
            rotateIcon.style.transform = `rotate(${nowRotate}deg)`;

            if (e.target.checked) {
                document.body.classList.add(classLight);
                localStorage.setItem(keyLocalStorage, 'light');
            } else {
                document.body.classList.remove(classLight);
                localStorage.setItem(keyLocalStorage, 'dark');
            }
        });
    });
}
