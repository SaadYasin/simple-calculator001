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
let result = null;

let lastOperation = "";
let haveDot = false;

/* ******************************************************** */
/* Displaying clicked numbers & checking for duplicate dots */
/* ******************************************************** */
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

/* ****************************************** */
/* Display operators and eliminate duplicates */
/* ****************************************** */
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
    // Using clearVar function to clear the entered operation sign
    clearVar(operationName);
    lastOperation = operationName;
  });
});

/* ****************** */
/* Clear var function */
/* ****************** */
const clearVar = (name = "") => {
  displayNum1 += displayNum2 + " " + name + " ";
  displayOne.innerText = displayNum1;
  displayTwo.innerText = "0";
  displayNum2 = "";
  displayTemp.innerText = result;
};


/* ************************************************************* */
/* Calculate function - to perform thr mathematical calculations */
/* ************************************************************* */
const calculate = () => {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(displayNum2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(displayNum2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(displayNum2);
  } else if (lastOperation === "÷") {
    result = parseFloat(result) / parseFloat(displayNum2);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(displayNum2);
  }
};

equalEl.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  calculate();
  clearVar();
  displayTwo.innerText = result;
  displayTemp.innerText = "";
  displayNum2 = result;
  displayNum1 = "";
});