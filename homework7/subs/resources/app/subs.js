document.addEventListener('DOMContentLoaded', () => {
// --------------------- Variables ------------------------------------- //
    const theForm = document.querySelector('#inputs-form');
    const output = document.querySelector('.output-field')
// --------------------- Event listener --------------------------------- //
    theForm.addEventListener('submit', inputHandler);
// ---------------------- Main event listener function -------------------------- //
    function inputHandler(event){
        event.preventDefault();
        output.innerHTML = '';
        if ( theForm.kebab.value ) {
            displayResult(kebab());
        }
        if ( theForm.abbr.value ) {
            displayResult(abbr())
            }
        if ( theForm.url.value ) {
            displayResult(url());
        }
    }
// -------------------------- Helper functions ------------------------- //
    function kebab() {
        const arr = theForm.kebab.value.split('-');
        return {'camelCase': arr.map((word, i) => i > 0 ? word[0].toUpperCase() + word.slice(1) : word ).join('')};
    }

    function abbr() {
        const arr = theForm.abbr.value.split('-').join(' ').split(' ');
        return {'Abbreviation': arr.map(word => word[0].toUpperCase()).join('')};
    }

    function url() {
        const url = theForm.url.value.split(':').join('').split('//');
        const domen = url[1].split('/')[0];
        const path = url[1].split('/').slice(1,-1).join('/');
        const result = `<br>
                        Protocol: ${url[0]}<br>
                        Domen: ${domen}<br>
                        Path: ${path}`;
        return {'URL': result};
    }

    function displayResult(result) {
        const element = document.createElement('li');
        element.innerHTML = `<strong>For ${Object.keys(result)}</strong> => ${Object.values(result)}`;
        output.append(element);
    }
})