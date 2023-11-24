
//Declaring variables
let heightInput = document.getElementById('heightInput');
let widthInput = document.getElementById('widthInput');
let areaOutput = document.getElementById('areaOutput');
let calButton = document.getElementById('calButton');

//Adding event listener
calButton.addEventListener('click', 

//Adding function
function areaoftri() {
  let height = parseFloat(heightInput.value);
  let width = parseFloat(widthInput.value);

  //Adding validation, checking if a number is entered and if it is greater than 0
  if (!isNaN(height) && !isNaN(width) && height > 0 && width > 0) {
    let area = 0.5 * height * width;
    areaOutput.value = area;
  } else {
    alert('Please enter valid number');
  }
});

