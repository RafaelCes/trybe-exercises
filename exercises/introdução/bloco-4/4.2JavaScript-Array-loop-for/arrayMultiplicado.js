let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];
if (numbers[10] === undefined){
    console.log('funciona');
}
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index +1] === undefined){
        multipliedNumbers[index] = numbers[index] * 2; 
    }
    else {
        multipliedNumbers[index] = numbers[index] * numbers[index + 1];
    }
}
console.log(multipliedNumbers);