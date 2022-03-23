
var numString = "1234567890";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var specString = "~`!@#$%^&*()_+-="

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};



// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {

  var usableChar = "";

// Ask user how long their password will be (between 8, and 128)
var passLength = window.prompt("How long do you want your password to be?  It must be at least 8 charcters long, and no more than 128 total.")
console.log (passLength)// Ask user if their password will include at least one number

// Ask user if their password will include at least one upper case letter
var passNumber = window.confirm("Would you like your password to include numeric characters?") 
if (passNumber) {
  usableChar = usableChar + numString;

}

// Ask user if their password will include at least one upper case letter
var passUpper = window.confirm("Would you like an upper case letter in your password?")
if (passUpper) {
  usableChar = usableChar + upperString;

}


// Ask user if their password will include at least one lower case letter
var passLower = window.confirm("Would you like a lower case letter in your password?")
if (passLower) {
  usableChar = usableChar + lowerString
}



// Ask user if their password will include at least one special characters
var passSpecial = window.confirm("Would you like your password to include a special character?")
if (passSpecial) {
  usableChar = usableChar + specString
}
console.log (usableChar)

var password = "";

var usableCharArray = usableChar.split("");

for (var i = 0;  i < passLength; i++){
  
  var randomCharIndex = Math.floor(Math.random() * usableCharArray.length);
  var randomChar = usableCharArray[randomCharIndex];
  password = password + randomChar;
}
return password;
}



// Answers to be validated and at least one character type should be selected
// Generates password with given criteria to either an alert, or written to the page
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

const usableCharArray = [""];
usableCharArray.push("");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

