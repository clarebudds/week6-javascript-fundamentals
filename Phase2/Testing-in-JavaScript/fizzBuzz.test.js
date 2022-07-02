const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  it("if a number is divisible by 3 it returns Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("if a number is divisible by 5 it returns Buzz", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("if a number is divisible by 3 and 5 it returns FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("if a number is not divisible by 3 or 5 it returns a number", () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});
