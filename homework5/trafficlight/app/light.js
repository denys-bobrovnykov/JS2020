document.addEventListener('DOMContentLoaded', () => {
// Global VARIABLES
    const redBulb = document.querySelector('.light.bulb.r');// RED
    const yellowBulb = document.querySelector('.light.bulb.y');// YELLOW
    const greenBulb = document.querySelector('.light.bulb.g');// GREEN
    
    yellowBulb.classList.add('yellow-light');// Iluminate YELLOW
    let currentState = 'neutral-stop';// Set current state (neutral-stop)

    // Listener for the whole traffic light element //
    document.querySelector('.device').addEventListener('click', (event) => {
        if ( event.target.className != 'button' ) return; // if not button element --> NOT FIRE
        currentState = switchLight(currentState, redBulb, yellowBulb, greenBulb); // else FIRE function
    });

})
// ______________________ Function _________________________________ //
function switchLight(currentState, redBulb, yellowBulb, greenBulb) {
    switch(currentState) {
        case 'neutral-stop': {
            redBulb.classList.toggle('red-light');
            yellowBulb.classList.toggle('yellow-light');
            return 'stop';
        }
        case 'stop': {
            redBulb.classList.toggle('red-light');
            yellowBulb.classList.toggle('yellow-light');
            return 'neutral-go';
        }
        case 'neutral-go': {
            yellowBulb.classList.toggle('yellow-light');
            greenBulb.classList.toggle('green-light');
            return 'go';
        }
        case 'go': {
            greenBulb.classList.toggle('green-light');
            yellowBulb.classList.toggle('yellow-light');
            return 'neutral-stop';
        }
    }
}
