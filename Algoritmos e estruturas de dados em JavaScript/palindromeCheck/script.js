// When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text Please input a value
const inputCheck = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const palindromeA = "A";

function emptyInput() {
  checkButton.addEventListener("click", () => {
    if (!inputCheck.value) {
      alert("Please input a value");
    }
  });
}

//emptyInput();

// fazer amanhã!
function cleanInput(){

}

// implementar um verificador simples de palindrome
function inverteInput() {
  checkButton.addEventListener("click", () => {
    let inputArray = [];
    for (let i = 0; i < inputCheck.value.length - 1; i++) {
      inputArray = inputCheck.value.slice("");
    }
    const inputArrayReverso = [...inputArray].reverse().join("");
    console.log(inputArrayReverso)
    console.log(inputCheck.value)
    if (inputArrayReverso == inputCheck.value) {
      result.textContent = `${inputCheck.value} is a palindrome`;
    }
    //return inputArrayReverso;
  });
}

inverteInput();

//function palindrome(){
// checkButton.addEventListener("click", () => {

//  });
//}

//palindrome()

//When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text A is a palindrome
console.log(inputCheck.value);
function checkLetterA() {
  checkButton.addEventListener("click", () => {
    if (inputCheck.value === palindromeA) {
      // depois utilizar regex para ser tanto A como a
      result.textContent = `${inputCheck.value} is a palindrome`;
      console.log(inputCheck.value);
    }
  });
}
//checkLetterA();

// When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text eye is a palindrome
