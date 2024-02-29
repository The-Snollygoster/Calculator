const decimal = document.querySelector('.decimal');
const clearButton = document.querySelector('#clear');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');
const empty = document.querySelector('#empty');
let display = document.querySelector('.display');
let smallDisplay = document.querySelector('.smallDisplay');
let currentValue = '';
let argumentOne = '';
let operator = '';
let argumentTwo = '';
let answer = '';

function addition(x, y) {
    return answer = x + y;
};
function subtraction(x, y) {
    return answer = x - y;
};
function multiplication(x, y) {
    return answer = x * y;
};
function division(x, y) {
    if (y == 0) {
        return answer = '????'
    } else {
        return answer = x / y;
    }
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

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent == answer && answer !== '') {
            empty.click()
            display.textContent += button.id;
            currentValue += button.id;
        } else {
            display.textContent += button.id;
            currentValue += button.id;
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (argumentOne == '') {
            argumentOne = Number(currentValue);
            operator = button.id;
            smallDisplay.textContent = currentValue + operator;
            currentValue = '';
            display.textContent = '';
        } else if (argumentOne !== '') {
            if (answer == '') {
                argumentTwo = Number(currentValue);
                operate(argumentOne, operator, argumentTwo);
                operator = button.id;
                smallDisplay.textContent = answer + operator;
                display.textContent = '';
                currentValue = display.textContent;
            } else {
                argumentOne = Number(smallDisplay.textContent.slice(0, (smLength-1)));
                argumentTwo = Number(currentValue);
                operate(argumentOne, operator, argumentTwo);
                operator = button.id;
                smallDisplay.textContent = answer;
                display.textContent = '';
                currentValue = display.textContent;
            }
        }
    });
});

equals.addEventListener('click', () => {
    if (smallDisplay.textContent == '') {
        argumentTwo = Number(currentValue);
        operate(argumentOne, operator, argumentTwo);
        display.textContent = answer;
        currentValue = display.textContent;
    } else {
        let smLength = smallDisplay.textContent.length;
        argumentOne = Number(smallDisplay.textContent.slice(0, (smLength-1)));
        argumentTwo = Number(currentValue);
        operate(argumentOne, operator, argumentTwo);
        display.textContent = answer;
        currentValue = display.textContent;
        smallDisplay.textContent = '';
    }
});

clearButton.addEventListener('click', () => {
    display.textContent = ''; currentValue = display.textContent});

backspace.addEventListener('click', () => {
    let length = display.textContent.length;
    display.textContent = display.textContent.slice(0, (length-1));
    currentValue = currentValue.slice(0, (length-1));
});

empty.addEventListener('click', () => {
    display.textContent = '';
    smallDisplay.textContent = '';
    currentValue = '';
    argumentOne = '';
    operator = '';
    argumentTwo = '';
    answer = '';
});

decimal.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        decimal.disabled = true;
    } else {
        display.textContent += decimal.id;
        currentValue += decimal.id;
    }
});

// limit the display

// Also want to round decimals so they fit inside the display.

// add commas for big numbers

// add more complex scientific calc buttons

// Mess around with where the numbers are. They're too close to the display edge for me