document.addEventListener('DOMContentLoaded', () => {
// Global VARIABLES
    const lights = document.querySelectorAll('.light.bulb');
    const colors = ['red-light', 'yellow-light', 'green-light', 'off'];
    lights[1].classList.toggle(colors[1]);// toogle yellow
    let currentState = 1;// Set current state (neutral-stop)
    document.querySelector('.device').addEventListener('click', (event) => {
        if ( event.target.className != 'button' ) return; // if not button element --> DO NOT FIRE
        lights[currentState].classList.toggle(colors[currentState]); // toggle Current light
        currentState = ++currentState % 3; // returns next number
        lights[currentState].classList.toggle(colors[currentState]); // illuminate Next light
    });
})