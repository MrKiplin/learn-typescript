import {
  fizzBuzzSwitchStatement,
  fizzBuzzSwitchStatementLogger,
} from "./002-fizzbuzz-switch-statement";

describe("fizzBuzzSwitchStatement", () => {
  it.each([
    [fizzBuzzSwitchStatement(3), "Fizz"],
    [fizzBuzzSwitchStatement(5), "Buzz"],
    [fizzBuzzSwitchStatement(0), "FizzBuzz"],
    [fizzBuzzSwitchStatement(1), 1],
  ])("Should return %s", (result, expected) => {
    expect(result).toBe(expected);
  });
  it.each`
    result                              | expected
    ${fizzBuzzSwitchStatementLogger(6)} | ${"Fizz"}
    ${fizzBuzzSwitchStatementLogger(6)} | ${"Buzz"}
    ${fizzBuzzSwitchStatementLogger(6)} | ${"FizzBuzz"}
    ${fizzBuzzSwitchStatementLogger(6)} | ${1}
  `("Should return an array containing $expected", ({ result, expected }) => {
    expect(result).toContain(expected);
  });
});
