// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesarModule", () => {
    it("should return false if the shift amount is 0", () => {
        const input = "thinkful";
        const shift = 0;
        const actual = caesar(input, shift);
        expect(actual).to.eql(false);
    });
    it("should return false if the shift amount is less than negative 25", () =>{
        const input = "thinkful";
        const shift = -26;
        const actual = caesar(input, shift);
        expect(actual).to.eql(false);
    });
    it("should return false if the shift amount is more than 25", () => {
        const input = "thinkful";
        const shift = 26;
        const actual = caesar(input, shift);
        expect(actual).to.eql(false);
    });
    it("should return the encoded input by the letters shifted", () => {
        const input = "thinkful";
        const shift = 4;
        const actual = caesar(input, shift);
        expect(actual).to.eql("xlmrojyp");
    });
    it("should ignore capital letters", () => {
        const input = "Thinkful";
        const shift = 4;
        const actual = caesar(input, shift);
        const expected = "xlmrojyp"
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces and other nonalphabetic symbols before and after encoding or decoding", () => {
        const input = "Sally$ Thinkful";
        const shift = 4;
        const actual = caesar(input, shift);
        const expected = "weppc$ xlmrojyp";
        expect(actual).to.eql(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
        const input = "abc";
        const shift = -5;
        const actual = caesar(input, shift);
        expect(actual).to.eql("vwx");
    });
})