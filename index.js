const decimal = document.querySelector('.decimal');
const clearButton = document.querySelector('#clear');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');
const empty = document.querySelector('#empty');
const plusMinus = document.querySelector('#convert');
const root = document.querySelector('#root');
const square = document.querySelector('#square');
const percent = document.querySelector('#percent');
const oBracket = document.querySelector('#openBracket');
const cBracket = document.querySelector('#closeBracket');
let display = document.querySelector('.display');
let smallDisplay = document.querySelector('.smallDisplay');
let currentValue = '';
let argumentOne = '';
let operator = '';
let argumentTwo = '';
let answer = '';

function addition(x, y) {
    return answer = (x + y);
};
function subtraction(x, y) {
    return answer = x - y;
};
function multiplication(x, y) {
    return answer = x * y;
};
function division(x, y) {
    if (y === 0) {
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
        if (display.value.length > 8) {
            display.value = display.value;
            currentValue = display.value;
        } else if (display.value == answer && answer !== '') {
            empty.click();
            display.value += button.id;
            currentValue += button.id;
        } else {
            display.value += button.id;
            currentValue += button.id;
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => { 
        if (argumentOne == '') {
            argumentOne = Number(currentValue);
            operator = button.id;
            if (operator == '*') {
                smallDisplay.textContent = currentValue + 'x';
            } else if (operator == '/') {
                smallDisplay.textContent = currentValue + '÷';
            } else {
                smallDisplay.textContent = currentValue + operator;
            }
            currentValue = '';
            display.value = '';
        } else if (argumentOne !== '') {
            if (answer == '') {
                argumentTwo = Number(currentValue);
                operate(argumentOne, operator, argumentTwo);
                operator = button.id;
                smallDisplay.textContent = answer + operator;
                display.value = '';
                currentValue = display.value;
            } else {
                let smLength = smallDisplay.textContent.length;
                argumentOne = Number(smallDisplay.textContent.slice(0, (smLength-1)));
                argumentTwo = Number(currentValue);
                operate(argumentOne, operator, argumentTwo);
                operator = button.id;
                smallDisplay.textContent = answer + operator;
                display.value = '';
                currentValue = display.value;
            }
        }
    });
});

equals.addEventListener('click', () => {
    if (smallDisplay.textContent == '') {
        argumentTwo = Number(currentValue);
        operate(argumentOne, operator, argumentTwo);
        display.value = answer;
        currentValue = display.value;
    } else {
        let smLength = smallDisplay.textContent.length;
        argumentOne = Number(smallDisplay.textContent.slice(0, (smLength-1)));
        argumentTwo = Number(currentValue);
        operate(argumentOne, operator, argumentTwo);
        display.value = answer;
        currentValue = display.value;
        smallDisplay.textContent = '';
    }
});

clearButton.addEventListener('click', () => {
    display.value = ''; currentValue = display.value});

backspace.addEventListener('click', () => {
    let length = display.value.length;
    display.value = display.value.slice(0, (length-1));
    currentValue = currentValue.slice(0, (length-1));
});

empty.addEventListener('click', () => {
    display.value = '';
    smallDisplay.textContent = '';
    currentValue = '';
    argumentOne = '';
    operator = '';
    argumentTwo = '';
    answer = '';
});

decimal.addEventListener('click', () => {
    if (display.value.includes('.')) {
        decimal.disabled = true;
    } else {
        display.value += decimal.id;
        currentValue += decimal.id;
    }
});

convert.addEventListener('click', () => {
    if (currentValue > -1) {
    display.value = -Math.abs(currentValue);
    currentValue = display.value;
    } else if (currentValue < 0) {
    display.value = Math.abs(currentValue);
    currentValue = display.value;
    }
});

root.addEventListener('click', () => {
    let rootAnswer = Math.sqrt(currentValue);
    if (rootAnswer.toString().length > 9) {
        display.value = rootAnswer.toFixed(5)
    } else {
        display.value = Math.sqrt(currentValue);
    }
    currentValue = display.value;
    answer = display.value;
});

square.addEventListener('click', () => {
    display.value = currentValue * currentValue;
    currentValue = display.value;
});

percent.addEventListener('click', () => {

});
percent.disabled = true;

oBracket.addEventListener('click', () => {
    display.value += '(';
});
oBracket.disabled = true;

cBracket.addEventListener('click', () => {
    display.value += ')';
});
cBracket.disabled = true;

// add commas for big numbers

// allow the use of minus as the first button pressed to express a negative number