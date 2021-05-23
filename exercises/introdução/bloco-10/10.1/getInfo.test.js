const { profesionalBoard, searchEmployee } = require('./getInfo');

describe('tests for searchEmployee function', () => {
  test('test if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('test if the id is not found the error "ID não identificada" is thrown', () => {
    expect(() => searchEmployee('')).toThrow(new Error('ID não identificada'));
    expect(() => searchEmployee('468')).toThrow(new Error('ID não identificada'));
  });
  test('test if the id is not found the error "Informação indisponível" is thrown', () => {
    expect(() => searchEmployee('9852-2-2','')).toThrow(new Error('Informação indisponível'));
    expect(() => searchEmployee('9852-2-2','age')).toThrow(new Error('Informação indisponível'));
  });
  test('test if searchEmplyee(id, "firstName") return the employee firstname', () => {
    expect(searchEmployee('9852-2-2','firstName')).toBe('Jeff');
  });
  test('test if searchEmplyee(id, "lastName") return the employee lastname', () => {
    expect(searchEmployee('9852-2-2','lastName')).toBe('Cook');
  });
  test('test if searchEmplyee(id, "specialities") return an array with the employee specialities', () => {
    expect(searchEmployee('9852-2-2','specialities')).toEqual(['Ruby', 'SQL']);
  });
});