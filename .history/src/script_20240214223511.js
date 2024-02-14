// Declarations
const displayOne = document.querySelector("#display-1");
const displayTwo = document.querySelector("#display-2");
const displayTemp = document.querySelector("#display-temp");

const numberElement = document.querySelectorAll(".number");
const operatorElement = document.querySelectorAll(".operator");

const equalElement = document.querySelector("#equal-sign");

const allClearElement = document.querySelector("#clear-all");
const lastClearElement = document.querySelector("#clear-last");

let displayNum1 = "";
let displayNum2 = "";
let displayResult = null;

let lastOperation = "";
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