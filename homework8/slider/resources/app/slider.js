import {images} from './images.js';

document.addEventListener('DOMContentLoaded', () => {
    const albumSize = images.length;
    const slideNext = document.querySelector('.slide-right');
    const slidePrev = document.querySelector('.slide-left');
    const curr = document.querySelector('span');
    let slideWindow = document.querySelector('.slide-window');


    let imageNum = 0;

    slideWindow.innerHTML = images.map(img => `<img src="./resources/img/${img}" height="438" width="700">`).join('');

    slideNext.addEventListener('click', () => changeImage());
    slidePrev.addEventListener('click', () => changeImage('prev'));

    function changeImage(dir = 'next'){
        if(dir == 'next'){
            imageNum++;
            imageNum = imageNum <= albumSize - 1 ? imageNum : 0;
        }else{
            imageNum--;
            imageNum = imageNum >= 0 ? imageNum : albumSize - 1;
        }
        slideWindow.style.left = (-1) * 700 * imageNum + 'px';
        slideNext.innerHTML = imageNum == images.length - 1 ? 'First' : `Next: ${imageNum + 1}`;
        slidePrev.innerHTML = imageNum == 0 ? 'Last' : `Prev: ${imageNum - 1}`;
        curr.innerHTML = `Currrent: ${imageNum}`;

    }
})