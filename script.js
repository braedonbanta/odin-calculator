// Include functions: add, subtract, multiply, divide

let displayValue = document.querySelector(".input-text");
let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let equalButton = document.querySelector("#equal-button");
let allowDecimal = true;
let operatorActive = false;
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
    displayValue.textContent += String(numberClicked.textContent);
    if (numberClicked == ".") {
        allowDecimal = false;
    }
}

function processOperatorInput(operatorClicked) {
    if (operatorActive) {
        operatorActive = false;
        processEqualInput();
        num1 = Number(displayValue.textContent);
        operator = operatorClicked.textContent;
    } else {
        num1 = Number(displayValue.textContent);
        operator = operatorClicked.textContent;
        operatorActive = true;
        displayValue.textContent = "";
    }
    
}

function processEqualInput() {
    num2 = Number(displayValue.textContent);
    let answer = operate(operator, num1, num2);
    displayValue.textContent = answer;
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
