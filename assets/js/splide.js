'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const target = '.splide'; // 対象となるクラスセレクタを指定
    const options = {}; // 必要に応じてオプションを設定

    const mySplide = new Splide(target, options);
    mySplide.mount();

    console.log('Splide initialized!');
});