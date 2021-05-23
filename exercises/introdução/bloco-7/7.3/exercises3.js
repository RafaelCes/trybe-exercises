// Reescrevendo funções utilizando TDD - Parte 3
// Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere-a para que passe nos testes. Use os casos de teste acima como inspiração, se tiver dúvidas!
// Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.
// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};


const greetPeopleFixed = (people) => {
  const greeting = [];
  
  for (const person in people) {
    greeting.push(`Hello ${people[person]}`)
  }
  return greeting;
};

const assert = require('assert');
assert.strictEqual(typeof greetPeopleFixed, 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const expected = greetPeopleFixed(parameter);
assert.deepStrictEqual(expected, result);


// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(characters[index]);
    } else {
      results.push('_');
    }
  }
  return results;
};

const removeVowelsFixed = (word) => {
  const characters = word.split('');
  const results = [];
  let counter = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      counter += 1;
      results.push(counter);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('')
};

const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');
assert.strictEqual(typeof removeVowelsFixed, 'function');
const expected = removeVowelsFixed(parameter);
assert.strictEqual(expected, result);

// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greaterThanTen = (array) => {
  let results = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results += array[index];
    }
  }
  return results;
};


const greaterThanTenFixed = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];


const assert = require('assert');
assert.strictEqual(typeof greaterThanTenFixed, 'function');
const expected = greaterThanTenFixed(parameter);
assert.deepStrictEqual(expected, result);

// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x + y;
  });
  results = [array[1], array[2]];
  return results;
};

function secondThirdSmallestFixed(array) {
  let results = []
  array.sort((x, y) => x - y);
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

const assert = require('assert');
assert.strictEqual(typeof secondThirdSmallestFixed, 'function');
const expected = secondThirdSmallestFixed(parameter);
assert.deepStrictEqual(expected, result);