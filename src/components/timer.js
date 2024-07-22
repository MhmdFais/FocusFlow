// FOCUS TIME -- 25 MINS
// BREAK TIME -- 5 MINS

export function showTime(time){
    const time = document.createElement("p");
    time.classList.add("time");
    time.textContent = time;
    return time;
}

export function startTimeCountdown(time) {
    let startingMinutes = time;
    let timeLeft = startingMinutes * 60;

    const countdownEl = document.querySelector('.time');

    setInterval(() => {
        updateCountdown(timeLeft, countdownEl);
        timeLeft--;
    }, 1000);
}

function updateCountdown(timeLeft, countdownEl) {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
}


