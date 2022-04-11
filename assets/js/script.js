// Assignment Code
var generateBtn = document.querySelector("#generate");



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};



// //Generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]{}=<>,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //what will be the result once password is generated
  var result = "";

  //inputs required by user
  var passwordLength =0;
  var upperCase;
  var lowerCase;
  var numbers;
  var symbols;

  //initialize characters
  passwordLength = 0;
  randomFunc.length = 0;
  result = "";

  //prompt password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? Password must be between 8 and 128 characters");

    //if user selects cancel
    if (passwordLength === null) {
      return "Your Secure Password"
    } 
    else {
      //checking user enters an integer
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number!")
        return 'Your Secure Password'
      }
      else {
        //check password meets length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters!");
          return "Your Secure Password";
        }
        else {

          //call the internal function to show prompts for criteria

          showPrompts();

          //keep adding characters based on criteria until random.length = to the lenght to user set
          while (randomFunc.length < passwordLength) {
            if (lowerCase === false && upperCase === false && numbers === false && symbols === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              //if the user selected lowercase and there is still room to add characters then
              //randomly grab a lowercase letter from the array and add it to the end of result 
              //update randomFunc by 1
              if (lowerCase === true && randomFunc.length < passwordLength) {
                var lc = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                result = result + lc;
                randomFunc.length++;
              }
              
              //if the user selected symbols and there is still room to add characters then
              //randomly grab a symbols letter from the array and add it to the end of result 
              //update randomFunc by 1
              if (symbols === true && randomFunc.length < passwordLength) {
                var sc = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
                result = result + sc;
                randomFunc.length++;
              }

              //if the user selected Uppercase and there is still room to add characters then
              //randomly grab a Uppercase letter from the array and add it to the end of result 
              //update randomFunc by 1
              if (upperCase === true && randomFunc.length < passwordLength) {
                var uc = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
                result = result + uc;
                randomFunc.length++;
              }

              //if the user selected number and there is still room to add characters then
              //randomly grab a number letter from the array and add it to the end of result 
              //update randomFunc by 1
              if (numbers === true && randomFunc.length < passwordLength) {
                var num = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
                result = result + num;
                randomFunc.length++;
              }

            }
          }
        }
      }
    }

    //return the generated password back to the calling function
    return result;

    //internal function to prompt the user for criteria
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      symbols = confirm("Do you want to use any special characters?");

    }

  }


};