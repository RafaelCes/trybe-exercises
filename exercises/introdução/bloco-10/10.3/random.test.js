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