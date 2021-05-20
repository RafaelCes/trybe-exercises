const random = () => Math.floor(Math.random() * 101);
const upperCase = (string) => string.toUpperCase();
const firstLetter = (string) => string.charAt(0);
const join = (stringA, stringB) => `${stringA}${stringB}`;

module.exports = {
  random,
  upperCase,
  firstLetter,
  join,
}