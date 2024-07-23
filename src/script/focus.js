import {showTime, startTimeCountdown, resetTime, stopTimeCountdown} from '../components/timer'

const focusContainer = document.querySelector(".focus-container");

export function createFocus() {
    createTheCard();
}

function createTheCard() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("sub-headeing-container");
    const subHeading = createSubHeading()
    headerContainer.appendChild(subHeading);
    focusContainer.appendChild(headerContainer);

    const time = showTime("25:00");
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

    const startButton = document.createElement("button");
    startButton.classList.add("start-button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", startButtonFunction)

    const stopButton = document.createElement("button");
    stopButton.classList.add("stop-button");
    stopButton.textContent = "Stop";
    stopButton.addEventListener("click", stopButtonFunction)

    buttonsContainer.appendChild(startButton);
    buttonsContainer.appendChild(stopButton);

    return buttonsContainer;
}

function startButtonFunction(){
    startTimeCountdown(25);
}

function stopButtonFunction() {
    stopTimeCountdown();
    resetTime("25:00");
}