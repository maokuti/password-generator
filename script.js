// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  function getPasswordOptions() {
    // Prompt user for length of password
    let length = parseInt(prompt("Enter length of password (between 8 and 128 characters)"));
  
    // Validate length input
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid input. Please enter a number between 8 and 128.");
      return;
    }

    // Determining whether to include special, numeric, uppercase and/or lowercase characters in password

    let includeLowercase = confirm("Include lowercase characters?");
    let includeUppercase = confirm("Include uppercase characters?");
    let includeNumeric = confirm("Include numeric characters?");
    let includeSpecial = confirm("Include special characters?");
  
    // Validate character types input
    while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("You must select at least one character type.");
      includeLowercase = confirm("Include lowercase characters?");
      includeUppercase = confirm("Include uppercase characters?");
      includeNumeric = confirm("Include numeric characters?");
      includeSpecial = confirm("Include special characters?");
    }

      // Return password options object
  return {
    length,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial
  };
}

// Function for getting a random element from an array

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//Function to generate password with user input

function generatePassword() {

    var options = getPasswordOptions();

    // Define array of character types to include based on options
    let charTypesIncluded = [];
    if (options.includeLowercase) {
      charTypesIncluded.push(lowerCasedCharacters);
    }
    if (options.includeUppercase) {
      charTypesIncluded.push(upperCasedCharacters);
    }
    if (options.includeNumeric) {
      charTypesIncluded.push(numericCharacters);
    }
    if (options.includeSpecial) {
      charTypesIncluded.push(specialCharacters);
    }

    //

    let password = "";
    for (let i = 0; i < options.length; i++) {
      let charType = getRandom(charTypesIncluded);
      let char = getRandom(charType);
      password += char;
    }
    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
