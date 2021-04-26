// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

function setBGColor(event) {
  const content = document.querySelector('.content');
  const color = event.target.innerText; 
  content.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}

function setFontColor(event) {
  const text = document.querySelector('.content');
  const color = event.target.innerText;
  text.style.color = color;
  localStorage.setItem('fontColor', color);
}

function setFontSize(event) {
  const text = document.querySelector('.content');
  const size = event.target.innerText;
  text.style.fontSize = size;
  localStorage.setItem('fontSize', size);
}

function setLineHeight(event) {
  const text = document.querySelector('.content');
  const height = event.target.innerText;
  text.style.lineHeight = height;
  localStorage.setItem('lineHeight', height);
}

function setFontFamily(event) {
  const text = document.querySelector('.content');
  const family = event.target.innerText;
  text.style.fontFamily = family;
  localStorage.setItem('fontFamily', family);
}

function addEventsBGColor() {
  const buttonList = document.querySelectorAll('#background-color button');
  for (let index = 0; index < buttonList.length; index += 1) {
    buttonList[index].addEventListener('click', setBGColor);
  }
}

function addEventsFontColor() {
  const buttonList = document.querySelectorAll('#font-color button');
  for (let index = 0; index < buttonList.length; index += 1) {
    buttonList[index].addEventListener('click', setFontColor);
  }
}

function addEventsFontSize() {
  const buttonList = document.querySelectorAll('#font-size button');
  for (let index = 0; index < buttonList.length; index += 1) {
    buttonList[index].addEventListener('click', setFontSize);
  }
}

function addEventsLineHeight() {
  const buttonList = document.querySelectorAll('#line-height>button');
  for (let index = 0; index < buttonList.length; index += 1) {
    buttonList[index].addEventListener('click', setLineHeight);
  }
}

function addEventsFontFamily() {
  const buttonList = document.querySelectorAll('#font-family>button');
  for (let index = 0; index < buttonList.length; index += 1) {
    buttonList[index].addEventListener('click', setFontFamily);
  }
}

function loadPreset() {
  const BG = localStorage.getItem('backgroundColor');
  const color = localStorage.getItem('fontColor');
  const size = localStorage.getItem('fontSize');
  const height = localStorage.getItem('lineHeight');
  const family = localStorage.getItem('fontFamily');
  const content = document.querySelector('.content');
  content.style.backgroundColor = BG;
  content.style.color = color;
  content.style.fontSize = size;
  content.style.lineHeight = height;
  content.style.fontFamily = family;
}

window.onload = function load() {
  addEventsBGColor();
  addEventsFontColor();
  addEventsFontSize();
  addEventsLineHeight();
  addEventsFontFamily();
  loadPreset();
};