// Need to create a table with 12 rows

// Create table
const tblElement = document.createElement("table");

// Loop to create rows and cells
for (let i = 1; i <= 12; i++) {
  // Create tr and td, assign i to td value
  const trElement = document.createElement("tr");
  const tdElement = document.createElement("td");
  tdElement.innerText = i;

  // Highlight every 4th number in the table
  if (i % 4 === 0) {
    tdElement.style.backgroundColor = "chartreuse"
  }

  // Add td to tr
  trElement.appendChild(tdElement);

  // Add tr to table
  tblElement.appendChild(trElement);
};

// Add table to div tag
// Get div tag and add tblElement to it
const divElement = document.getElementById("output");
divElement.appendChild(tblElement);