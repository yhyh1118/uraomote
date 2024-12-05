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


        ///////////////////////////////////////////////////////////////////////



        // ///////////////////////////////////////////////////////////////////////////////////////////////////////


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

        // お試しlight-dark/

        // 要素やクラスを指定しておく
        const checkToggle = document.getElementById('js_mode_toggle');
        const rotateIcon = document.getElementById('js_rotate');
        const classLight = 'js-mode-light';

        // デバイスがライトモードかどうかチェック
        const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        // ローカルストレージに保存するための適当なKey名
        const keyLocalStorage = 'whike-theme-mode';

        // ローカルストレージの情報を取得
        const localTheme = localStorage.getItem(keyLocalStorage);

        // 絵文字を回転させる角度
        let nowRotate = 0;

        // ローカルストレージの中身と、端末がライトモードかどうか（ie,edgeには無意味）をチェック
        if (localTheme === 'light') {
            // ローカルストレージの情報が優先
            rotateInfinite();
            changeMode('light');
        } else if (localTheme === 'dark') {
            changeMode('dark');
        } else if (isLight) {
            rotateInfinite();
            changeMode('light');
        }

        // チェックボックスでの切り替え、選択をローカルストレージに保存
        // モード切替スイッチが変更されたら発動
        checkToggle.addEventListener('change', function (e) {
            // 絵文字大回転
            rotateInfinite();

            // チェックされたらライトモード、されなければダークモードにし、ローカルストレージにどちらを選んだか保存する
            if (e.target.checked) {
                changeMode('light');
                localStorage.setItem(keyLocalStorage, 'light');
            } else {
                changeMode('dark');
                localStorage.setItem(keyLocalStorage, 'dark');
            }
        });

        /**
         * テーマ切り替え
         * @param {String} mode 'light' もしくは 'dark'
         */
        function changeMode(mode) {
            // 引数にしたがってbodyにクラスをつける
            // チェックボックス経由で変更かかったときはいいんだけど、ローカルストレージとかからモードを変えた場合にチェック状態がおかしくなるので、合わせておく
            if (mode === 'light') {
                document.body.classList.add(classLight);
                checkToggle.checked = true;
            } else if (mode === 'dark') {
                document.body.classList.remove(classLight);
                checkToggle.checked = false;
            }
        }

        /**
         * 月と太陽アイコン無限回転
         * 呼ばれるたびに180度角度が追加されていく
         */
        function rotateInfinite() {
            nowRotate += 180;
            rotateIcon.style.transform = 'rotate(' + nowRotate + 'deg)';
        }


        // 


    });
}