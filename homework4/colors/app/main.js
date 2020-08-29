document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.color-reset-button').addEventListener('click', () => {
        document.body.style.backgroundColor = 'white';
    })

    const colors = document.querySelectorAll('.choice');
    colors.forEach((color) => {
        color.addEventListener('click', () => {
            document.body.style.backgroundColor = color.style.backgroundColor;
        })
    })
})