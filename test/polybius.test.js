// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybiusModule", () => {
    it("should translate i and j to 42", () => {
        const input = "ij";
        const actual = polybius(input);
        expect(actual).to.eql("4242");
    });
    it("should translate 42 to i and j when decoding", () => {
        const input = "42";
        const actual = polybius(input, encode = false);
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });
    it("should ignore capital leters", () => {
        const input = "ThInKfUl";
        const actual = polybius(input);
        expect(actual).to.eql("4432423352125413");
    });
    it("should maintain spaces in the message, before and after encoding and decoding", () => {
        const input = "hello world";
        const actual = polybius(input);
        expect(actual).to.eql("3251131343 2543241341");
    })
})