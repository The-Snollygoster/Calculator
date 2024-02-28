let argumentOne = '';
let operator = '';
let argumentTwo = '';

function addition(x, y) {
    return x + y;
};
function subtraction(x, y) {
    return x - y;
};
function multiplication(x, y) {
    return x * y;
};
function division(x, y) {
    return x / y;
};

function operate(a, b, c) {
    if (b == '+') {
        addition(a,c);
    } else if (b == '-') {
        subtraction(a,c);
    } else if (b == 'x') {
        multiplication(a,c);
    } else if (b == '/') {
        division(a,c);
    }
};

// Clear button functionality
const clearButton = document.querySelector('#clearElse');
let display = document.querySelector('.display');
clearButton.addEventListener('click', () => display.textContent = '');