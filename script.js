// Include functions: add, subtract, multiply, divide

let displayValue = document.querySelector(".input-text");
let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let equalButton = document.querySelector("#equal-button");
let clearButton = document.querySelector("#clear-button");
let allowDecimal = true;
let operatorActive = false;
let justEntered = false;
let justAltEntered = false;
let num1;
let num2;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}


function processNumberInput(numberClicked) {
    if (numberClicked.textContent == ".") {
        if (allowDecimal && justEntered == false && justAltEntered == false) {
            displayValue.textContent += numberClicked.textContent;
            allowDecimal = false;
        }
    } else if (justEntered == true) {
        processClear();
        justEntered = false;
    } else {
        if (justAltEntered) {
            displayValue.textContent = "";
            displayValue.textContent += Number(numberClicked.textContent);
            justAltEntered = false;
        } else {
        displayValue.textContent += Number(numberClicked.textContent);
        }
    }
}

function processOperatorInput(operatorClicked) {
    if (operatorClicked.textContent == "=") {
        if (num1 != null) {
            processEqualInput();
        } 
    } else { // Two situations: one where num 1 isn't entered, one where it is
        if (num1 != null) { // This should calculate with the previous operator and values
            processEqualInput();
            operator = operatorClicked.textContent;
            num1 = Number(displayValue.textContent);
            justAltEntered = true;
        } else {
            operator = operatorClicked.textContent;
            num1 = Number(displayValue.textContent);
            displayValue.textContent = "";
            allowDecimal = true;
        }
    }
}

function processEqualInput() {
    num2 = Number(displayValue.textContent);
    let answer = operate(operator, num1, num2);
    num1 = null;
    num2 = null;
    displayValue.textContent = answer;
}

function processClear() {
    num1 = null;
    num2 = null;
    operatorActive = false;
    allowDecimal = true;
    justEntered = false;
    displayValue.textContent = null;
}


numberButtons.forEach((button) => {
    button.addEventListener("click", function () {
        processNumberInput(button);});
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        processOperatorInput(button);
    })
})

equalButton.addEventListener("click", function () {
    processEqualInput();
});

clearButton.addEventListener("click", function () {
    processClear();
})