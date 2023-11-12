//! Credit to https://www.youtube.com/watch?v=x4HUaiazDes

var generateBtn = document.querySelector("#generate");

//! Defining generate password.
function generatePassword(){
  





  return "Generated password wil go here."

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
