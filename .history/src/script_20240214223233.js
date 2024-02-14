// Declarations
const displayOne = document.querySelector("#display-");
const displayTwo = document.querySelector("#display-two");
const displayTemp = document.querySelector("#display-temp");

const numberElement = document.querySelectorAll(".number");
const operationElement = document.querySelectorAll(".operation");

const clearAll = document.querySelector('#clear-all');
const clearEntry = document.querySelector('#clear-entry');

const equalSign = document.querySelector('#equal-sign');

let displayNum1 = '';
let displayNum2 = '';
let displayResult = null;
let lastOperation = '';

let haveDot = false;

// Displaying numbers by click and check for dot 
numberElement.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    displayNum2 += e.target.innerText;
    displayTwo.innerText = displayNum_2;
  });
});