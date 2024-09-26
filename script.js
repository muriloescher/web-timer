let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    document.getElementById("timer").innerHTML = formatTime(minutes, seconds);
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    document.getElementById("timer").innerHTML = formatTime(minutes, seconds);
}

function formatTime(min, sec) {
    return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
}
