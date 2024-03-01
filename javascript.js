let firstNum = 0;
let secondNum = 0;
let operator = '';
let operatorArray = ['+', '-', 'x', '÷'];

let display = document.querySelector('.display');
let numberButton = Array.from(document.querySelectorAll('.number, .operator'));
let equalButton = document.querySelector('#equals')

equalButton.addEventListener('click', function() {
    setNums(display.textContent);
    display.textContent = operate(firstNum, secondNum, operator);
    return
})

numberButton.forEach(numToDisplay);

function setNums(str) {
    let operatorInd = str.indexOf(operator);
    firstNum = Number(str.substring(0, operatorInd));
    secondNum = Number(str.substring(operatorInd+1, str.length));
    return firstNum, secondNum
}

function numToDisplay(item) {
    item.addEventListener('click', function() {
        display.textContent += item.textContent;
        if (operatorArray.some((operand) => operand === item.textContent)) {
            operator = item.textContent;
        }
    });
    return
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
        case 'x':
            res = multiplyTwoNums(num1, num2);
            break;
        case '÷':
            res = divideTwoNums(num1, num2);
            break;
        default:
            res = 0;
            break;
    }
    return res
}