'use strict';


// --------- Task 1 --------------
function taskOne(){
    const office = {
        length : 0,
        width : 0,
        height: 0
    }
    const paintCan = 16;
    alert('TASK 1');
    alert('We have an office and need to calculate a number of paint cans required to paint all 4 =) walls.');
    office.length = +getInput('Please enter office LENGTH in meters(Format: number not more than 1000).', 1000);
    office.width = +getInput('Please enter office WIDTH in meters(Format: number not more than 1000).', 1000);
    office.height = +getInput('Please enter office HEIGHT in meters(Format: number not more than 1000).', 1000);
    const officeArea = ((office.length + office.width) * 2) * office.height;
    const cansRequired = (officeArea % paintCan) ? ((officeArea - (officeArea % paintCan)) / paintCan + 1) : (officeArea / paintCan);
    alert(`Cans required: ${cansRequired}.`);
}
// Qs:
//    - How to work with cancel prompt action?
// --------------------------------


// --------- Task 2 ---------------
function taskTwo(){
    // Task intro
    alert('TASK 2.');
    alert('GOLD SAND!');
    // Vars initialization
    let prices = [];
    let buckets = [];
    let result = 0;
    // Get all inputs as Obj in prices
    for(let i = 0; i < 3; i++){
        prices.push({'name':`A${i + 1}`, 'value': +getInput(`Enter Gold A${i + 1} price(max 100 RUB).`, 100)});
    }
    // Prices sort 
    prices.sort((a, b) => a.value - b.value)
    // Get all inputs as Obj in buckets
    for(let i = 0; i < 3; i++){
        buckets.push({'name': `B${i + 1}`,  'value': +getInput(`Enter Bucket B${i + 1} max volume in kg(max 100 kg).`, 100)});
    }
    // Buckets sort
    buckets.sort((a, b) => a.value - b.value)
    // Put the most expensive gold in the biggest bucket and so on...
    for (let i = 0; i < 3; i++){
        result += prices[i].value * buckets[i].value;
    }
    // Display result
    alert(`
    Sand ${prices[2].name} with price ${prices[2].value} RUB to Bucket ${buckets[2].name} ${buckets[2].value} KG\n
    Sand ${prices[1].name} with price ${prices[1].value} RUB to Bucket ${buckets[1].name} ${buckets[1].value} KG\n
    Sand ${prices[0].name} with price ${prices[0].value} RUB to Bucket ${buckets[0].name} ${buckets[0].value} KG\n
    `);
    alert(`Your max gold value is ${parseInt(result)} rubles.`);
}
// Qs:
// --------------------------------


// --------- Task 3 ---------------
function taskThree(){
    const ticketNum = +getInput('Please enter ticket number (Format: number not more than 999999).', (10 ** 6) - 1);
    const numStr = String(ticketNum);
    if (numStr.length == 6 && ((+numStr[0] + +numStr[1] + +numStr[2]) == (+numStr[3] + +numStr[4] + +numStr[5]))) {
        alert('You are lucky!!!');
    }else{
        alert('Sorry, the ticket is not lucky.');
    }
}
// -------------------------- Common functions for Tasks 1-3 ----------------------------
function getInput(text, maxValue){    // Takes a string for text prompt and MAX value
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
// --------------------------------------------------------------------------------------


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
        exchangeRates[request] ? alert(`${usd * exchangeRates[request]} ${request}`) : alert('No such currency in database.');
    }else{
        alert('Enter valid number of USD.');
    }
}


// Minitask 7

// Запросить у пользователя сумму покупки
//  и вывести сумму к оплате со скидкой: 
//  от 200 до 300 – скидка будет 3%, 
//  от 300 до 500 – 5%, 
//  от 500 и выше – 7%.

function discount(){
    const cost = +prompt('Enter total cost of all items.');
    const checkNum = !isNaN(cost) && cost > 0;
    let discount = 0;
    let text = '';
    if(checkNum){
        if(cost >= 200 && cost < 300) {
            discount = 3;
            text = `, with discount ${discount}%.`
        }else if(cost >= 300 && cost < 500){
            discount = 5;
            text = `, with discount ${discount}%.`
        }else if(cost >= 500){
            discount = 7;
            text = `, with discount ${discount}%.`
        } else {
            text = ', with no discount.';
        }
        alert(`Final price for all items: ${cost - cost * (discount / 100)}` + text);
    }
}


// Minitask 8

// Запросить у пользователя длину окружности и периметр квадрата. 
// Определить, может ли такая окружность поместиться в указанный квадрат.

function fittingCircle(){
    const squarePerimeter = +prompt('Enter square perimeter.');
    const circleLength = +prompt('Enter circle length.');
    (squarePerimeter / 4 >= circleLength / Math.PI) ? alert('Fits') : alert('Doesnt fit.');
}


// Minitask 9

// Задать пользователю 3 вопроса,
//  в каждом вопросе по 3 варианта ответа. 
//  За  каждый правильный ответ начисляется 2 балла. 
//  После вопросов выведите пользователю количество набранных баллов.

function questions(){
    const questions = {
        'What is an age of the oldest living peson?': {'cor': 117, 'opt1': 118, 'opt2': 105},
        '3+3': {'opt1': 8, 'cor': 6, 'opt2': 4},
        '4+4': {'opt1': 6, 'opt2': 4, 'cor': 8}
    }
    let answers = [];
    const wrongAnswers = {
        hasWrong: null
    };
    let score = 0;
    for (let key in questions) {
        answers = Object.values(questions[key]);
        let userInput = +prompt(`${key} 
                                1) ${answers[0]} 
                                2) ${answers[1]}
                                3) ${answers[2]}`
                                );
        // Using if, because have multiple statements
        if(answers[userInput - 1] == questions[key].cor) {
            score += 2;
        }else{
            wrongAnswers[key] = answers[userInput - 1];
            wrongAnswers.hasWrong = 'yes';
        } 
    }
    alert(`Your score is ${score}.`);
    if(wrongAnswers.hasWrong){
        for(let key in wrongAnswers){
            if(!(key == 'hasWrong')){
                alert(`Question: "${key}" 
                Your answer is ${wrongAnswers[key]}.
                Correct answer is: ${questions[key].cor}.`);
            }else{
                alert('You have wrong answers.');
            }
        }
    }
}


// Minitask 10

// Запросить дату (день, месяц, год)
//  и вывести следующую за ней дату. 
//  Учтите возможность перехода на 
//  следующий месяц, год, а также високосный год

function nextDate(){
    const months = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    const day = prompt('Enter day');
    const month = prompt('Enter month.');
    const year = prompt('Enter year.');
    const isLeap = !(year % 100 && year % 400) || !(year % 4) ? true : false;
    let nextDay = +day + 1;
    let nextMonth =+month + 1;
    let nextYear = +year;
    
    if(nextDay > months[month] && isLeap){
        nextDay = 1;
        if(nextMonth > 12){
            nextMonth = 1;
            nextYear++;
        }
    }else if(!isLeap && month == 2){
        nextDay = 1;
    }else{
        nextMonth = +month;
    }
    alert(`Next date is: ${nextDay}/${nextMonth}/${nextYear}`)
}