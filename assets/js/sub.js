'use strict';
{
    const info__title = document.querySelector('.info__title');
    const info__list = document.querySelector('.info__list');

    info__title.addEventListener('click', () => {
        // タイトルの開閉状態を切り替え
        info__title.classList.toggle('is-open');
    
        // リストの表示状態を切り替え
        info__list.classList.toggle('is-open');
    });

    const news__open = document.querySelector('.news__open');
    const news__txt = document.querySelector('.news__list');

    news__open.addEventListener('click', () => {
        // タイトルの開閉状態を切り替え
        news__open.classList.toggle('is-open');
    
        // リストの表示状態を切り替え
        news__txt.classList.toggle('is-open');
    });
}