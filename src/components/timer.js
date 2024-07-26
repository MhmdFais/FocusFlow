// // FOCUS TIME -- 25 MINS
// // SHORT BREAK TIME -- 5 MINS
// // LONG BREAK TIME -- 15 MINS


let timerInterval = null;
let startButtonPressed = false;

export function startTimeCountdown(minutes, timeClass) {
    if (!startButtonPressed) {
        let timeLeft = minutes * 60;
        const countdownEl = document.querySelector(`.${timeClass}`);

        if (timerInterval) {
            clearInterval(timerInterval);
        }

        updateCountdown(timeLeft, countdownEl); 

        timerInterval = setInterval(() => {
            timeLeft--;
            updateCountdown(timeLeft, countdownEl);
            if (timeLeft < 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
        startButtonPressed = !startButtonPressed;
    }
}

function updateCountdown(timeLeft, countdownEl) {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
}

export function resetTime(time, timeClass) {
    const countdownEl = document.querySelector(`.${timeClass}`);
    countdownEl.innerHTML = time;
}

export function stopTimeCountdown(timeClass) {
    if (timerInterval) {
        clearInterval(timerInterval);
        startButtonPressed = !startButtonPressed;
        timerInterval = null;
    }
}




