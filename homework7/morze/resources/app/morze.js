document.addEventListener('DOMContentLoaded', () => {
    const alphabetRev = {// This is reversed key-value obj from Github
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }
    const alphabet = {};
    for ( let key in alphabetRev ) { // Swap keys with values for correct access
        alphabet[alphabetRev[key]] = key;
    }
    alphabet['...---...'] = 'SOS';
    // Variables initialization
    const codeInput = document.querySelector('.code-input');
    const decodeButton = document.querySelector('.decode-button');
    const resultBox = document.querySelector('.result-text.span');
    // Event listeners
    codeInput.addEventListener('input', globalHandler);
    decodeButton.addEventListener('click', globalHandler);
    // Function
    function globalHandler(event) {
        if ( event.target == codeInput ) {
            if ( codeInput.value.match(/[^.-\s\/]/g) ) codeInput.value = ''; // if not matches [ . space \ - ] clear field
        }
        if ( event.target == decodeButton ) {
            const letters = codeInput.value.trim().split(' ');
            const result = letters.map(code => alphabet[code] || ' ').join('').toUpperCase();// if not alpha empty space
        // Second version using reversed object:
            // const result = letters.map(code => {
            //     const entry = Object.entries(alphabetRev).filter(value => value[1] == code);
            //     if ( entry != 0) {
            //         return entry[0].slice(0,1)[0];
            //     }else{
            //         return ' ';
            //     }
            // }).join('').toUpperCase();
            resultBox.innerHTML = `${result}`;
        }
    }
})