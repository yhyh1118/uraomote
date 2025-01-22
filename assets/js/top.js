'use strict';
{
    $(function () {

        // バナー
        var banner = $('.banner');
        banner.on('click', function () {
            banner.addClass('hide'); // バナーを非表示にする
        });

        // ライト・ダークモード切り替え
        const checkToggle = document.getElementById('js_mode_toggle');
        const rotateIcon = document.getElementById('js_rotate');
        const classLight = 'js-mode-light';
        const theme = 'uraomote-theme-mode';
        // const keyTimestamp = 'uraomote-theme-timestamp';
        let nowRotate = 0;

        // // 現在のタイムスタンプ
        // const currentTime = Date.now();
        // // 1時間の有効期限（ミリ秒）
        // const expiryTime = 3600 * 1000;

        // // localStorageから値を取得し、期限切れを確認
        // const storedMode = localStorage.getItem(theme);
        // const storedTimestamp = localStorage.getItem(keyTimestamp);

        // // 有効期限が切れている場合、localStorageをクリア
        // if (storedTimestamp && currentTime - parseInt(storedTimestamp, 10) > expiryTime) {
        //     localStorage.removeItem(theme);
        //     localStorage.removeItem(keyTimestamp);
        // }

        // テーマモードの初期化
        if (localStorage.getItem(theme) === 'light') {
            rotateIcon.style.transform = 'rotate(180deg)';
            document.body.classList.add(classLight);
            checkToggle.checked = true;
        } else if (localStorage.getItem(theme) === 'dark') {
            document.body.classList.remove(classLight);
            checkToggle.checked = false;
        } else {
            // デフォルトをダークモードに設定
            localStorage.setItem(theme, 'dark');
            localStorage.setItem(keyTimestamp, currentTime);
            document.body.classList.remove(classLight);
            checkToggle.checked = false;
        }

        //ダークライト回転！！！
        checkToggle.addEventListener('change', function (e) {
            nowRotate += 180;
            rotateIcon.style.transform = `rotate(${nowRotate}deg)`;

            if (e.target.checked) {
                document.body.classList.add(classLight);
                localStorage.setItem(theme, 'light');
            } else {
                document.body.classList.remove(classLight);
                localStorage.setItem(theme, 'dark');
            }
        });

        // rellax
        var rellax = new Rellax('.rellax', {
            center: true,
            round: false,   // 小数点以下の計算を減らすことで負荷軽減
            vertical: true, // 水平方向の動きが不要なら無効化
            horizontal: false
        });

        const mySplide = new Splide( '.splide' );
        mySplide.mount();

    });
}


// banner_bk

        // // バナー表示・非表示の切り替え処理
        // var pos = 0; // 前回のスクロール位置
        // var banner = $('.banner');
        // var isForcedScroll = false;

        // $(window).on('scroll', function () {
        //     var scrollTop = $(window).scrollTop();

        //     //強制スクロール中は何もしない
        //     if (isForcedScroll) return;

        //     if (banner.hasClass('hide') && scrollTop === 0 && scrollTop < pos) {
        //         banner.removeClass('hide'); // 上にスクロールしてページの上部に来たらバナーを表示
        //     } else if (!banner.hasClass('hide') && scrollTop > pos) {
        //         banner.addClass('hide'); // 下にスクロールでバナーを非表示
        //         $('body').css('overflow', 'hidden');

        //         //0.1s後にトップにスクロール
        //         setTimeout(function () {
        //             isForcedScroll = true;
        //             window.scrollTo(0, 0);

        //             //1.5後に、スクロール有効か
        //             setTimeout(function () {
        //                 isForcedScroll = false;
        //                 $('body').css('overflow', 'auto');
        //             }, 1500);
        //         }, 100);
        //     }

        //     pos = scrollTop; // 現在の位置を保存
        // });

        // banner.on('click', function () {
        //     banner.addClass('hide'); // バナーを非表示にする
        //     $('main').css('overflow', 'auto'); // スクロールを再度有効化
        // });