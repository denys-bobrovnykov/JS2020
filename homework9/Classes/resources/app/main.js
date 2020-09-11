import {Marker, MarkerRefillable, Circle} from './Classes_dynamic.js';

const textArea = document.querySelector('.text');
const printButton = document.querySelector('.print-button');
const color = document.querySelector('.color-input');
const printResult = document.querySelector('.print-result');
const refillButton = document.querySelector('.refill-button');
const inkInput = document.querySelector('.ink-input');

const marker = new MarkerRefillable('black', 0);

refillButton.addEventListener('click', () => {
    marker.color = color.value;
    marker.refill();
    inkInput.value = marker.ink;
    console.log(marker.color);
    console.log(marker.ink);
})
printButton.addEventListener('click', () => {
    printResult.innerHTML += marker.print(textArea.value);
    inkInput.value = marker.ink;
    textArea.value = '';
})
