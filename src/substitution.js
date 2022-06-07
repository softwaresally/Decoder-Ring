// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const lowerCase = input.toLowerCase();
    let message = [];
    let realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    if (encode === true) {
      for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === " ") {
          message.push(" ");
        }
        for (let j = 0; j < realAlphabet.length; j++) {
          if (lowerCase[i] === realAlphabet[j]) {
            message.push(alphabet[j]);
          }
        }
      }
    }
    if (encode === false) {
      for (let i = 0; i < lowerCase.length; i++) {
        if(lowerCase[i] === " ") {
          message.push(" ");
        }
        for (let j = 0; j < alphabet.length; j++) {
          if (lowerCase[i] === alphabet[j]) {
            message.push(realAlphabet[j]);
          }
        }
      }
    }
    return message.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
