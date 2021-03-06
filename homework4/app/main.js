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
        outputResult(ticTacV2());
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
    const chairsInMyRoom = input[1];// How many chairs are in the room?
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
            freeChairsList.push(freeSum + difference >= need ? need - freeSum : difference);
            freeSum += difference;
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

function ticTacV2() {
    const chart = getInputForTaskTwo();
//     const chart = [
//         [1 , 2, 1],
//         [2 , 1, 1],
//         [0 , 1, 2]
// ];
    console.log(chart);
    const oneDList = [].concat(...chart);
    console.log(oneDList);
    const winCase = [
        [0, 1, 2],[3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    let result;
    for ( row of chart ) {
           if (row.includes(0)) return [-1, 2];
        } 
    result = check(oneDList, winCase);
    console.log(result);
    return [result, 2];
}
function check(oneDList, winCase) {
    let sum;
    for ( let i = 0, length = winCase.length; i < length; i++ ) {
        sum = oneDList[winCase[i][0]] + oneDList[winCase[i][1]] + oneDList[winCase[i][2]];
        if ( sum == 6 ) return 2;
        if ( sum == 3 ) return 1;
    }
    return 0;
}


// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------



// --------------------------  TASK 3  ------------------------------------ //

function myPop(arr) {
    // const element = arr.splice(- 1, 1);
    // return element;
    const element = arr[arr.length - 1];
    arr.length--;
    return element;
}
function myPush(arr, element) {
    // arr.splice(-1, 1, arr.splice(-1)[0], element);
    arr.length++;
    arr[arr.length - 1] = element;
}
function myShift(arr) {
    // return arr.splice(0, 1);
    let element = [];
    element[0] = arr[0];
    for ( let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    return element;
}
function myUnShift(arr, element) {
    // arr.splice(0, 0, element);
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
    let temp = [];
    for ( let i = 0; i < arr.length + arr1.length; i++) {
        i < arr.length ? temp[i] = arr[i] : temp[i] = arr1[i - arr.length];
    }
    return temp;
}
// let arr = ['0', 1, 2, 3];
// let arr1 = [6, 7, 8, 9];
// console.log(`Array "0",${arr.slice(1,)}`);
// console.log(`Array1 ${arr1}`);
// console.log(`myPop`);
// console.log(myPop(arr));
// console.log(arr);
// arr = ['0', 1, 2, 3];
// console.log(`myPush(arr, 4)`);
// myPush(arr, 4);
// console.log(arr);
// arr = ['0', 1, 2, 3];
// myUnShift(arr, -1);
// console.log('unshift -1: ');
// console.log(arr);
// arr = ['0', 1, 2, 3];
// console.log('shift: ' );
// console.log(myShift(arr));
// console.log(arr);
// arr = ['0', 1, 2, 3];
// console.log(`myConcat(arr, arr1)`);
// console.log(myConcat(arr, arr1));