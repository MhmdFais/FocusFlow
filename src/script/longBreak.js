import {startTimeCountdown, resetTime, stopTimeCountdown} from '../components/timer'

const longBreakContainer = document.querySelector(".long-break-container");

export function createLongBreakCard(){
    createCard()
}

function createCard(){
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("sub-heading-container");
    const subHeading = createSubHeading();
    headerContainer.appendChild(subHeading);
    longBreakContainer.appendChild(headerContainer);

    const time = showTime("15:00", "long-break-time");
    longBreakContainer.appendChild(time);

    const buttons = createButtons();
    longBreakContainer.appendChild(buttons);
}

function createSubHeading() {
    const subHeading = document.createElement("p");
    subHeading.classList.add("sub-heading");
    subHeading.textContent = "Long Break";
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
    startTimeCountdown(15, "long-break-time");
}

function stopButtonFunction() {
    stopTimeCountdown("long-break-time");
    resetTime("15:00", "long-break-time");
}
