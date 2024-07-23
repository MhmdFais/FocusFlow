// FOCUS TIME -- 25 MINS
// SHORT BREAK TIME -- 5 MINS
// LONG BREAK TIME -- 15 MINS

export function showTime(time){
    const showTimeContainer = document.createElement("div");
    showTimeContainer.classList.add("time-container");
    const timeEl = document.createElement("p");
    timeEl.classList.remove("time");
    timeEl.textContent = "";
    timeEl.classList.add("time");
    timeEl.textContent = time;
    showTimeContainer.appendChild(timeEl);
    return showTimeContainer;
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

export function resetTime(time) {
    const countdownEl = document.querySelector('.time');
    countdownEl.innerHTML = time;
}


