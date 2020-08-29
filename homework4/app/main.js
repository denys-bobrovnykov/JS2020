// ------------------ WebUI ---------------------------------
document.addEventListener('DOMContentLoaded', () => {

    // Clear output listener
    document.querySelector('.clear-output-button').onclick = () => {
        clearOutput();
    }

    document.querySelector(".task-1-submit").onclick = () => {
        clearOutput()
        outputResult(meeting());
    }

    document.querySelector(".task-2-submit").onclick = () => {
        clearOutput()
        outputResult(ticTac());
    }


})
// __________________________________________________________

// _________________ Functions for WebUI ____________________
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
function getInputForTaskOne() {
    const input = document.querySelector('.task-1-input').value;// Get text from input
    const peopleInRooms = input.match(/X+/g);
// Find XXX parts and map them as lengths
//'XXX' => 3 ... [3, ...
//'XXXX' => 4 ... [3, 4, ...
    let chairsInRooms = input.match(/\d+/g).map(item => +item);
// Find numbers and map them as Nums
    const need = chairsInRooms.pop();
// POP "need" parameter which is THE LAST number in chairsInRooms list
    let initialMassive = [];
    const roomsCount = peopleInRooms.length;
    for ( let i = 0; i < roomsCount; i++) {
        initialMassive[i] = [peopleInRooms[i], chairsInRooms[i]];
    }
    return [initialMassive, need];
}
function getInputForTaskTwo() {
    // ======  Getting input from text and making 2D list ===========  //
        const input = document.querySelector('.task-2-input').value;   //
        let temp = input ? input.match(/\d+/g).map(item => +item) : [];//
        let chart = [];                                                //
        const chartSide = temp.length / 3;                             //
        for ( let i = 0; i < chartSide * 3; i += chartSide ) {         //
            chart.push(temp.slice(i, i + 3));                          //
        }                                                              //
        return chart;                                                  //
    }                                                                  //
    // ==============================================================  //
    
// ____________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________


// Task 1

// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4) ---> 'Not enough!'

function meeting(){
    const input = getInputForTaskOne();//[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]]
    //////////////////////////////////
    const myRoom = 8;
    const chairsInMyRoom = 4;// How many chairs are in the room?
    const roomsList = input[0];
    const roomsCount = input[0].length;
    let freeChairsList = [];
    let result ='';
    const need = myRoom - chairsInMyRoom;// How many do we need?

    if ( need == 0 ) {
        return ['Game On!', 1];
    } else {
        let freeSum = 0;
        // "freeSum < need" stops iteration when need is satisfied
        for ( let i = 0; i < roomsCount && freeSum < need; i++ ) {
            // if no chairs in rooms assign 0 else store how many
            let chairsInRoom = roomsList[i][1];
            let peopleInRoom = roomsList[i][0].length;
            let difference = (chairsInRoom - peopleInRoom) > 0 ? chairsInRoom - peopleInRoom : 0; 
            freeSum += difference;
            freeChairsList.push(difference > need ? need : difference);
            console.log(freeChairsList);
        } 
    // Result evaluation 
        if ( freeSum >= need && need != 0 ) result = `${freeChairsList}`;
        if ( freeSum < need ) result = 'Not enough!';
        }
    return [result, 1];
}
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

// -------------------------------   TASK 2  -------------------------------------- //

// If we were to set up a Tic-Tac-Toe game, 
// we would want to know whether the board's current state is solved, wouldn't we? 
// Our goal is to create a function that will check that for us!
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
// 1 if it is an "X", or 2 if it is an "O", like so:
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:
// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function ticTac() {
    const chart = getInputForTaskTwo();
// Init result as empty field
    let result = -1;
    const chartSide = chart.length;
// Check rows, columns and diagonals for winner:
// 1) Check rows
    for ( row of chart ) {
        result = checkLine(row);
        if (result > 0) return [result, 2];
    }
// 2) Check cols
    let col = Array(3);
    for ( let i = 0; i < chartSide; i++ ) {
        for ( let j = 0; j < chartSide; j++ ) {
            col[j] = chart[j][i];
        }
        result = checkLine(col);
        if ( result > 0) return [result, 2];
    }
// 3) Check top/left - bot/right diag
    let diag1 = [];
    for ( let i = 0; i < chartSide; i++ ) {
        diag1.push(chart[i][i]);
    }
    result = checkLine(diag1);
    if ( result > 0) return [result, 2];
// 4) Check top/right-bot/left diag
    let diag2 = [];
    for ( let i = chartSide - 1; i >= 0; i-- ) {
        diag2.push(chart[chartSide - i - 1][i]);
    }
    result = checkLine(diag2);
    if ( result > 0 ) return [result, 2];

    return [result, 2];// -1, 0, 1, 2
}
// Function to check one line of cells for empty cells and winner
function checkLine(line){
    let result = -1;
    let sum = 0;
    for ( let i = 0; i < line.length; i++) {
        switch(line[i]) {    
            case 1: {
                sum += 1;
                break;
            }
            case 2: {
                sum += 2;
                break;
            }
            case 0: {
                return -1;
            }
        } 
    }
    if (sum === 6) result = '2';
    if (sum === 3) result = '1';
    if (sum != 6 && sum != 3) result = '0'
    return result;
}

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------



// --------------------------  TASK 3  ------------------------------------ //

function myPop(arr) {
    // const element = arr.splice(arr.length - 1, 1);
    // return element;
    const element = arr[arr.length - 1];
    arr.length--;
    return element;
}
function myPush(arr, element) {
    // arr.splice(arr.length, 0, element);
    arr.length++;
    arr[arr.length - 1] = element;
}
function myShift(arr) {
    // arr.splice(0, 1);
    let element = [];
    element[0] = arr[0];
    for ( let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    return element;
}
function myUnShift(arr, element) {
    // let temp = [];
    // temp = arr.splice(0, 1, element);
    // arr = temp.splice(0, 0,...arr);
    let temp = [];
    for ( let i = 0; i < arr.length; i++ ) {
        temp[i] = arr[i];
    }
    arr.length++;
    for ( let i = 1; i < arr.length; i++ ) {
        arr[i] = temp[i - 1];
    }
    arr[0] = element;
}   
function myConcat(arr, arr1) {
    // let temp = arr.slice();
    // temp.splice(temp.length, 1, ...arr1);
    let temp = []
    for ( let i = 0; i < arr.length + arr1.length; i++) {
        i < arr.length ? temp[i] = arr[i] : temp[i] = arr1[i - arr.length];
    }
    return temp;
}
// let arr = ['0', 1, 2, 3];
// let arr1 = [6, 7, 8, 9];
// console.log(arr);
// console.log(`myPop`);
// console.log(myPop(arr));
// console.log(arr);

// console.log(`myPush(arr, 3)`);
// myPush(arr, 3);
// console.log(arr);

// myUnShift(arr, -1);
// console.log('unshift -1: ');
// console.log(arr);

// console.log('shift -1: ' );
// console.log(myShift(arr));
// console.log(arr);

// console.log(`myConcat(arr, arr1)`);
// console.log(myConcat(arr, arr1));
// console.log(arr);