// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    if (encode === false && input.replace(" ", '').length % 2 !== 0) {
      return false;
    }
    const lowerCase = input.toLowerCase();
    const polybiusSquareCode = [
      {code: "11",
      letter: "a"},
      {code: "21",
      letter: "b"},
      {code: "31",
      letter: "c"},
      {code: "41",
      letter: "d"},
      {code: "51",
      letter: "e"},
      {code: "12",
      letter: "f"},
      {code: "22",
      letter: "g"},
      {code: "32",
      letter: "h"},
      {code: "42", 
      letter: "i"},
      {code: "42",
      letter: "j"},
      {code: "52",
      letter: "k"},
      {code: "13",
      letter: "l"},
      {code: "23",
      letter: "m"},
      {code: "33",
      letter: "n"},
      {code: "43",
      letter: "o"},
      {code: "53",
      letter: "p"},
      {code: "14",
      letter: "q"},
      {code: "24",
      letter: "r"},
      {code: "34",
      letter: "s"},
      {code: "44",
      letter: "t"},
      {code: "54",
      letter: "u"},
      {code: "15",
      letter: "v"},
      {code: "25",
      letter: "w"},
      {code: "35",
      letter: "x"},
      {code: "45",
      letter: "y"},
      {code: "55",
      letter: "z"},
      {code: " ",
      letter : " "}
    ];
    let message = [];
    if (encode === true) {
      for (let i = 0; i < lowerCase.length; i++) {
        for (let j = 0; j < polybiusSquareCode.length; j++) {
          if (lowerCase[i] === polybiusSquareCode[j].letter) {
          message.push(polybiusSquareCode[j].code)
          }
        }   
      }
    };
    if (encode === false) {
      for (let i = 0; i < lowerCase.length; i += 2) {
        for (let j = 0; j < polybiusSquareCode.length; j++) {
          if (lowerCase[i] === " ") {
            message.push(" ");
            i -= 1;
          }
          if (polybiusSquareCode[j].code === input[i] + input[i + 1] && input !== " ") {
            message.push(polybiusSquareCode[j].letter);
          }
        }
      } 
    }  
  return message.join('').toString();
} 

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
