const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const specialOperators = document.querySelectorAll('.specialOperator');
const additionalButtons = document.querySelectorAll('.button');
const equals = document.querySelector('#equals');
let display = document.querySelector('.display');
let smallDisplay = document.querySelector('.smallDisplay');
let smLength = smallDisplay.textContent.length;
let currentValue = '';
let argumentOne = '';
let operator = '';
let argumentTwo = '';
let answer = '';

function addition(x, y) {
    return answer = (x + y).toFixed(2).replace(/[.,]0+$/, "");;
};
function subtraction(x, y) {
    return answer = (x - y).toFixed(2).replace(/[.,]00$/, "");;
};
function multiplication(x, y) {
    return answer = (x * y).toFixed(2).replace(/[.,]00$/, "");;
};
function division(x, y) {
    if (y === 0) {
        return answer = 'Error';
    } else {
        return answer = (x / y).toFixed(2).replace(/[.,]00$/, "");;
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
        // } else if (display.value == answer && answer !== '') {
        //     document.getElementById('clear').click();
        //     display.value += button.id;
        //     currentValue += button.id;
        // } else if (display.value == argumentOne && argumentTwo == '') {
        //     document.getElementById('clear').click();
        //     display.value += button.id;
        //     currentValue += button.id;
        // } else if (display.value == argumentTwo) {
        //     document.getElementById('clear').click();
        //     display.value += button.id;
        //     currentValue += button.id;
        } else {
            display.value += button.id;
            currentValue += button.id;
        }

        if (display.value.includes('.')) {
            document.getElementById('.').disabled = true;
        } else {
            document.getElementById('.').disabled = false;
        }
    });
});

// can't do 4 + 44 right now because when I type 44. When I hit the second 4, it clears first, then retypes 4.
// Which only happens when argument 2 matches the display value

operators.forEach((button) => {
    button.addEventListener('click', () => { 
        if (button.id == '-' && display.value == '') {
            display.value = '-';
            currentValue += button.id;
        } else if (argumentOne == '') {
            argumentOne = Number(currentValue);
            operator = button.id;
            if (operator == '*') {
                smallDisplay.textContent = currentValue + 'x';
            } else if (operator == '/') {
                smallDisplay.textContent = currentValue + '÷';
            } else {
                smallDisplay.textContent = currentValue + operator;
            }
            currentValue = display.value;
            document.getElementById('clear').click();
        } else if (argumentOne !== '') {
            if (answer == '') {
                argumentTwo = Number(currentValue);
                operate(argumentOne, operator, argumentTwo);
                operator = button.id;
                smallDisplay.textContent = answer + operator;
                currentValue = display.value;
                document.getElementById('clear').click();
            } else if (display.value == answer) { 
                argumentOne = answer;
                operator = button.id;
                smallDisplay.textContent = answer + operator;
                currentValue = display.value;
                document.getElementById('clear').click();
            } else {
                argumentOne = Number(smallDisplay.textContent.slice(0, (smLength-1)));
                argumentTwo = Number(currentValue);
                operate(argumentOne, operator, argumentTwo);
                operator = button.id;
                smallDisplay.textContent = answer + operator;
                currentValue = display.value;
                document.getElementById('clear').click();
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
        argumentOne = Number(smallDisplay.textContent.slice(0, (smLength-1)));
        argumentTwo = Number(currentValue);
        operate(argumentOne, operator, argumentTwo);
        display.value = answer;
        currentValue = display.value;
        smallDisplay.textContent = '';
    }
});

additionalButtons.forEach((button) => {
    button.addEventListener('click', () => { 
        if (button.id == 'empty') {
            display.value = '';
            smallDisplay.textContent = '';
            currentValue = '';
            argumentOne = '';
            operator = '';
            argumentTwo = '';
            answer = '';
            document.getElementById('.').disabled = false;
        } else if (button.id == 'clear') {
            display.value = ''; 
            currentValue = display.value;
            document.getElementById('.').disabled = false;
        } else if (button.id == 'backspace') {
            let length = display.value.length;
            display.value = display.value.slice(0, (length-1));
            currentValue = currentValue.slice(0, (length-1));
        }
    });
});

specialOperators.forEach((button) => {
    button.addEventListener('click', () => { 
        if (button.id == 'convert') {
            if (currentValue > -1) {
                display.value = -Math.abs(currentValue);
                currentValue = display.value;
            } else if (currentValue < 0) {
                display.value = Math.abs(currentValue);
                currentValue = display.value;
            }
        } else if (button.id == 'root') {
            let rootAnswer = Math.sqrt(currentValue);
            if (rootAnswer.toString().length > 9) {
                display.value = rootAnswer.toFixed(5)
            } else {
                display.value = Math.sqrt(currentValue);
            }
            currentValue = display.value;
            answer = display.value;
        } else if (button.id == 'square') {
            display.value = currentValue * currentValue;
            currentValue = display.value;
        } else if (button.id == 'percent') {
            if (typeof Number(display.value) === 'number' && typeof argumentOne === 'number') {
                if (operator == '*') {
                    display.value = currentValue / 100 * argumentOne;
                    currentValue = display.value;
                    answer = display.value;
                } else if (operator == '+') {
                    let percentInt = currentValue / 100 * argumentOne;
                    display.value = argumentOne + percentInt;
                    currentValue = display.value;
                    answer = display.value;
                } else if (operator == '-') {
                    let percentInt = currentValue / 100 * argumentOne;
                    display.value = argumentOne - percentInt;
                    currentValue = display.value;
                    answer = display.value;
                } else {
                    display.value = 'Error';
                }
            } else {
                display.value = 'Error';
            } 
        }
    });
});

document.addEventListener('keydown', (event) => {keyDown(event.key)});

function keyDown(key) {
    if (key == 'Enter') {
        document.getElementById('equals').click();
    } else if (key == 'Backspace') {
        document.getElementById('backspace').click();
    } else if (key == 'Escape') {
        document.getElementById('empty').click();
    } else if (key == '+' || key == '-' || key == '/' || key == '*' || key == '.') {
        document.getElementById(key).click();
    } else if (typeof Number(key) === 'number') {
        document.getElementById(key).click();
    }
};