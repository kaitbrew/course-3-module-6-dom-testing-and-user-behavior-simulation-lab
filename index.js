const form = document.getElementById("user-form");
if (form) {
  form.addEventListener("submit", handleFormSubmit);
}

const simulateButton = document.getElementById("simulate-click");

if (simulateButton) {
  simulateButton.addEventListener("click", simulateClick);
}

function simulateClick() {
  const dynamicContent = document.getElementById("dynamic-content");
  const newElement = document.createElement("li");
  newElement.textContent = "Button Clicked!";
  dynamicContent.appendChild(newElement);
}

function handleFormSubmit(e) {
  const errorMessage = document.getElementById("error-message");
  const input = document.getElementById("user-input");
  const form = document.getElementById("user-form");
if (e&&e.preventDefault){
  e.preventDefault();}
  if (input.value !== "") {
    errorMessage.classList.add("hidden");
    addElementToDOM("dynamic-content",input.value);
    form.reset();
  } else {
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Input cannot be empty";
  }
}

function addElementToDOM(containerID,input) {
  const dynamicContent = document.getElementById(containerID);
  if (!dynamicContent) return;
  const newElement = document.createElement("li");
  newElement.textContent = input;
  dynamicContent.appendChild(newElement);
}

function removeElementFromDOM(elementId){
const element=document.getElementById(elementId);
if (element){element.remove()}
}

module.exports = {
  addElementToDOM,
  simulateClick,
  handleFormSubmit,
  removeElementFromDOM
};
