import {startTimeCountdown, resetTime, stopTimeCountdown} from '../components/timer'

const focusContainer = document.querySelector(".focus-container");

export function createFocus() {
    createTheCard();
}

function createTheCard() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("sub-heading-container");
    const subHeading = createSubHeading();
    headerContainer.appendChild(subHeading);
    focusContainer.appendChild(headerContainer);

    const time = showTime("25:00", "focus-time");
    focusContainer.appendChild(time);

    const buttons = createButtons();
    focusContainer.appendChild(buttons);
}

function createSubHeading() {
    const subHeading = document.createElement("p");
    subHeading.classList.add("sub-heading");
    subHeading.textContent = "Focus";
    return subHeading;
}

function createButtons(){
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    let startButton = document.createElement("button");
    startButton.classList.add("start-button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", startButtonFunction)

    let stopButton = document.createElement("button");
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
    let timeEl = document.createElement("p");
    timeEl.classList.add(timeClass);
    timeEl.textContent = time;
    showTimeContainer.appendChild(timeEl);
    return showTimeContainer;
}

function startButtonFunction(){
    startTimeCountdown(25, "focus-time");
}

function stopButtonFunction() {
    stopTimeCountdown("focus-time");
    resetTime("25:00", "focus-time");
}
