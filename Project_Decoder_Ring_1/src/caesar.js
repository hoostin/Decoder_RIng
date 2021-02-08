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
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift === Math.abs(shift) > 25) {
      return false;
    }
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      const originalChar = input.charCodeAt(i);
      if (originalChar < 123 && originalChar > 96) {
        // check what orignalChar + shift is if higher than 123 or lower than 96 means wrap
        // might use % to find remainder for wrapping
        // that value will be newChar
        // use newChar with
      }
    }
  }

  return {
    caesar,
  };
})();
caesarModule.caesar("test", 1);

module.exports = caesarModule.caesar;
