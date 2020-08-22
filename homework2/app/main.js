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
