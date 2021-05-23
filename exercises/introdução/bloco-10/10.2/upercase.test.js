const uppercase = require('./upercase');

describe('test upercase', () => {
  it(`uppercase 'test' to equal 'TEST'`, (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    });
  });
});