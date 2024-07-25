import {startTimeCountdown, resetTime, stopTimeCountdown} from '../components/timer'

const shortBreakContainer = document.querySelector(".short-break-container");

export function createShortBreak() {
    createTheShortCard();
}

function createTheShortCard() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("sub-heading-container");
    const subHeading = createSubHeading();
    headerContainer.appendChild(subHeading);
    shortBreakContainer.appendChild(headerContainer);

    const time = showTime("5:00", "short-break-time");
    shortBreakContainer.appendChild(time);

    const buttons = createButtons();
    shortBreakContainer.appendChild(buttons);
}

function createSubHeading() {
    const subHeading = document.createElement("p");
    subHeading.classList.add("sub-heading");
    subHeading.textContent = "Short Break";
    return subHeading;
}

function createButtons(){
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const startButton = document.createElement("button");
    startButton.classList.add("start-button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", startButtonFunction)

    const stopButton = document.createElement("button");
    stopButton.classList.add("stop-button");
    stopButton.textContent = "Reset";
    stopButton.addEventListener("click", stopButtonFunction)

    buttonsContainer.appendChild(startButton);
    buttonsContainer.appendChild(stopButton);

    return buttonsContainer;
}

function showTime(time, timeClass){
    const showTimeContainer = document.createElement("div");
    showTimeContainer.classList.add("time-container");
    let timeEle = document.createElement("p");
    timeEle.classList.add(timeClass);
    timeEle.textContent = time;
    showTimeContainer.appendChild(timeEle);
    return showTimeContainer;
}

function startButtonFunction(){
    startTimeCountdown(5, "short-break-time");
}

function stopButtonFunction() {
    stopTimeCountdown("short-break-time");
    resetTime("5:00", "short-break-time");
}
