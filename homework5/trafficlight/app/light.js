document.addEventListener('DOMContentLoaded', () => {
// Global VARIABLES
    const redBulb = document.querySelector('.light.bulb.r');// RED
    const yellowBulb = document.querySelector('.light.bulb.y');// YELLOW
    const greenBulb = document.querySelector('.light.bulb.g');// GREEN

    yellowBulb.classList.toggle('yellow-light');// Iluminate YELLOW
    let currentState = 'wait-stop';// Set current state (neutral-stop)

    // Listener for the whole traffic light element //
    document.querySelector('.device').addEventListener('click', (event) => {
        if ( event.target.className != 'button' ) return; // if not button element --> DO NOT FIRE
        yellowBulb.classList.toggle('yellow-light');// Toogle YELLOW
        currentState = switchLight(currentState, redBulb, greenBulb); // Toggle RED or GREEN
    });

})
// ______________________ Function _________________________________ //
function switchLight(currentState, redBulb, greenBulb) {
    switch(currentState) {
        case 'wait-stop': {
            redBulb.classList.toggle('red-light');
            return 'stop';
        }
        case 'stop': {
            redBulb.classList.toggle('red-light');
            return 'wait-go';
        }
        case 'wait-go': {
            greenBulb.classList.toggle('green-light');
            return 'go';
        }
        case 'go': {
            greenBulb.classList.toggle('green-light');
            return 'wait-stop';
        }
    }
}
