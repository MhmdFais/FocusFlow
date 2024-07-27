const footerElement = document.querySelector("footer")

export function createFooter(){
    footer()
}

function footer(){
    const left = leftSide()
    const right = rightSide()
    footerElement.appendChild(left)
    footerElement.appendChild(right)
}

function leftSide(){
    const leftDiv = document.createElement("div")
    leftDiv.classList.add("left-footer")

    const leftText = document.createElement("p")
    leftText.classList.add("left-text")
    leftText.textContent = "2024 - All Rights Reserved"

    leftDiv.appendChild(leftText)

    return leftDiv
}

function rightSide(){
    const rightDiv = document.createElement("div")
    rightDiv.classList.add("right-footer")

    const rightText = document.createElement("p")
    rightText.classList.add("right-text")
    rightText.textContent = "Created by: <a href='https://github.com/MhmdFais' target='_blank'>Muhammed</a>"
    rightText.innerHTML = rightText.textContent

    rightDiv.appendChild(rightText)

    return rightDiv
}