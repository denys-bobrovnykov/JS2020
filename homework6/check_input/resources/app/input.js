document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('.text-input');
    input.addEventListener('keyup', (event) => {
        console.log(event.which);
        let text = input.value;
        let char = text[text.length - 1];
        console.log(char);
        if ( Number.isFinite(+char) && event.which != 32 ) {
            input.value = text.replace(char, '');
        }
    })
})