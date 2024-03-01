let firstNum = 0;
let secondNum = 0;
let operator = '';
let operatorArray = ['+', '-', 'x', '÷'];

let display = document.querySelector('.display');
let numberButton = Array.from(document.querySelectorAll('.number, .operator'));
let equalButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');
let signButton = document.querySelector('#sign');
let decimalButton = document.querySelector('#decimal');
let operatorButton = Array.from(document.querySelectorAll('.operator'));


decimalButton.addEventListener('click', function() {
    if (display.textContent.includes('.')) {
        return
    }
    else {
        display.textContent += decimalButton.textContent;
    }
    return
});

signButton.addEventListener('click', function() {
    if (display.textContent[0] === '-') {
        display.textContent = display.textContent.substring(1);
    }
    else {
        display.textContent = '-' + display.textContent;
    }
})

clearButton.addEventListener('click', function() {
    display.textContent = '';
});


equalButton.addEventListener('click', function() {
    secondNum = Number(display.textContent);
    let res = operate(firstNum, secondNum, operator);
    let strSplit = getDecimals(String(res));
    if (strSplit[1]) {
        display.textContent = Number(strSplit[0]) + Number(Number('.' + strSplit[1]).toFixed(2));
    }
    else {
        display.textContent = res
    }
    return
})


numberButton.forEach(numToDisplay);

function numToDisplay(item) {
    item.addEventListener('click', function() {
        if (display.textContent === '0') {
            display.textContent = item.textContent;
        }
        else if (operatorArray.some((operand) => operand === item.textContent)) {
            operator = item.textContent;
            firstNum = Number(display.textContent);
            display.textContent = ''
        }
        else {
            display.textContent += item.textContent;
        }
    });
    return
}

function getDecimals(str) {
    return str.split('.');
};

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