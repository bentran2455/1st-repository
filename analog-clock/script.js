const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const hand = document.querySelector('.hand');

function setRotation(hand, rotation) {
    hand.style.setProperty('--rotation',rotation);
}

function setClock() {
    const currentDate = new Date();
    const currentSecond = currentDate.getSeconds()/60;
    const currentMinute = (currentSecond + currentDate.getMinutes())/60;
    const currentHour = (currentMinute + currentDate.getHours())/12;
    console.log(currentDate);
    setRotation(hourHand,currentHour*360);
    setRotation(minuteHand,currentMinute*360)
    setRotation(secondHand,currentSecond*360)
}; 

setInterval(setClock,1000);

