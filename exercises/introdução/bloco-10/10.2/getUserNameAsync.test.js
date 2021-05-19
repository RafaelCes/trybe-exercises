const getUserName = require('./getUsersNameAsync');

describe('test getUserName async',() => {
  it('tests if the function return the name of an existing ID', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
  });
  it('tests if ID doesnt exist reutrn error', async() => {
    try{
      await getUserName(3);
    }catch(error) {
      expect(error).toEqual(new Error('User with 3 not found.'));
    }
  });
});