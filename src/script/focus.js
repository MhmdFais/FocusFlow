import {showTime} from '../components/timer'

const focusContainer = document.querySelector(".focus-container");

export function createFocus() {
    createFunctionHeader();
}

function createFunctionHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("sub-headeing-container");
    const subHeading = createSubHeading()
    headerContainer.appendChild(subHeading);
    const time = showTime("25:00");
    headerContainer.appendChild(time);
}

function createSubHeading() {
    const subHeading = document.createElement("p");
    subHeading.classList.add("sub-heading");
    subHeading.textContent = "Focus";
    return subHeading;
}