let firstNum = 0;
let secondNum = 0;
let operator = '';

let display = document.querySelector('.display');
let numberButton = Array.from(document.querySelectorAll('.number'));

numberButton.forEach(numToDisplay);

function numToDisplay(item) {
    item.addEventListener('click', function() {
        display.textContent += item.textContent;
    });
}

function addTwoNums(num1, num2) {
    return num1 + num2
}

function subtractTwoNums(num1, num2) {
    return num1 - num2
}

function multiplyTwoNums(num1, num2) {
    return num1 * num2
}

function divideTwoNums(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    let res = 0;
    switch (operator) {
        case '+':
            res = addTwoNums(num1, num2);
            break;
        case '-':
            res = subtractTwoNums(num1, num2);
            break;
        case '*':
            res = multiplyTwoNums(num1, num2);
            break;
        case '/':
            res = divideTwoNums(num1, num2);
            break;
        default:
            res = 0;
            break;
    }
    return res
}