// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
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
  /**
   * inverse of getCode where it takes two numbers and gets back the letter
   * @param {number} column between 1-5 used for column is grid for decode
   * @param {number} row between 1-5 used for row in grid for decode
   */
  function deCode(column, row) {
    if (column == 4 && row == 2) {
      return "I/J";
    }
    let total = (row - 1) * 5 + column;
    total += 96;
    console.log(total);
    return String.fromCharCode(total);
  }
  /**
   * will return true if string is 1 character and is a letter
   * @param {String} str single character string
   */
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function polybius(input, encode = true) {
    // your solution code here

    // make 2-d array for grid
    // const pSquare = [
    //   ["A", "B", "C", "D", "E"],
    //   ["F", "G", "H", "I/J", "K"],
    //   ["L", "M", "N", "O", "P"],
    //   ["Q", "R", "S", "T", "U"],
    //   ["V", "W", "X", "Y", "Z"],
    // ];

    let result = "";
    // encode
    if (encode) {
      for (let letter of input) {
        if (isLetter(letter)) {
          result += getCode(letter);
        } else {
          result += letter;
        }
      }
    }
    // decode
    else {
      // if (input.length % 2 != 0) { need to exclude spaces
      //   return false;
      // }
      for (let i = 0; i < input.length; i += 2) {
        if (Number.isNaN(input[i]) || Number.isNaN(input[i + 1])) {
          if (Number.isNaN(input[i]) && Number.isNaN(input[i + 1])) {
            result += input[i];
            result += input[i + 1];
          } else {
            if (Number.isNaN(input[i])) {
              result += input[i];
              i -= 1;
            } else {
              return false;
            }
          }
        } else {
          result += deCode(input[i] && input[i + 1]);
        }
      }
    }
    return result;
    // letter value out of 25(26) fix i/j

    // use find to encode
    // use string splitter thing or indexes to get both array numbers to decode
    //
    //return false;
  }

  return {
    polybius,
    isLetter,
    getCode,
  };
})();
polybiusModule.polybius("3251131343 2543241341", false);
// const testString = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
// for (let c of testString) {
//   if (polybiusModule.isLetter(c)) {
//     console.log(polybiusModule.getCode(c));
//   }
// }
module.exports = polybiusModule.polybius;
