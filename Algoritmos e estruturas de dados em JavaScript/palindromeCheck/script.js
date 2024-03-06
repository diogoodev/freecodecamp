// When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text Please input a value
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



// OK
function cleanInput() {
  const regex = /[\W_]/g;
  const cleanString = inputCheck.value.replace(regex, "");
  return cleanString;
}
// OK
function lowercaseString(upperString) {
  const lowerString = upperString.toLowerCase();
  return lowerString;
}

// OK!
function inverteInput() {
  checkButton.addEventListener("click", () => {
    //* Limpa os caracteres indesejados da string e coloca em minusculo logo depois salva na variavel
    const lowerInput = lowercaseString(cleanInput());
    //* transformamos a string em um array de caracteres
    let inputArray = lowerInput.slice("");
    //* invertemos o array
    const inputArrayReverso = [...inputArray].reverse().join("");
       
    inputArrayReverso === lowerInput ? result.textContent = `${inputCheck.value} is a palindrome`: result.textContent = `${inputCheck.value} is NOT a palindrome` ;
    
  });
}

emptyInput()
inverteInput()
