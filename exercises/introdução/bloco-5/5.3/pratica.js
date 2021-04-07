const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


//  1 Copie esse arquivo e edite apenas ele;

// 2 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1 Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function setClassTech(event) {
  let tech = document.querySelector('.tech');
  tech.classList.remove('tech');  
  event.target.classList.add('tech');
  return;
}
divUm.addEventListener('click',setClassTech);
divDois.addEventListener('click',setClassTech);
divTres.addEventListener('click',setClassTech);
//  3Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeTechText() {
  let element = document.querySelector('.tech');
  element.innerText = input.value;
}
input.addEventListener('keyup', changeTechText);
//  4Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
function webPortifolio() {
  const win = window.open('https://rafaelces.github.io/', '_blank');
  win.focus();
}
myWebpage.addEventListener('dblclick',webPortifolio);
// 4.1 Que tal redirecionar para seu portifólio?

//  5Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.