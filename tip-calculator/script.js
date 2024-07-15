const bill = document.getElementById('bill')
const tip = document.getElementById('tip')
const btn = document.getElementById('btn');
const total = document.getElementById('total');

function tipCalc() {
    const billValue = bill.value;
    const tipValue = tip.value;
    const totalValue = +billValue + (+tipValue/100 *+billValue);
    total.innerText = totalValue.toFixed(2);
}
btn.addEventListener('click',tipCalc);



