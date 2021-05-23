const getUserName = require('./getUsersNameAsync');

describe('test getUserName async',() => {
  it('tests if the function return the name of an existing ID', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
  });
  it('tests if the function return the name of an existing ID 2', async () => {
    await expect(getUserName(4)).resolves.toBe('Mark');
  });
  it('tests if ID doesnt exist reutrn error', async() => {
    try{
      await getUserName(3);
    }catch(error) {
      expect(error).toEqual(new Error('User with 3 not found.'));
    }
  });
  it('tests if ID doesnt exist reutrn error 2', async() => {
    await expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'));
  });
});