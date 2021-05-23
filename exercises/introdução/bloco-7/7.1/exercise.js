



// Agora você vai fazer alguns exercícios de fixação.
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.
// Copiar
//       function testingScope(escopo) {
//         if (escopo === true) {
//           var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//           ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//           console.log(ifScope);
//         } else {
//           var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//           console.log(elseScope);
//         }
//         console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//       }

//       testingScope(true);

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  
}
testingScope(true);


// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.
// Copiar
//       const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//       // Seu código aqui.

//       console.log(oddsAndEvens);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const order = array => array.sort((num1, num2) => num1 - num2);
order(oddsAndEvens);
console.log(oddsAndEvens);

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = number => number === 1 ? number : number * factorial(number - 1);
console.log(factorial(6));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// Copiar
//       longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (string) => {
  let array = [];
  let longest = '';
  array = string.split(' ');
  for (let index in array) {
    array[index].length > longest.length ? longest = array[index] : longest
  }
  return longest;
}
console.log(longestWord('antonio foi no banheiro e não sabemos o que aconteceu'));

// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const addEvent = () => {
  const button = document.getElementById('click');
  button.addEventListener('click',() =>{document.getElementById('count').innerText = parseInt(document.getElementById('count').innerText, 10) + 1});
}
  addEvent();

//   Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const skills = ['HTML', 'CSS', 'JS', 'Git', 'C'];

const replaceX = (string) => 'Tryber x aqui!'.replace('x', string);
console.log(replaceX('bebeto'));

const printSkill = string => `${string} ${skills.sort()}`;
console.log(printSkill(replaceX('bebeto')));