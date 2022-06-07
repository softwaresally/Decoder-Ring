// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    //returning false if the shift parameters go against the constraints
    const letters = "abcdefghijklmnopqrstuvwxyz";
    //a string containing all of the letters of the alphabet for comparison to the input
    const lowerCase = input.toLowerCase();
    //changes the input characters to all be lowercase
    if (encode === false) {
      shift = -shift
    } 
    //if we're decoding a message, we should shift the letters in the opposite direction
    let message = [];
    for (let i = 0; i < lowerCase.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (lowerCase[i] === letters[j]) {
          message.push(letters[j + shift])
          //looping through the input and the letters string to find matching characters, then shifting the letters to encode a message
          if (j + shift > 25) {
            message.push(letters[j + shift - 26])
          }
          if (j + shift < 0) {
            message.push(letters[j + shift + 26])
          }
          //allows the code to access the appropriate letter, even if the shift goes beyond the ends of the alphabet
        }
      }
      if (!letters.includes(lowerCase[i])) {
        message.push(lowerCase[i])
      } 
    }
    return message.join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
