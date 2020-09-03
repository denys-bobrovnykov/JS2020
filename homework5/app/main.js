// ------------------ WebUI --------------------------------- //
document.addEventListener('DOMContentLoaded', () => {

    // Clear output listener
    document.querySelector('.clear-output-button').onclick = () => {
        clearOutput();
    }

    document.querySelector(".task-div.first").onclick = (event) => {
        if ( event.target.type != 'submit' ) return;
        if ( !event.target.closest('input')) return;
        let element = event.target;
        console.log(element);
        let sub = element.dataset.sub;
        console.log(sub);
        clearOutput();
        switch(sub) {
            case '1': {
                outputResult([spellNum(), 1]);
                break;
            }
            case '2': {
                outputResult([stringInfo(), 1]);
                break;
            }
            case '3': {
                outputResult([caseChange(), 1]);
                break;
            }
        }
    }

})
// __________________________________________________________ //

// _________________ Functions for WebUI ____________________ //
function clearOutput(){
    document.querySelector('.output-field').innerHTML = '';
}
function outputResult(args){
    const output = document.querySelector('.output-field');
    if(args[1] === 1 || args[1] === 2){
        let answer = document.createElement('span');
        answer.innerHTML = args[0];
        output.appendChild(answer);
    } 
}
function getInput(field) {
    return document.querySelector(field).value;
} 
// ==========================================================================//


// --------------------------  Task 1 -------------------------------------- //

// subtasks:
// Написать функцию, 
// которая принимает двузначное число и возвращает его в текстовом виде. 
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.
// Написать функцию, 
// которая принимает строку и выводит статистику о ней: 
// количество букв, количество цифр и количество других знаков.
// Написать функцию, 
// которая заменяет в полученной строке 
// большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.
function spellNum() {
    const input = getInput('.task-1-input-1');
    console.log(`Input "${input}"`);
    const words = {
        1: 'one',
        2: 'two',
        3: 'tree',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    if ( isNaN(input) || input.length < 2) return 'Error';
    if ( input[0] == 1 ) return words[input];
    return words[input[0] + '0'] + ' ' + words[input[1]];
}
function stringInfo() {
    const input = getInput('.task-1-input-2');
    const special = '\`!@#$%^&*()_+=-|\\}{\':?/.,~;';
    const length = input.length;
    let chars = 0, nums = 0;
    for ( let i = 0; i < length; i++ ) {
        if ( isNaN(input[i]) && !special.includes(input[i]) ) chars += 1;
        if ( !isNaN(input[i]) ) nums += 1;
    }
    const other = length - chars - nums;
    // const chars = temp.filter(char => isNaN(char) && !special.includes(char)).length;
    // const nums = temp.filter(num => !isNaN(num)).length;
    // const other = input.length - chars - nums;
    return `Letters:${chars}, Numbers: ${nums}, Other: ${other}`;
}
function caseChange() {
    const input = getInput('.task-1-input-3');
    const length = input.length;
    let output = Array(length);
    output.fill('');
    for ( let i = 0; i < length; i++ ) {
        output[i] = input.charCodeAt(i) < 97 && isNaN(input[i]) ? output[i] = input[i].toLowerCase() : input[i].toUpperCase();
        if ( !isNaN(input[i]) ) output[i] = '_';
    }
    return output.join('');
}

// ----------------------- Task 3 --------------------------------- //
// С помощью reduce, перепишите реализацию следующего кода

const arr1 = ['Apple', 'Banana', 'Pineapple'];
// map
//.map(el => el[0]);
const res1 = arr1.reduce((acc, el) => acc.concat(el[0]), []);
console.log(res1);

// filter
//.filter(el => el[0].toLowerCase() == 'a');
const res2 = arr1.reduce((acc, el) => el[0].toLowerCase() == 'a' ? acc.concat(el) : acc, []);
console.log(res2);

// forEach
//.forEach((el, i, arr) => arr[i] = `${i + 1}: ${el}`);
const res3 = arr1.reduce((acc, el, i) => acc.concat(`${i + 1}: ${el}`),[])
console.log(res3);

// ---------------------------------------------------------------- //