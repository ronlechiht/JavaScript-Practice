/*Create an element with an optional CSS class*/
export function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  
  return element;
}

/*Retrieve an element from the DOM*/
export function getElement(selector) {
  const element = document.querySelector(selector);

  return element;
}

/*Display an element */
export function displayElement(className) {
  const element = document.querySelector(className);

  element.style.display = 'block';
}

/*Hide an element */
export function hideElement(className) {
  const element = document.querySelector(className);

  element.style.display = 'none';
}