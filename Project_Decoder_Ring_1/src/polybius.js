// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // letternum = (input.charCodeAt(i) -96)

  /*
    if letternum  > 10 
    {
      letternum -=1
    }
    if letternum% 5 !=0 
    row = (letternum / 5) +1
    
    else 
    row = letternum/5

    column = 5-(letternum %5)

    without accounting for array index being 0 and i/j stuff
    */
  /**
   * function takes in letter and returns two number string
   * @param {string} letter single letter
   */
  function getCode(letter) {
    let row = 0;
    let column = 0;
    letter = letter.toLowerCase();
    let letterNum = letter.charCodeAt(0) - 96;
    if (letterNum >= 10) {
      letterNum -= 1;
    }

    if (letterNum % 5 != 0) {
      row = Math.floor(letterNum / 5) + 1;
      column = letterNum % 5;
    } else {
      row = Math.floor(letterNum / 5);
      column = 5;
    }
    // 5 -
    return `${column}${row}`;
  }
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function polybius(input, encode = true) {
    // your solution code here

    // make 2-d array for grid
    const pSquare = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I/J", "K"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"],
    ];

    // letter value out of 25(26) fix i/j

    // use find to encode
    // use string splitter thing or indexes to get both array numbers to decode
    //
    return false;
  }

  return {
    polybius,
    isLetter,
    getCode,
  };
})();
const testString = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
for (let c of testString) {
  if (polybiusModule.isLetter(c)) {
    console.log(polybiusModule.getCode(c));
  }
}
module.exports = polybiusModule.polybius;
