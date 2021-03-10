//Complete code for the following function
//Display text for 400 level courses (only...don't show html)
const displayText400 = () => {
  //Get 400 Level elements
  const lvl400Elements = document.getElementsByClassName("400level");

  // Output text to console
  Array.from(lvl400Elements).forEach(elem => console.log(elem.textContent));
}

displayText400();
