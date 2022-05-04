var optionsNumbers = "0123456789";
var optionsLowercase = "abcdefghijklmnopqrstuvwxyz";
var optionsUppercase = "ABCDEFGHIJKJLMNOPQRSTUVWXYZ";
var specialCharacter = "!@#$%^&*()?";
var characterMin = 8;
var characterMax = 128;
var finalPassword = "";


var generatePassword = function () {

  var userCharacter = window.prompt("How many characters do you want in your password? \nMin: " + characterMin + " Max: " + characterMax);
  if (userCharacter < characterMin || userCharacter > characterMax) {
    window.alert("Character Min: " + characterMin + " Character Max: " + characterMax)
    return;
  }

  console.log(userCharacter);
 
  var userUppChoice = window.confirm("Do you want your password to have UPPERCASE letters?");
  var userLowChoice = window.confirm("Do you want your password to have lowercase letters?");
  var userNumbers = window.confirm("Do you want your password to have numbers?");
  var userSpecialChar = window.confirm("Do you want your password to have special characters?");
  
  
  for (var i = 0; i < userCharacter; i++) {


    if (userUppChoice === true && finalPassword.length < userCharacter) {
      var indexUpp = Math.floor(Math.random() * optionsUppercase.length)
      finalPassword = finalPassword + optionsUppercase[indexUpp];
    }


    if (userLowChoice === true && finalPassword.length < userCharacter) {
      var indexLow = Math.floor(Math.random() * optionsLowercase.length)
      finalPassword = finalPassword + optionsLowercase[indexLow];
    }


    if (userNumbers === true && finalPassword.length < userCharacter) {
      var indexNumbers = Math.floor(Math.random() * optionsNumbers.length)
      finalPassword = finalPassword + optionsNumbers[indexNumbers];
    }


    if (userSpecialChar === true && finalPassword.length < userCharacter) {
      var indexSpecialChar = Math.floor(Math.random() * specialCharacter.length)
      finalPassword = finalPassword + specialCharacter[indexSpecialChar];
    }
  }
  return finalPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
