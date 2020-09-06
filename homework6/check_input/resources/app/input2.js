document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('.text-input');
    input.addEventListener('keydown', (event) => {
        if ( event.key >= '0' && event.key <= '9' ) event.preventDefault();
        
    });
})