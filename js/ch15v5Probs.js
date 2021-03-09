/*
Information about an element
*/

const styleElement = getComputedStyle(document.getElementById("content"));
const listElement = document.createElement("ul");

// create and get the height info
const heightElement = document.createElement("li");
heightElement.textContent = `Height : ${styleElement.height}`;

// create and get the width info
const widthElement = document.createElement("li");
widthElement.textContent = `Width: ${styleElement.width}`;

// add width and height to the 'ul' tag
listElement.appendChild(heightElement);
listElement.appendChild(widthElement);

// show output on page
document
  .getElementById("infos")
  .appendChild(document.createTextNode("Information about the element"));
document.getElementById("infos").appendChild(listElement);