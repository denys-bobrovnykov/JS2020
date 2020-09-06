document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('.text-input');
    input.addEventListener('keydown', check);

})
function check(event) {
    if ( event.key >= '0' && event.key <= '9' ) event.preventDefault();
}