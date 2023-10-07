// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true){
    const base = "abcdefghijklmnopqrstuvwxyz";
    //limit conditions//
    if (alphabet === undefined || alphabet.length != 26) return false;
    for(let i=0; i<alphabet.length -1; i++){
        if (alphabet.substring(i+1).includes(alphabet[i])) return false;
    }
    let answer =""
    //for incoding//
    
    if (encode){
        //loop over input//
    for(let i =0; i<input.length; i++){
        //in case the picked character is a letter//
        if (base.includes(input[i].toLowerCase())){
            //find the position of this letter in base, add the corresponding string of alphabet//
           answer += alphabet[base.indexOf(input[i].toLowerCase())];
        }else{
            answer += input[i];
        }
    }return answer;
    }
    
    //if decode//
    
    //loop over input//
    for(let i=0; i<input.length; i++){ 
        //in case the picked character is a letter or a special sign//
    if (input[i] != " "){
        //find the position of this letter in alphabet, add the corresponding letter of base//
        answer += base[alphabet.indexOf(input[i].toLowerCase())];
    }else{
        answer += input[i];
    }
    }return answer;
        
    }  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
