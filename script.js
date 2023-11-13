//! Credit to https://www.youtube.com/watch?v=x4HUaiazDes

var generateBtn = document.querySelector("#generate");

//! Defining generate password.

function generatePassword() {
  var numOfChars = prompt("How many characters would you like your password to be?", "");
  
  if (numOfChars > 128) {
    return "This is too many characters";
  } else if (numOfChars < 8) {
    return "This isn't enough characters";
  }
  //? The functions that return a random charactor are from https://webdesign.tutsplus.com/build-a-configurable-random-password-generator-with-javascript--cms-93262t
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function getSpecialChars() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 36) + 97);
  }
  var lower = window.confirm("Do you want lower case letters?");
  var upper = window.confirm("Do you want to use upper case letters?");
  var numbers = window.confirm("Do you want to use numbers?");
  var specialChars = window.confirm("Do you want to use special characters?");
  
  var password = "";
  //? This code is from https://webdesign.tutsplus.com/build-a-configurable-random-password-generator-with-javascript--cms-93262t
  for (let i = 0; i < numOfChars; i += 1) {
    if (lower) {
      password += getRandomLower();
    }
    if (upper) {
      password += getRandomUpper();
    }
    if (specialChars) {
      password += getSpecialChars();
    }
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
   //? 1.) generate password is being called
   //? 2.) value from generate password is being stored:
  var password = generatePassword();

  //?  3.) targeting the html where the password will go
  var passwordText = document.querySelector("#password");
  //?  4.) giving the location the password
  passwordText.value = password;

}

  //? Adding an event listening to the button to start the function.
generateBtn.addEventListener("click", writePassword);
