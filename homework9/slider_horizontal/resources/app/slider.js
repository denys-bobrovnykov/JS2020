import {images} from './images.js';

document.addEventListener('DOMContentLoaded', () => {

    const albumSize = images.length;
    const controls = document.querySelector('.controls');
    let slideWindow = document.querySelector('.slide-window');


    let i = 0;
    slideWindow.innerHTML = images.map(img => `<img src="./resources/img/${img}" height="438" width="700">`).join('');

    controls.addEventListener('click', (e) => {
        if ( e.target.className == 'slide-left' ) {
            i--;
            i = i >= 0 ? i : albumSize - 1;
        }
        if ( e.target.className == 'slide-right' ) {
            i++;
            i = i <= albumSize - 1 ? i : 0;
        }
        slideWindow.style.left = `${700*i*(-1)}px`;
    })
})