/* NAME:
 * FizzBuzz - Chain Responsibility
 *
 * DESCRIPTION:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5, 6 and 9.
 *
 * TASK:
 * Using the chain responsibility pattern, find all multiples of 3 & 5 within a range of 1000. Return multiples of 3 as "Fizz", multiples of 5 as "Buzz" and multiples of both as "FizzBuzz".
 */

export enum FizzBuzz {
  Fizz = "Fizz",
  Buzz = "Buzz",
  FizzBuzz = "FizzBuzz",
}
