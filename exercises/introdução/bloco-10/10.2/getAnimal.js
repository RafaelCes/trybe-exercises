const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);
//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       };

//       return reject({ error: 'Não possui esse tipo de animal.' });
//     }, 100);
//   })
// );

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      };
      
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimalByName = (name) => {
  return findAnimalByName(name).then(animal => animal);
};

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject('Não possui animal com essa idade.' );
    }, 100);
  })
);

const getAnimalsByAge = (age) => {
  return findAnimalsByAge(age).then(list => list)
};


module.exports = {
  getAnimalByName,
  getAnimalsByAge,
}