let num1 = '';
let num2 = '';
let operator = null;
let result = null;

let inputText = document.querySelector('#display-screen input');
const equalBtn = document.querySelector('.button .equal');
const clearBtn = document.querySelector('.button .clear'); 

const addNumber = (input) => {
    if (operator === null) {
    num1 += input;
    inputText.value = num1;
    console.log('Num1',num1);
    } else {
    inputText.value = '';
    num2 += input;
    inputText.value = num2;
    console.log('Num2',num2);
    }
}
function delNumber() {
    if (operator === null) {
        inputText.value = num1.slice(0,-1);
        num1 = inputText.value;
    } else {
        inputText.value = num2.slice(0,-1);
        num2 = inputText.value;
    }
}

function funcName(op) {
    if (num1 !== '' && num2 !== '') {
        equal();
    }
    operator = op;
    console.log(operator);
}

function clearCalc() {
    inputText.value = '';
    num1 = '';
    num2 = '';
    operator = null;
    result = null;
}

function equal() {
    if (num1 === '' || num2 === '') return;
    if (operator === '+') {
        result = Number(num1) + Number(num2);
    } else if (operator === '-') {
        result = Number(num1) - Number(num2);
    } else if (operator === '*') {
        result = Number(num1) * Number(num2);
    }
    else if (operator === '/') {
        if (num2 === '0') {
            result = 'Error';
        } else {
            result = Number(num1) / Number(num2);
        }
    } else {
        result = 'Error'
    }
    console.log('Result',result);
    num1 = result;
    num2 = '';
    inputText.value = result;
    console.log(num1);
}