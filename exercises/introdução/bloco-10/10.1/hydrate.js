function hydrate(string) {
  let regex = /\d+/g;
  let stringDrinks = string.match(regex);
  let numbersDrinks = stringDrinks.map(Number);
  let water = numbersDrinks.reduce((acc, item) => acc += item);
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = hydrate;