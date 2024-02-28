// declared variables for computation
const display = document.querySelector('.display');
let displayValue = '';
let argumentOne;
let operator;
let argumentTwo;

// Basic functions
function addition(x, y) {
    return display.textContent = x + y;
};
function subtraction(x, y) {
    return display.textContent = x - y;
};
function multiplication(x, y) {
    return display.textContent = x * y;
};
function division(x, y) {
    return display.textContent = x / y;
};

function operate(a, b, c) {
    if (b == '+') {
        addition(a,c);
    } else if (b == '-') {
        subtraction(a,c);
    } else if (b == '*') {
        multiplication(a,c);
    } else if (b == '/') {
        division(a,c);
    }
};

// Clear button functionality
const clearButton = document.querySelector('#clearElse');
clearButton.addEventListener('click', () => display.textContent = '');

// Display population function and number button listeners
const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.id;
        displayValue += button.id;
    });
});
// Listener for the operators, capturing the current displayValue and 
// operator and emptying display for second number
const operators = document.querySelectorAll('.operator');
operators.forEach((button) => {
    button.addEventListener('click', () => {
        argumentOne = Number(displayValue);
        operator = button.id;
        displayValue = '';
        display.textContent = '';
    });
});

// equals function, that takes the value in display as the second argument and passed them 
// into the operate function
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    argumentTwo = Number(displayValue);
    operate(argumentOne, operator, argumentTwo)
    displayValue = '';
});