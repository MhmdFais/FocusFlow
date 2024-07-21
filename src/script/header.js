const headerContainer = document.querySelectorAll(".header-contanier");

export function createHeader() {
  const headerPElement = createHeaderPElement();
  headerPElement.classList.add("header-text");
  headerPElement.textContent = "FocusFlow";
  createHeaderContainer(headerPElement);
}

function createHeaderPElement() {
  const headerPElement = document.createElement("p");
  return headerPElement;
}

function createHeaderContainer(headerPElement) {
  headerContainer[0].appendChild(headerPElement);
}
