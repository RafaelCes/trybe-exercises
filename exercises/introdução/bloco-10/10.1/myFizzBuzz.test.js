const myFizzBuzz = require('./myFizzBuzz');

describe('test myFizzBuzz', () => {
  it('test if myFizzBuzz with parameter 15 returns "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('test if myFizzBuzz with parameter 12 returns "fizz"', () => {
    expect(myFizzBuzz(12)).toBe('fizz');
  });
  it('test if myFizzBuzz with parameter 10 returns "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('test if myFizzBuzz with parameter 13 returns 13', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  it('test if myFizzBuzz with parameter that is not a number return false', () => {
    expect(myFizzBuzz('')).toBeFalsy();
  });
});