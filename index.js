// The start array with all characters
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// Creating a new array without numbers
const withoutNumbers = [...characters.slice(0, 52), ...characters.slice(62)];

// Creating a new array without symbols
const withoutSymbols = [...characters.slice(0, 62)];

// Creating a new array without numbers AND symbols
const withoutNumbersAndSymbols = [...withoutNumbers.slice(0, 52)];

let generatedPasswordOneEl = document.getElementById("generatedPasswordOne");
let generatedPasswordTwoEl = document.getElementById("generatedPasswordTwo");
let passwordLengthEl = document.getElementById("passwordLength");
let slider = document.getElementById("myRange");
let checkboxNumbers = document.getElementById("numberCheckbox");
let checkboxSymbols = document.getElementById("symbolCheckbox");

let passwordLength = 15;
let toggleNumbers = true;
let toggleSymbols = true;

slider.oninput = () => {
  passwordLengthEl.innerText = slider.value;
  passwordLength = slider.value;
}

// Make font size of the generated password smaller depending on the characters count
function makeFontSizeSmaller() {
  if (passwordLength > 35) {
    generatedPasswordOneEl.style.fontSize = "0.8rem";
    generatedPasswordTwoEl.style.fontSize = "0.8rem";
  }
  else {
    generatedPasswordOneEl.style.fontSize = "1rem";
    generatedPasswordTwoEl.style.fontSize = "1rem";
  }
}

function generatePasswords() {
  makeFontSizeSmaller();
  let passwordOne = [];
  let passwordTwo = [];
  let passArr = [];

  if (!toggleNumbers && toggleSymbols) {
    passArr = withoutNumbers;
  }
  else if (!toggleSymbols && toggleNumbers) {
    passArr = withoutSymbols;
  }
  else if (!toggleSymbols && !toggleNumbers) {
    passArr = withoutNumbersAndSymbols;
  }
  else {
    passArr = characters;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomCoeficientOne = Math.floor(Math.random() * passArr.length);
    const randomCoeficientTwo = Math.floor(Math.random() * passArr.length);

    passwordOne += passArr[randomCoeficientOne];
    passwordTwo += passArr[randomCoeficientTwo];
  }

  generatedPasswordOneEl.textContent = passwordOne;
  generatedPasswordTwoEl.textContent = passwordTwo;
}


function clickToCopyPasswordOne() {
  let text = generatedPasswordOneEl.textContent;
  navigator.clipboard.writeText(`${text}`);
  alert(`Password 1 copied to clipboard!`);
}

function clickToCopyPasswordTwo() {
  let text = generatedPasswordTwoEl.textContent;
  navigator.clipboard.writeText(`${text}`);
  alert(`Password 2 copied to clipboard!`);
}

// Change checked variables to true or to false depending on the state of checkbox
function onClickCheckbox(checkbox) {
  if (checkbox.checked === true) {
    if (checkbox.id === "numberCheckbox") {
      toggleNumbers = true;
    }
    else {
      toggleSymbols = true;
    }
  }
  else {
    if (checkbox.id === "numberCheckbox") {
      toggleNumbers = false;
    }
    else {
      toggleSymbols = false;
    }
  }
}