// Declarations
const displayOne = document.querySelector("#display-one");
const displayTwo = document.querySelector("#display-two");
const displayTemp = document.querySelector("#display-temp");

const numberElement = document.querySelectorAll(".number");
const operationElement = document.querySelectorAll(".operation");

const clearAll = document.querySelector('#clear-all');
const clearEntry = document.querySelector('#clear-entry');

const equalSign = document.querySelector('#equal-sign');

let display_1 = '';
let display_2 = '';
let displayResult = null;
let lastOperation = '';

let haveDot = false;

// Displaying numbers by click and check for dot 
numberElement.forEach((number) => { 
if (number
})