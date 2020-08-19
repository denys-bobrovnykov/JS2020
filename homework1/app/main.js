//Task 1

let name = prompt('What is your name?');
alert('Hello, ' + name + '!');

//Task 2

const currentYear = 2020;
let year = +prompt('What year were you born in?');
alert('You are ' + (2020 - year) + ' years old.');

//Task 3

let sideLength = +prompt('Enter square side length.');
let squareArea = sideLength * 4;
alert('Square area is: ' + squareArea);

//Task 4

let radius = +prompt('Enter radius of circle.');
let circleArea = Math.PI * (radius ** 2);
alert('Circle area: ' + circleArea.toFixed(2));

//Task 5

let distance = prompt('Enter distance to a waypoint in km.');
let time = prompt('Enter time in hours');
alert('You need to move with speed of ' + (distance / time).toFixed(0) + ' km/h.');

//Task 6

const exchangeRate = 0.84;
let usd = prompt('Enter USD amount.');
alert('Your amount of USD equals ' + (usd * exchangeRate) + ' in EUR.');

//Task 7

const fileSize = 0.82;
let driveSize = +prompt('Enter your flash drive size in gygabites.');
let result = parseInt(driveSize / fileSize);
alert('Amount of files could be stored: ' + result);

//Task 8

let sum = +prompt('Enter your money amount.');
let price = +prompt('Enter one candy pice.');
let count = parseInt(sum / price);
alert('You bought ' + count + ' candies, and your change is ' + (sum % price).toFixed(2) + '.');

//Task 9

let number = +prompt('Enter three digit number.');
let output = '';
let x = 10;
for (let i = String(number).length; i > 0; i--){
    output = output + String(number % x)[0];
    x = x * 10;
}
alert('Inverted result: ' + output);