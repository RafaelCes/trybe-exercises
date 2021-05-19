const getUserName = require('./getUsersName');

describe('test getUserName', () => {
  it('tests if the function return the name of an existing ID', () => {
    expect.assertions(1);
    return getUserName(4).then((name) => {
      expect(name).toBe('Mark');
    });
  });
  it('tests if ID doesnt exist reutrn error', () => {
     expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error).toEqual({ 'error': 'User with 3 not found.' });
    });
  });
});