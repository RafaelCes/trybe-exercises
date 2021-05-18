const myRemove = require('./myRemove');

describe('test myRemove', () => {
  it('test myRemove with parameters [1, 2, 3, 4] and 3 returns [1, 2, 3]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('test myRemove with parameters [1, 2, 3, 4] and 3 does not returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('test if the parameter array doesn`t suffer modifications', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });
  it('test myRemove with parameters [1, 2, 3, 4] and 5 returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});