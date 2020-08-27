// --------------- WebUI listeners ------------------------
document.addEventListener('DOMContentLoaded', () => {

    // Clear output listener
    document.getElementById('clear-output').onclick = () => {
        clearOutput();
    }
    // Task 1 input listener
    document.getElementById('submit-1').onclick = () => {
        clearOutput()
        outputResult(duplicates());
    }
    // Task 2 input listener
    document.getElementById('submit-2').onclick = () => {
        clearOutput();
        outputResult(dna());
    }
    // Task 3 input listener
    document.getElementById('submit-3').onclick = () => {
        clearOutput();
        outputResult(shortestWord());
    }
    // Task 4 input listener
    document.getElementById('submit-4').onclick = () => {
        clearOutput();
        outputResult(yourOrder());
    }
           
})
// _______________________Functions for WebUI_______________________
function clearOutput(){
    document.getElementById('output').innerHTML = '';
}
function outputResult(args){
    const output = document.getElementById('output')
    if(args.length == 3 && args[2] === 1){
        for(let i = 0; i < args[0].length; i++){
            let answer = document.createElement('span');
            answer.innerHTML = i < args[0].length - 1 ? `"${args[0][i]}" : ${args[1][i]}; ` : `"${args[0][i]}" : ${args[1][i]}.`;
            output.appendChild(answer);
        }
    }   
    if(args.length < 3){
        let answer = document.createElement('span');
        answer.innerHTML = args[0];
        output.appendChild(answer);
    } 

      
}
// ______________________________________________________________

// Task 1.

// Count the number of Duplicates
// Write a function that 
// will return the count of distinct 
// case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain 
// only alphabets (both uppercase and lowercase) and numeric digits.

function duplicates() {
    const input = document.getElementById('sentence');
    const temp = input.value.toLowerCase();
    let chars = [];
    let count = [];
    // Split, sort chars
    const text = temp.split('').sort();
    // Iterate through chars 
    for(char of text){
        if(chars.includes(char)) {
            count[chars.indexOf(char)] += 1;
        } else {
        chars.push(char);
        count[chars.indexOf(char)] = 1;
        }
    } 
    console.log(`${chars} ${count}`);
    return [chars, count, 1];
}
    // Object solution:

    // let obj = {};
    // for(let i = 0; i < temp.length; i++){
    //     if(temp[i].match(/[a-z][0-9]*/i)) obj[temp[i]] ? obj[temp[i]] += 1 : obj[temp[i]] = 1;
    // }
    // output.innerHTML = '';
    // for(let item in obj){
    //     let answer = document.createElement('p');
    //     answer.innerHTML = `${item} : ${obj[item]}`;
    //     output.appendChild(answer);
    // }

    

// ______________________________________________________________

// Task 2

// In DNA strings, symbols 
// "A" and "T" are complements of each other, 
// as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); 
// you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dna(){
    const input = document.getElementById('dna');
    const temp = input.value.toLowerCase().split('');
    let result = [];
    for(char of temp){
        if(char === 'a')  result.push("T");
        if(char === 't')  result.push("A");
        if(char === 'g')  result.push("C");
        if(char == 'c') result.push('G');
    }
    result = result.join('');
    return [result, 2];
}

// Task 3

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
// Examples
// "bitcoin take over the world maybe who knows perhaps" --> 3)

// "turns out random test cases are easier than writing out basic ones" --> 3)

// "lets talk about javascript the best language" --> 3)

// "i want to travel the world writing code one day" --> 1)

// "Lets all go on holiday somewhere very cold" --> 2)

function shortestWord(){
    const input = document.getElementById('text');
    const temp = input.value.toLowerCase().split(' ');
    result = temp.map((item) => item.length).sort().pop()
    return [result, 3];
}

// Task 4

// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

// ""  -->  ""

function yourOrder(){
    const input = document.getElementById('order');
    const temp = input.value.toLowerCase().split(' ');
    let order = {};
    let result = [];
    for(item of temp){
        for(char of item){
            if(!isNaN(char)) order[char] = item;
        }
    }
    result = Object.values(order).join(' ');
    return [result, 4]
}