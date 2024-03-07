const inputCheck = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function emptyInput() {
  checkButton.addEventListener("click", () => {
    if (!inputCheck.value) {
      alert("Please input a value");
    }
  });
}


function cleanInput() {
  const regex = /[\W_]/g;
  const cleanString = inputCheck.value.replace(regex, "");
  return cleanString;
}

function lowercaseString(upperString) {
  const lowerString = upperString.toLowerCase();
  return lowerString;
}


function inverteInput() {
  checkButton.addEventListener("click", () => {
    const lowerInput = lowercaseString(cleanInput());
    let inputArray = lowerInput.slice("");
    const inputArrayReverso = [...inputArray].reverse().join("");
    
    inputArrayReverso === lowerInput ? result.innerHTML = `<strong style="color: #996dff">${inputCheck.value}</strong> is a palindrome`: result.innerHTML = `<strong>${inputCheck.value}</strong> is not a palindrome` ;
    
  });
}

emptyInput()
inverteInput()
