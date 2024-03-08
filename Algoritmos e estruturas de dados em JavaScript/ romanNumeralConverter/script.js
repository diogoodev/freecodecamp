const inputField = document.getElementById("number");
const converterBtn = document.getElementById("convert-btn");
const outputField = document.getElementById("output");

converterBtn.addEventListener("click", () => {
  console.log(inputField.value);
  if (!inputField.value) {
    outputField.textContent = "Please enter a valid number";
  }else if (Number(inputField.value) < 0) {
    outputField.textContent =
      "Please enter a number greater than or equal to 1";
  } else if(Number(inputField.value) >= 4000){
    outputField.textContent = "Please enter a number less than or equal to 3999";
  }
});