let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let min = 0;
let aux = 0;
for(let index = 0; index < numbers.length; index += 1){
    max = index;
    for(let secondIndex = index + 1; secondIndex < numbers.length; secondIndex += 1){
        if(numbers[secondIndex] > numbers[max]){
            max = secondIndex;
        }
    }
    aux = numbers[index];
    numbers[index] = numbers[max];
    numbers[max] = aux;
    
}
console.log(numbers);