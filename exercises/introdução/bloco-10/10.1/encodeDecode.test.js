const { encode, decode } = require('./encodeDecode');

describe('test function encode and decode', () => {
  test('test if encode and decode are functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('test if encode converts vogals to numbers', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });
  test('test if decode converts numbers to vogals', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });
  test('test if encode does`nt convert others leters', () => {
    expect(encode('bcdfghjklmnpqrstvxwyz')).toBe('bcdfghjklmnpqrstvxwyz');
  });
  test('test if decode does`nt convert others numbers', () => {
    expect(encode('6 7 8 9')).toBe('6 7 8 9');
  });
  test('test if input and output strings have the same lenght', () => {
    const string = 'tenho length = 17';
    expect(encode(string)).toHaveLength(17);
    expect(decode(string)).toHaveLength(17);
  })
});