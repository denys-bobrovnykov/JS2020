'use strict';


// --------- Task 1 --------------
function taskOne(){
    const dimensions = {
        length : 0,
        width : 0,
        height: 0
    }
    const paintCan = 16;
    alert('TASK 1');
    alert('We have an office and need to calculate a number of paint cans required to paint all 4 =) walls.');
    dimensions.length = +getInput('length');
    dimensions.width = +getInput('width');
    dimensions.height = +getInput('height');
    const officeArea = ((dimensions.length + dimensions.width) * 2) * dimensions.height;
    const cansRequired = (officeArea % paintCan) ? ((officeArea - (officeArea % paintCan)) / paintCan + 1) : (officeArea / paintCan);
    alert(`Cans required: ${cansRequired}.`);


    // Functions for Task 1
    function getInput(mesure){      // Takes a string for text prompt
        mesure = String(mesure).toUpperCase(); 
        const maxValue = 1000;
        const text = `Please enter office ${mesure} in meters(Format: number not more than ${maxValue}).`
        let check = false;
        let userInput = '';
        do{
            userInput = prompt(text);
            check = !isNaN(+userInput) && +userInput <= maxValue && +userInput > 0 && userInput !== null;
            if(!check && userInput !== null){
                alert(`Try again. Remember, only positive number not more than ${maxValue}!`);
            }else if (userInput === null){
                alert('Sorry, you can not cancel until you enter a valid value.');
            }
        }while(!check); 
        return userInput;   
    }
}   // End Functions
// Qs:
//    - How to work with cancel prompt action?
// --------------------------------


// --------- Task 2 ---------------
function taskTwo(){
    alert('TASK 2.');
    alert('GOLD SAND!');
    let prices = [];
    let buckets = [];
    let result = 0;
    // Get all inputs in lists
    prices.push(+getInput('Gold A1 price'));
    prices.push(+getInput('Gold A2 price'));
    prices.push(+getInput('Gold A3 price'));
    buckets.push(+getInput('Bucket B1 max volume in kg'));
    buckets.push(+getInput('Bucket B2 max volume in kg'));
    buckets.push(+getInput('Bucket B3 max volume in kg'));
    // Sort all lists(by number descending) https://www.javascripttutorial.net/javascript-array-sort/
    prices.sort((a,b) => b - a);
    buckets.sort((a,b) => b - a);
    // Put the most expensive gold in the biggest bucket...
    for (let i = 0; i < prices.length; i++){
        result += prices[i] * buckets[i];
    }
    alert(`Prices|${prices}| to Buckets|${buckets}|`);
    alert(`Your max gold value is ${parseInt(result)} rubles.`);
    

    // Functions for Task 2
    function getInput(mesure){    // Takes a string for text prompt
        mesure = String(mesure).toUpperCase();
        const maxValue = 100;
        const text = `Please enter: ${mesure} (Format: number not more than ${maxValue}).`
        let check = false;
        let userInput = '';
        do{
            userInput = prompt(text);
            check = !isNaN(+userInput) && +userInput <= maxValue && +userInput > 0 && userInput !== null;
            if(!check && userInput !== null){
                alert(`Try again. Remember, only positive number not more than ${maxValue}!`);
            }else if(userInput === null){
                alert('Sorry, you can not cancel until you enter a valid value.');
            }
        }while(!check); 
        return userInput;   
    }
    // End Functions
}
// Qs:
//     - How to sort Object data?
// --------------------------------


// --------- Task 3 ---------------
function taskThree(){
    const ticketNum = +getInput("ticket number");
    const numStr = String(ticketNum);
    if (numStr.length == 6 && ((+numStr[0] + +numStr[1] + +numStr[2]) == (+numStr[3] + +numStr[4] + +numStr[5]))) {
        alert('You are lucky!!!');
    }else{
        alert('Sorry, the ticket is not lucky.');
    }
    

    // Functions for Task 3
    function getInput(mesure){    // Takes a string for text prompt
        mesure = String(mesure).toUpperCase();
        const maxValue = 10 ** 6 - 1;
        const text = `Please enter ${mesure} (Format: number not more than ${maxValue}).`
        let check = false;
        let userInput = '';
        do{
            userInput = prompt(text);
            check = !isNaN(+userInput) && +userInput <= maxValue && +userInput > 0 && userInput !== null;
            if(!check && userInput !== null){
                alert(`Try again. Remember, only positive number not more than ${maxValue}!`);
            }else if(userInput === null){
                alert('Sorry, you can not cancel until you enter a valid value.');
            }
        }while(!check); 
        return userInput;   
    }
    // End Functions
}
// --------------------------------


// --------- Task 4 ---------------


// Minitask 1:

// Запросить у пользователя его возраст и определить, кем он является: 
// ребенком (0–12), 
// подростком (12–18), 
// взрослым (18-60), 
// пенсионером (60– ...).
function age(){
    const age = +prompt('What is your age?');
    switch(true){
        case age > 0 && age < 12: {
            alert('You are a child, sir.');
            break;
        }
        case age >= 12 && age < 18: {
            alert('You are a teenager.');
            break;
        }
        case age >= 18 && age <60: {
            alert('Congrats, you are an adult!');
            break;
        }
        case age >= 60 && age <= 117: {
            alert('You are probably a retired senior citizen.')
            break;
        }
        case age > 117: {
            alert('You are the older than the oldest living person in 2020.');
            break;
        }
        default:
            alert('Your age is off limits for me.');
    }    
}


//Minitask 2:

// Запросить у пользователя число от 0 до 9 
// и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

function symbol(){
    const key = prompt('Press one number key from 0 to 9.');
    switch(+key !== null){
        case 0: {
            alert(`${key} - )`);
            break;
        }
        case 1: {
            alert(`${key} - !`);
            break;
        }
        case 2: {
            alert(`${key} - @`);
            break;
        }
        case 3: {
            alert(`${key} - #`);
            break;
        }
        case 4: {
            alert(`${key} - $`);
            break;
        }
        case 5: {
            alert(`${key} - %`);
            break;
        }
        case 6: {
            alert(`${key} - ^`);
            break;
        }
        case 7: {
            alert(`${key} - &`);
            break;
        }
        case 8: {
            alert(`${key} - *`);
            break;
        }
        case 9: {
            alert(`${key} - (`);
            break;
        }
        default: {
            alert('Wrong key');
        }
    }
}


// Minitask 3:

// Запросить у пользователя трехзначное и число и 
// проверить, есть ли в нем одинаковые цифры.

function numCheck(){
    const number = +prompt('Enter three digit number.');
    const lengthCheck = number / 100 >= 1 && number / 100 <= 10;
    let counter = 0;
    if(!isNaN(number) && lengthCheck){
        for(let i = 0; i < String(number).length; i++){
            for(let j = i + 1; j < String(number).length; j++){
                if (String(number)[i] == String(number)[j]){
                    counter ++;
                    break;
                }
            }
        }
        if(counter > 0){
            alert('There are the same digits.');
        }else{
            alert('All digits are unique.');
        }
    }else{
        alert('Sorry, wrong input.');
    }
}


// Minitask 4

// Запросить у пользователя год
// и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

function leapYear(){
    const year = +prompt('Enter year for check.');
    if(!isNaN(year) && year >= 1){
        const result = !(year % 100 && year % 400) || !(year % 4) ? alert('It is leap year.') : alert('It is ordinary year.');
    }else{
        alert('Wrong input.');
    }
}


// Minitask 5

// Запросить у пользователя пятиразрядное число 
// и определить, является ли  оно палиндромом.

function palindrome(){
    const number = +prompt('Enter 5 digits number.');
    const lengthCheck = number / (10 ** 4) >= 1 && number / (10 ** 4) <= 10;
    let text = 'Yes, it is palindrome';
    if(!isNaN(number) && lengthCheck){
        const numStr = String(number);
        for(let i = 0; i < 3; i++){
            if(!(numStr[i] == numStr[4 - i])){
                text = 'Not palindrome.';
                break;
            }
        }
        alert(text);
    }else{
        alert('Wrong input.');
    }    
}


// Minitask 6

// Написать конвертор валют. 
// Пользователь вводит количество USD, 
// выбирает, в какую валюту хочет перевести: EUR, UAH или GBP,
//  и получает в ответ соответствующую сумму.

function exchange(){
    const exchangeRates = {
        EUR: 0.85,
        UAH: 27.59,
        GBP: 0.76
    }
    const usd = +prompt('Enter sum of USD.');
    const usdCheck = !isNaN(usd) && usd > 0;
    if(usdCheck){
        const request = prompt('Choose currency EUR, UAH or GBP').toUpperCase();
        exchangeRates[request] && usdCheck ? alert(`${usd * exchangeRates[request]} ${request}`) : alert('No such currency in database.');
    }else{
        alert('Enter valid number of USD.');
    }
}



