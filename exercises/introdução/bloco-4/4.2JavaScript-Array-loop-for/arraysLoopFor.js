let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Exercicio 1
for(let index = 0; index < numbers.length; index += 1){
    console.log('posição', index,'=', numbers[index]);
}
//exercicio 2
let sum = 0;
for(index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
console.log('soma de todos os valores = ', sum);
//exerciicio 3
let avarege = sum/numbers.length - 1;
console.log('media =', avarege);
//exercicio 4
if(avarege > 20){
    console.log('valor da media maior que 20');
}
else{
    console.log('valor da meida menor ou igual a 20');
}
//exercicio 5
let max = numbers[0];
for(index = 1; index < numbers.length; index += 1){
    if(numbers[index] > max){
        max = numbers[index];
    }
}
console.log('maior valor =', max);
//exercicio 6
let counter = 0;
for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 === 1){
        counter += 1;
    }
}
if(counter === 0){
    console.log('nenhum valor ímpar encontrado');
}
else{
    console.log(counter, 'números ímpares encontrados');
}
//exercicio 7
let min = numbers[0];
for(index = 1; index < numbers.length; index += 1){
    if(numbers[index] < min){
        min = numbers[index];
    }
}
console.log('menor valor =', min);
//exercicio 8
let counting = [] ;
for(index = 0; index <= 24; index += 1){
    counting.push(index+1);
}
console.log(counting);
//exercicio 9
for(index = 0; index <= 24; index += 1){
    console.log(counting[index]/2);
}