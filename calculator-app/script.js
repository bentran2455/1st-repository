let num1 = '';
let num2 = '';
let operator = null;

const result = document.getElementById('display-screen');
const del = document.querySelector('.button .del');

function addNumber(num) {
    num1 = num;
    result.textContent = num;
}

function delNumber() {
    result.textContent = 0;
}

function plus() {
    result
}
