const buttonUp = document.querySelector('.btn-up');
const buttonReset = document.querySelector('.btn-reset');
const buttonDown = document.querySelector('.btn-down');
const count = document.getElementById('counter');
let countNum = Number(count.innerHTML);


buttonUp.addEventListener('click',increase);
buttonReset.addEventListener('click',reset);
buttonDown.addEventListener('click',decrease);

function increase() {
    countNum++;
    count.innerHTML = countNum;
}

function reset() {
    countNum = 0;
    count.innerHTML = countNum;
}

function decrease() {
    countNum--;
    count.innerHTML = countNum;
}
