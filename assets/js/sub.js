'use strict';
{
    $(function () {
        const info__title = document.querySelector('.info__title');
        const info__list = document.querySelector('.info__list');

        info__title.addEventListener('click', () => {
            // タイトルの開閉状態を切り替え
            info__title.classList.toggle('is-open');
        
            // リストの表示状態を切り替え
            info__list.classList.toggle('is-open');
        });
    });

    $(function () {
        // 全ての .news__item を取得
        const newsItems = document.querySelectorAll('.news__item');

        // 各 .news__item にクリックイベントを設定
        newsItems.forEach(newsItem => {
            // 各 .news__item 内の .news__txt を取得
            const newsTxt = newsItem.querySelector('.news__txt');

            if (newsTxt) {
                newsItem.addEventListener('click', () => {
                    // 開閉状態を切り替え
                    newsItem.classList.toggle('is-open');
                    newsTxt.classList.toggle('is-open');
                });
            }
        });  
    });
}
