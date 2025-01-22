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
        let nowRotate = 0;

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
            round: false,
            vertical: true, 
            horizontal: false
        });

        const options = {
            type: "loop", // ループさせる
            speed: 1,
            arrows: false, // 矢印ボタンを非表示
            pagination: false, // ページネーションを非表示
            drag: "free", // フリードラッグモード
            gap: 72, // スライド間の余白
            perPage: 4, // 表示するスライドの枚数
            breakpoints: {
              769: {
                perPage: 1.5, // 画面幅500px未満で表示枚数1枚
                gap: 48, // 画面幅500px未満でスライド間の余白0
              },
              1440: {
                perPage: 3, // 画面幅500px未満で表示枚数1枚
                gap: 48, // 画面幅500px未満でスライド間の余白0
              },
            },
            autoScroll: {
              speed: 0.5, // スクロール速度
              pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
            },
          };
          const splide = new Splide(".splide", options);
          splide.mount(window.splide.Extensions);

    });
}