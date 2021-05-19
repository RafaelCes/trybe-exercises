const getUserName = require('./getUsersName');

describe('test getUserName', () => {
  it('tests if the function return the name of an existing ID', () => {
    return getUserName(4).then((name) => {
      expect(name).toBe('Mark');
    });
  });
});