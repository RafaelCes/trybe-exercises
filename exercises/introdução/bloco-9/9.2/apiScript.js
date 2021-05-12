// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const promise = new Promise((resolve, reject) => {
  const random = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
  const check = random.reduce((acc, item) => {
    item = Math.random() * item;
    item = item * item;
    return acc + item;
  });
  if(check < 8000) {
    const result = [check / 2, check / 3, check / 5, check / 10]
    resolve(result);
  }
  reject()
})
  .then((result) => console.log(result))
  .catch(() => console.log('promise rejeitada'));

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data =>document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();