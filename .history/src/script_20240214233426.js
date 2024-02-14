// Declarations
const displayOne = document.querySelector(".display-1");
const displayTwo = document.querySelector(".display-2");
const displayTemp = document.querySelector(".display-temp");

const numberElement = document.querySelectorAll(".number");
const operationElement = document.querySelectorAll(".operation");

const equalElement = document.querySelector(".equal-sign");

const allClearElement = document.querySelector(".clear-all");
const lastClearElement = document.querySelector(".clear-last");

let displayNum1 = "";
let displayNum2 = "";
let displayResult = null;

let lastOperation = "";
let haveDot = false;


//  Displaying clicked numbers & checking for duplicate dots
numberElement.forEach((number) => {
  number.addEventListener('click', (e) => {
    if(e.target.innerText === '.' && !haveDot){
      haveDot = true;
    }else if (e.target.innerText === '.' && haveDot){
      return;
    }
    displayNum2 += e.target.innerText;
    displayTwo.innerText = displayNum2;
  });
});

// Display operators and eliminate duplicates
operationElement.forEach((operation) => {
  operation.addEventListener('click', (e) => {
    if (!displayNum2) return;
    haveDot = false;
    const operationName = e.target.innerText;

    if (displayNum1 && displayNum2 && lastOperation) {
      calculate();
    } else {
      result = parseFloat(displayNum2);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

// Calculate function
if(lastOperation ===)