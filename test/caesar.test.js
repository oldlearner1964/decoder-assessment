const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

//tests for encoding positive shifts

describe("positive shift", () => {
    it("encrypt correctly one word", () => {
        const input = "thinkful";
        const shift = 3;
        const expected = "wklqnixo";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
    })
    it("encrypt correctly one sentence with more then two words", () => {
        const input = "i am here forever";
        const shift = 5;
        const expected = "n fr mjwj ktwjajw";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
    })
    it("encrypt correctly with more than one word with capital letters and characters", () => {
        const input = "I have a Name : Ahmad Jaroudi";
        const shift = 4;
        const expected = "m lezi e reqi : elqeh nevsyhm";
        const actual = caesar(input, 4);
        expect(actual).to.be.equal(expected);
    })
    it("encrypt correctly when shift requires wraping around the alphabet", () => {
        const input = "My name is Ahmad Jaroudi";
        const shift = 20;
        const expected = "gs hugy cm ubgux dulioxc";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
    })
})
//test for encoding negative shift
describe("negative Shift", () => {
    it("encrypt correctly when there is more than one word, wraps arround the alphabet, wiuth capital lettrs and characters", () => {
        const input = "My name : Ahmad Jaroudi, and I am currently studying since 8:00 am";
        const shift = -18;
        const expected = "ug vium : ipuil rizwclq, ivl q iu kczzmvbtg abclgqvo aqvkm 8:00 iu";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
    })
})
//test for decoding positive/negative shift
describe("decoding positive shift", () => {
    it("decode correctly a string containing characters", () => {
        const input = "m lezi e reqi : elqeh nevsyhm";
        const expected = "i have a name : ahmad jaroudi";
        const shift = 4;
        const actual = caesar(input, shift, encode = false);
        expect(actual).to.be.equal(expected);
    })
    
})
describe("decoding negative shifts", () => {
    it("decodes correctly a string ", () => {
        const input = "ug vium : ipuil rizwclq, ivl q iu kczzmvbtg abclgqvo aqvkm 8:00 iu";
        const shift = -18;
        const expected = "my name : ahmad jaroudi, and i am currently studying since 8:00 am";
        const actual = caesar(input, shift, encode = false);
        expect(actual).to.be.equal(expected);
    }) 
})
//False return on invalid input
describe("Invalid Shift Errors", () => {
 it("should return false when shift is 0", () => {
   const input = "I don't want this message";
   const shift = 0;
   const actual = caesar(input, shift);
   expect(actual).to.be.false;
 });

 it("should return false when shift is less than -25", () => {
   const input = "I Love coding";
   const shift = -50;
   const actual = caesar(input, shift);
   expect(actual).to.be.false;
 });

 it("should return false when shift is greater than 25", () => {
   const input = "xyz34@?_";
   const shift = 102;
   const actual = caesar(input, shift);
   expect(actual).to.be.false;
 });
});
