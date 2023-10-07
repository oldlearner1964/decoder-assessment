// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //define a string where we can detect the letter by its index//
    const baseKey = 'abcdefgh klmnopqrstuvwxyz';
    //In case of encoding//
    if(encode){
    let answerString = "";
      let xAxisCoordinate;
      let yAxisCoordinate;
      let letterKeyNumber;
    //loop over input//  
    for(let i=0; i<input.length; i++){
      //in case of space in the input , the return will also be a space//
        if (input[i] === " "){            
            answerString += " ";
        }
        //transform to lower case//
        var letterInLowerCase = input[i].toLowerCase();
        //in the case of input containing i or j the return will be 42//
        if(letterInLowerCase === "i" || letterInLowerCase === "j"){
        answerString += 42;
        }
        //The general case//
        if(baseKey.includes(letterInLowerCase) & input[i] != " "){
        letterKeyNumber = baseKey.indexOf(letterInLowerCase);
        //Math to translate the position of the input letter into the column position(xCoordinatesAxis) and the row position (yCoordinatesAxis)//        
        xAxisCoordinate = (letterKeyNumber%5) + 1;
        yAxisCoordinate = Math.trunc(letterKeyNumber / 5) + 1;
        //attach results strings together//
        answerString += xAxisCoordinate;
        answerString += yAxisCoordinate;
        }
        
      }return answerString;
      
    }
    
//in case of decoding, see if the input has a even numbers of letters//
let inputWithSpace = "";
for(let i=0; i<input.length; i++){
    if(input[i] === " "){
        inputWithSpace += " " + " " ;
    }else{
    inputWithSpace += input[i];
}

}
    if(inputWithSpace.length % 2 != 0) return false;
    
    let indexOfLetter = 0;
    let decodeAnswer = "";
    for(let i=0; i<inputWithSpace.length; i+=2){
      if(inputWithSpace[i] === " "){
        decodeAnswer += inputWithSpace[i];
      }else{
      if(inputWithSpace[i] === "4" & inputWithSpace[i+1] === "2"){
        decodeAnswer += "(i/j)";
      }else{        
        indexOfLetter = (Number(inputWithSpace[i+1]) - 1) * 5 + (Number(inputWithSpace[i]) - 1);
        decodeAnswer += baseKey[indexOfLetter];
    }
  }
  }return decodeAnswer;
}  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
