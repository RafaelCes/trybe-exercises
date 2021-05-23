const myFizzBuzz = require('./myFizzBuzz');

describe('test myFizzBuzz', () => {
  test('test if myFizzBuzz with parameter 15 returns "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('test if myFizzBuzz with parameter 12 returns "fizz"', () => {
    expect(myFizzBuzz(12)).toBe('fizz');
  });
  test('test if myFizzBuzz with parameter 10 returns "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('test if myFizzBuzz with parameter 13 returns 13', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  test('test if myFizzBuzz with parameter that is not a number return false', () => {
    expect(myFizzBuzz('')).toBeFalsy();
  });
});