import {
  FizzBuzz,
  fizzBuzz,
  fizzBuzzLogger,
} from "./003-fizzbuzz-chain-responsibility";

describe("fizzBuzzChainResponsibility", () => {
  it("Totally legit test", () => {
    expect(true).toEqual(true);
  });
});

// Option 2.....
describe("fizzBuzzChainResponsibility", () => {
  it("Should return FizzBuzz if value is multiple of 3 & 5", () => {});

  it("Should return Fizz if value is multiple of 3", () => {});

  it("Should return Buzz if value is multiple of 5", () => {});

  it("Should return value if value is not a multiple of 3 or 5", () => {});

  it.each`
    result | expected
    ${""}  | ${""}
  `("Should return an array containing $expected", ({ result, expected }) => {
    expect(result).toContain(expected);
  });
});
