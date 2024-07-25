import {showTime, startTimeCountdown, resetTime, stopTimeCountdown} from '../components/timer'

const shortBreakContainer = document.querySelector(".short-break-container");

export function createShortBreak() {
    createTheCard();
}

function createTheCard() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("sub-headeing-container");
    const subHeading = createSubHeading()
    headerContainer.appendChild(subHeading);
    shortBreakContainer.appendChild(headerContainer);

    const time = showTime("05:00");
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

function startButtonFunction(){
    startTimeCountdown(5);
}

function stopButtonFunction() {
    stopTimeCountdown();
    resetTime("05:00");
}
