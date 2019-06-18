import { fizzBuzz, fizzBuzzLogger } from "./task-001-fizzbuzz";

describe("fizzBuzz", () => {
  it("Should return FizzBuzz if value is multiple of 3 & 5", () => {
    const result = fizzBuzz(0);
    expect(result).toMatch("FizzBuzz");
  });
  it("Should return Fizz if value is multiple of 3", () => {
    const result = fizzBuzz(3);
    expect(result).toMatch("Fizz");
  });
  it("Should return Buzz if value is multiple of 5", () => {
    const result = fizzBuzz(5);
    expect(result).toMatch("Buzz");
  });
  it("Should return value if value is not a multiple of 3 or 5", () => {
    const result = fizzBuzz(1);
    expect(result).toEqual(1);
  });
  it("Should return an array containing FizzBuzz, Fizz, Buzz & values", () => {
    const result = fizzBuzzLogger(5);
    expect(result).toContain("FizzBuzz");
    expect(result).toContain("Fizz");
    expect(result).toContain("Buzz");
    expect(result).toContain(1);
  });
});
