let { random, upperCase, firstLetter, join } = require('./random');
jest.mock('./random');

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

describe('test uperCase, firstLetter e join', () => {
  test('change uperCase to lower case', () => {
    upperCase.mockImplementation((string) => string.toLowerCase());

    expect(upperCase('ABCDE')).toBe('abcde');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith('ABCDE');
  });

  test('change firstLetter to lastLetter', () => {
    firstLetter.mockImplementation(a => a.charAt(a.length - 1));

    expect(firstLetter('abcde')).toBe('e');
    expect(firstLetter).toHaveBeenCalled();
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(firstLetter).toHaveBeenCalledWith('abcde');
  });

  test('change join to acept 3 parameters', () => {
    join.mockImplementation((a, b, c) => `${a}${b}${c}`);

    expect(join('ab', 'cd', 'e')).toBe('abcde');
    expect(join).toHaveBeenCalled();
    expect(join).toHaveBeenCalledTimes(1);
    expect(join).toHaveBeenCalledWith('ab', 'cd', 'e');
  });
});