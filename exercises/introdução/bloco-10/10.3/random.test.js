let random = require('./random');


describe('test random with default value', () => {
  it('test if the function have been called and the result', () => {
    random = jest.fn().mockReturnValue(10);
    const result = random();
    expect(random).toHaveBeenCalled();
    expect(result).toBe(10);
  });
});
describe('test random with a new implementation once', () => {
  it('create a new implementation', () => {
    random = jest.fn().mockImplementationOnce((a, b) => a / b);
    const result = random(10, 5);
    expect(result).toBe(2);
    expect(random).toHaveBeenCalledTimes(1);
  });
});

describe('test random with two new implementations', () => {
  it('random multply 3 parameters then random doubles value', () => {
    random = jest.fn().mockImplementation((a, b, c) => a * b * c);
    let result = random(2, 4, 6);
    expect(random).toHaveBeenCalledTimes(1);
    expect(result).toBe(48);
    result = random (1, 5, 10);
    expect(random).toHaveBeenCalledTimes(2);
    expect(result).toBe(50);
    random.mockRestore();
    random = jest.fn().mockImplementation((a) => a * 2);
    result = random(5);
    expect(random).toHaveBeenCalledTimes(1);
    expect(result).toBe(10);
  });
});