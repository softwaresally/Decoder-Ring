// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitutionModule", () => {
    it("should return false if the given alphabet isn't 26 characters long", () => {
        const alphabet = "abc";
        const actual = substitution(alphabet)
        expect(actual).to.eql(false);
    });
    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(alphabet);
        expect(actual).to.eql(false);
    });
    it("should correctly translate given phrase, based on the alphabet given to the function", () => {
        const alphabet = "abc!efg@ijk#mno$qrs%uvw^yz";
        const input = "thinkful";
        const actual = substitution(input, alphabet);
        expect(actual).to.eql("%@inkfu#");
    });
    it("should maintain spaces in the message before and after encoding or decoding", () => {
        const alphabet = "abc!efg@ijk#mno$qrs%uvw^yz";
        const input = "sally thinkful";
        const actual = substitution(input, alphabet);
        expect(actual).to.eql("sa##y %@inkfu#");
    });
    it("should ignore capital letters", () => {
        const alphabet = "abc!efg@ijk#mno$qrs%uvw^yz";
        const input = "SaLlY tHiNkFuL";
        const actual = substitution(input, alphabet);
        expect(actual).to.eql("sa##y %@inkfu#");
    });
})
