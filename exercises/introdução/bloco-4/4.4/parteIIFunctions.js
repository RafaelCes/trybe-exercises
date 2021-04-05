function verifyPalindrome(string){
    let reverse = string.split("").reverse().join("");
    if(string === reverse){
        return true;
    }
    else{
        return false;
    }
}
console.log(verifyPalindrome('arara'), verifyPalindrome('desenvolvimento'));

function maxValue (array){
    let max = 0;
    for(let key in array){
        if(array[max] < array[key]){
            max = key;
        }
    }
    return max;
}
console.log(maxValue([2, 3, 6, 7, 10, 1]));

function minValue (array){
    let min = 0;
    for(let key in array){
        if(array[min] > array[key]){
            min = key;
        }
    }
    return min;
}
console.log(minValue([2, 4, 6, 7, 10, 0, -3]));

function longestName (array){
    let index = 0;
    for(let key in array){
        if(array[index].length < array[key].length){
            index = key;
        }
    }
    return array[index];
}
console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function mostRepeated(array){
    let champion;
    let record = 0;
    let counter;
    for(let index in array){
        counter = 0;
        for(let secondIndex in array){
            if(array[index] === array[secondIndex]){
                counter += 1;
            }
        }
        if(counter > record){
            champion = array[index];
            record = counter;
        }
    }
    return champion;
}
console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]))
 function sum(num){
     let total = 0;
     for(let index = num;index > 0; index-= 1){
         total += index;
     }
     return total;
 }
 console.log(sum(5));

 function checkEnding(word, ending){
     for(index = 1; index <= ending.length; index += 1){
         if(word[word.length - index] !== ending[ending.length - index]){
             return false;
         }
     }
     return true;
 }
 console.log(checkEnding('trybe', 'be'));
 console.log(checkEnding('joaofernando', 'fernan'));