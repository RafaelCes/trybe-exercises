
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((result, current) => {
    return result + current.split('').filter((item) => {
      return (item === 'a' || item === 'A');
    }).length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);