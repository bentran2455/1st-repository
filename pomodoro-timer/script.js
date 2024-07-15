let timeSec = 30;
const timeClock = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let intervalId;

const updateClock = () => {
    if (timeSec >= 0) {
        timeClock.innerText = `00:${timeSec < 10 ? '0' : ''}${timeSec--}`;
    }
    if (timeSec === 0) {
        clearInterval(intervalId);
    }
}

const startTimer = () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
    timeSec = 30;
    intervalId = setInterval(updateClock, 1000);
}
const stopTimer = () => {
    clearInterval(intervalId);
}
const resetTimer = () => {
    clearInterval(intervalId);
    timeSec = 30;
    intervalId = setInterval(updateClock, 1000);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
