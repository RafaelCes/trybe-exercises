function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  return tech.map((item) => ({ tech: item, name }));
  // let objectList = [];
  // for (let index = 0; index < tech.length; index += 1) {
  //   objectList.push({ tech: tech[index], name });
  // }
  // return objectList;
}

module.exports = techList;