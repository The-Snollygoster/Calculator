// declared variables for computation
let display = document.querySelector('.display');
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

// Clear button functionality to empty the display 
const clearButton = document.querySelector('#clear');
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

// Backspace functionality
const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    let length = display.textContent.length;
    display.textContent = display.textContent.slice(0, (length-1));
    displayValue = displayValue.slice(0, (length-1));
});

// Clear button functionality to empty all data
const empty = document.querySelector('#empty');
empty.addEventListener('click', () => {
display.textContent = '';
displayValue = '';
argumentOne = '';
operator = '';
argumentTwo = '';
});

// Once a calculation is done. Change it so the next button pressed 'restarts'
// ATM you have to clear before you use again
// Allow functionality that multiple presses of equals will copy the last calculation done
// add more complex scientific calc buttons
// Make the decimal work but disable it when there is already a decimal in the display
// Also want to round decimals so they fit inside the display.
// create error message for divide by 0
// All strings of operators eg 12 + 7 - 5 * 3 