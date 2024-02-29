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

// Clear button functionality to empty the display 
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {display.textContent = ''; currentValue = display.textContent});

// Display population function and number button listeners
const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.id;
        currentValue += button.id;
    });
});
// Listener for the operators, capturing the current displayValue and 
// operator and emptying display for second number
const operators = document.querySelectorAll('.operator');
operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (argumentOne == '') {
            argumentOne = Number(currentValue);
            operator = button.id;
            currentValue = '';
            display.textContent = '';
        } else if (argumentOne !== '') {
            if (argumentOne !== '' && answer == '') {
                argumentTwo = Number(currentValue);
                operate(argumentOne, operator, argumentTwo);
                operator = button.id;
                smallDisplay.textContent = answer;
                display.textContent = '';
                currentValue = display.textContent;
            } else {
                argumentOne = Number(smallDisplay.textContent);
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

// equals function, that takes the value in display as the second argument and passed them 
// into the operate function
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (smallDisplay.textContent == '') {
        argumentTwo = Number(currentValue);
        operate(argumentOne, operator, argumentTwo);
        display.textContent = answer;
        currentValue = display.textContent;
    } else {
        argumentOne = Number(smallDisplay.textContent); 
        argumentTwo = Number(currentValue);
        operate(argumentOne, operator, argumentTwo);
        display.textContent = answer;
        currentValue = display.textContent;
        smallDisplay.textContent = '';
    }
});

// Backspace functionality
const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    let length = display.textContent.length;
    display.textContent = display.textContent.slice(0, (length-1));
    currentValue = currentValue.slice(0, (length-1));
});

// Clear button functionality to empty all data
const empty = document.querySelector('#empty');
empty.addEventListener('click', () => {
display.textContent = '';
smallDisplay.textContent = '';
currentValue = '';
argumentOne = '';
operator = '';
argumentTwo = '';
answer = '';
});

// so if the display is showing an answer. Somehow see that, then, if the next button pressed
// is a number button, not an operator, it will clear the calc.

// Yeah if there is an answer displayed and you go to click a number, it concatenates with the answer
// so maybe something like. If I press a number button when the display is showing something equal to 
// an answer, wipe the display first??

// limit the display

// Also want to round decimals so they fit inside the display.

// Make the decimal work but disable it when there is already a decimal in the display

// Allow functionality that multiple presses of equals will copy the last calculation done

// add commas for big numbers

// add more complex scientific calc buttons

// When you press an operator, print the value and operator to the small screen first. 
// Then have it take another value. If you press equals at that point. Have the small 
// display show the entire calculation. 10 + 10 = big display will show the answer.

// Mess around with where the numbers are. They're too close to the display edge for me