// Assignment Code
const charAmountRange = document.getElementById('charAmountRange');
const charAmountNumber = document.getElementById('charAmountNumber');
const form = document.getElementById('pwGenerateForm');
const includeUppercaseEL = document.getElementById('includeUpperCase');
const includeNumEL = document.getElementById('includeNum');
const includeSpecCharEL = document.getElementById('includeSpecChar');
const pwDisplay = document.getElementById('passwordDisplay')

// char variables
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122);
const NUM_CHAR_CODES = arrayFromLowtoHigh(48, 57);
const SPECIAL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
  arrayFromLowtoHigh(58, 64)
).concat(arrayFromLowtoHigh(91,96)
).concat(
  arrayFromLowtoHigh(123,126)
);


// Event Listeners
charAmountRange.addEventListener('input', syncCharacterAmount)
charAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault();
  const charAmount = charAmountNumber.value;
  const includeUppercase = includeUppercaseEL.checked;
  const includeNum = includeNumEL.checked;
  const includeSpecChar = includeSpecCharEL.checked;

  const password = generatePassword(charAmount, includeUppercase, includeNum, includeSpecChar)
  pwDisplay.innerText =password
})

function generatePassword(charAmount, includeUppercase, includeNum, includeSpecChar) {
  let charCodes = LOWERCASE_CHAR_CODES
  if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if(includeNum) charCodes = charCodes.concat(NUM_CHAR_CODES);
  if(includeSpecChar) charCodes = charCodes.concat(SPECIAL_CHAR_CODES);


  const pwChar = []

  for (let i = 0; i < charAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    pwChar.push(String.fromCharCode(characterCode))

  }
  return pwChar.join('');
}

function arrayFromLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount (e) {
  const value = e.target.value
  charAmountNumber.value = value;
  charAmountRange.value = value;
};