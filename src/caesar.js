// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // return false for these cases
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    const key = "abcdefghijklmnopqrstuvwxyz"; // construct a key for the alphabet
    let answerString = "";
    let position;
    let newPosition;
    shift *= encode ? 1 : -1; // the value of the shift will be negative if we are decoding and positive for encoding

    for (i = 0; i < input.length; i++) {
      if (key.includes(input[i].toLowerCase())) {
        // if the character  is a letter apply the conditional;
        var letterInInput = input[i].toLowerCase();
        position = key.indexOf(letterInInput);
        newPosition = (((position + shift) % 26) + 26) % 26; // the math expresion to return the new position with the shift
        answerString = answerString + key[newPosition];
      } else {
        answerString = answerString + input[i];
      }
    }
    return answerString;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
