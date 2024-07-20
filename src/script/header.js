const headerContainer = document.querySelectorAll(".header-contanier");

export function createHeader() {
  const headerPElement = createHeaderPElement();
  headerPElement.classList.add("header-text");
  headerPElement.textContent = "FocusFlow";
  headerContainer.appendChild(headerPElement);
}

function createHeaderPElement() {
  const headerPElement = document.createElement("p");
  return headerPElement;
}
