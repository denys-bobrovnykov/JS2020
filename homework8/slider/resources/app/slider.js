import {images} from './images.js';

document.addEventListener('DOMContentLoaded', () => {

    const albumSize = images.length;
    const controls = document.querySelector('.controls');
    const image = document.querySelector('.picture');
    const slideWindow = document.querySelector('.slide-window');


    let i = 0;

    controls.addEventListener('click', () => {
        if ( event.target.className == 'slide-left' ) {
            i--;
            i = i >= 0 ? i : albumSize - 1;
        }
        if ( event.target.className == 'slide-right' ) {
            i++;
            i = i <= albumSize - 1 ? i : 0;
        }
        image.src = `./resources/img/${images[i]}`;
    })
})