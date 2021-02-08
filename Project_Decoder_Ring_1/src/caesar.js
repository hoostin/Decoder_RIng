// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  /**
   *
   * @param {string} input string message to encrypt or decrypt
   * @param {number} shift refers to how much each letter is "shifted" by.
   * A positive number means shifting to the right (i.e. "A" becomes "D")
   * whereas a negative number means shifting to the left (i.e. "M" becomes "K").
   * @param {boolean} encode encode or decode message true =encode false = decode
   */
  // 97 -122 unicode letters lowercase
  function caesar(input, shift = 0, encode = true) {
    // your solution code here
    let result = "";
    if (!encode) {
      shift *= -1;
    }
    if (shift === 0 || Math.abs(shift) > 25) {
      return false;
    }
    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
      const originalChar = input.charCodeAt(i);
      if (originalChar < 123 && originalChar > 96) {
        // check if newchar needs to be multuiplied by -1 with encode

        let newChar = originalChar + shift;
        // check what orignalChar + shift is if higher than 123 or lower than 96 means wrap
        if (newChar < 97) {
          newChar = 123 + (newChar - 97);
        } else if (newChar > 122) {
          newChar = (newChar % 122) + 96;
        }
        result += String.fromCharCode(newChar);
      } else {
        result += input[i];
      }
    }
    return result;
    // return new string
  }

  return {
    caesar,
  };
})();

/*
 const testValue1 = caesarModule.caesar(
        "a b c d e f g h i j k l m n o p q r s t u v w x y z",
        2
      );
  const testValue2 = caesarModule.caesar(
        "c d e f g h i j k l m n o p q r s t u v w x y z a b",
        2,
        false
      );
console.log(testValue1);
console.log(testValue2);
*/
module.exports = caesarModule.caesar;
