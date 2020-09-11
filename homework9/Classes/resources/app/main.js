import {Marker, MarkerRefillable, Circle} from './Classes_dynamic.js';

const textArea = document.querySelector('.text');
const printButton = document.querySelector('.print-button');
const color = document.querySelector('.color-input');
const printResult = document.querySelector('.print-result');
const refillButton = document.querySelector('.refill-button');
const inkInput = document.querySelector('.ink-input');
const radiusInput = document.querySelector('.radius-input');
const drawButton = document.querySelector('.draw-button');
const circle = document.querySelector('.circle');
const circleButtons = document.querySelector('.circle-buttons');

const marker = new MarkerRefillable('black', 0);

refillButton.addEventListener('click', () => {
    marker.color = color.value;
    marker.refill();
    inkInput.value = marker.ink;
})
printButton.addEventListener('click', () => {
    printResult.innerHTML += marker.print(textArea.value);
    inkInput.value = marker.ink;
    textArea.value = '';
})

drawButton.addEventListener('click', () => {
    const obj = new Circle;
    obj.setRadius(radiusInput.value);
    circleButtons.innerHTML = `<p>Diameter -> ${obj.getDiameter()}<br>Length -> ${obj.length()}<br>Area -> ${obj.area()}</p>`;
    circle.style.width = radiusInput.value + 'px';
    circle.style.height = radiusInput.value + 'px';
    circle.classList.add('border');
    circleButtons.style.top = radiusInput.value / 4 + 'px';
    circleButtons.classList.remove('hidden');

})
