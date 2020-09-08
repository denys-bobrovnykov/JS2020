document.addEventListener('DOMContentLoaded', () => {


    const modal = document.querySelector('.modal.closed');
    const overlay = document.querySelector('.modal-overlay');
    const clickMe = document.querySelector('.click-me');
    const closeButton = document.querySelector('.modal-button');

    clickMe.addEventListener('click', () => {
        overlay.classList.toggle('closed');
        modal.classList.toggle('closed');
    })
    closeButton.addEventListener('click', () => {
        modal.classList.toggle('closed');
        overlay.classList.toggle('closed');
    })

})