const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

// Write your tests here!

describe("encoding",() => {
    it("output should be a string", () => {
        const input = "a b c";
        const expected = "11 21 31";
        const actual = polybius(input);
        expect(actual).to.be.equal(expected);
    })
    it("spaces should be maintained throughout", () => {
        const input = "a   b";
        const expected = "11   21";
        const actual = polybius(input);
        expect(actual).to.be.equal(expected);
    })
    it("typical case", () => {
       const input = "Hello world";
       const expected = "3251131343 2543241341";
       const actual = polybius(input);
       expect(actual).to.be.equal(expected);  
    })
    it("i and j should be converted to 42", () => {
        const input = "ij";
        const expected = "4242";
        const actual = polybius(input);
        expect(actual).to.be.equal(expected);
    })
    it("general case with all constraints", () => {
        const input = "Ahmad Jaroudi";
        const expected = "1132231141 42112443544142";
        const actual = polybius(input);
        expect(actual).to.be.equal(expected); 
    })
    
})

describe("decoding", () => {
    it("the number of characters in the string excluding spaces should be even", () => {
        const input = "113 23";
        const actual = polybius(input, encode = false);
        expect(actual).to.be.false;
    })
    it("i/j should be shown", () => {
        const input = "42";
        const expected = "(i/j)";
        const actual = polybius(input, encode = false);
        expect(actual).to.be.equal(expected);
    })
    it("general case with all constraints", () =>{
        const input = "1132231141 42112443544142";
        const expected = "ahmad (i/j)aroud(i/j)";
        const actual = polybius(input, encode = false);
        expect(actual).to.be.equal(expected);
    })
})