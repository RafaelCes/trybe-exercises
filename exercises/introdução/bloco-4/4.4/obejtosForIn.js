let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  let second = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorente: 'sim',
  };
  console.log('Bem vinda, ' + info.personagem);
  info.recorente = 'sim';
  console.log(info);
  for(let key in info){
      console.log(key);
  }
  for(let key in info){
    console.log(info[key]);
}
for(let key in info){
    console.log(info[key] + ' e ' + second[key]);
}