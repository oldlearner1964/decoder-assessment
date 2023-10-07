const expect = require("chai").expect;
const { substitution } = require("../src/substitution");
// Write your tests here!
//substitution encode tests//
describe("substitution tests", () => {
    it("spaces should be maintained althrough", () => {
        const input = "a  b   c";
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const expected = "a  b   c";
        const actual = substitution(input,alphabet);
        expect(actual).to.be.equal(expected);
    })
    it("capital letters can be ignored encode", () => {
        const input = "THinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.equal(expected);
    })
    it("the alphabet must be exactly 26 characters including special characters", () => {
        const input = "thinkful";
        const alphabet = "short";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    })
    it("all the character of the alphabet must be unique,otherwise it should return false", () => {
        const input = "superman";
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    })
    it("typical encode", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne"
        const actual = substitution(input, alphabet);
        expect(actual).to.be.equal(expected);
    })
    it("typical decode", () => {
        const input = "y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected = "message";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.be.equal(expected);
    })
})