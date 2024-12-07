'use strict';
{
    $(function () {

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
                    window.scrollTo(0, 0);

                    //1.5後に、スクロール有効か
                    setTimeout(function () {
                        isForcedScroll = false;
                        $('body').css('overflow', 'auto');
                    }, 1500);
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
        const keyLocalStorage = 'uraomote-theme-mode';
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

        //ダークライト回転！！！
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

        //パララックス

        // let rellax__txt = null; // Rellaxインスタンスを格納する変数

        // $(window).on('scroll', function () {
        //     const scrollTop = $(window).scrollTop();
        //     const triggerStart = 500; // パララックス効果を開始するスクロール位置
        //     const triggerEnd = 800;  // パララックス効果を終了するスクロール位置

        //     if (scrollTop >= triggerStart && scrollTop <= triggerEnd) {
        //         // 範囲内に入った場合
        //         if (!rellax__txt) {
        //             // Rellax__txtインスタンスが未作成の場合にのみ初期化
        //             rellax__txt = new Rellax('.rellax__txt', {
        //                 center: true // オプションを指定
        //             });
        //         }
        //     } else {
        //         // 範囲外の場合
        //         if (rellax__txt) {
        //             // 既にインスタンスが存在する場合は破棄
        //             rellax__txt.destroy();
        //             rellax__txt = null;
        //         }
        //     }
        // });

        // rellax
        var rellax = new Rellax('.rellax', {
            center: true
        });

    });
}
ß