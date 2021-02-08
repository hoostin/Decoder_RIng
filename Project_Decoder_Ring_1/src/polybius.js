// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

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
    // letter =

    /*
    if letternum% 5 !=0 
    row = (letternum / 5) +1
    
    else 
    row = letternum/5

    column = 5-(letternum %5)

    without accounting for array index being 0 and i/j stuff
    */
    // use find to encode
    // use string splitter thing or indexes to get both array numbers to decode
    //
    return false;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
