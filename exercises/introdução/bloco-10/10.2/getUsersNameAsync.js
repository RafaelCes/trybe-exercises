const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  async function findUserById(id) {
    if (users[id]) {
      return users[id];
      };
      throw new Error('User with ' + id + ' not found.');
  };
  
  async function getUserName(userID) {
   const user = await findUserById(userID);
   return user.name;
  };

  module.exports = getUserName;