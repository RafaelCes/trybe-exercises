let a = 5;
let b = 8;
let c = 12;
let piece = 'King';
let score = 85;
let cost = 500.00;
let price = 850.00;
let taxes = 0.2;
let salarioBruto = 3000.00;



function add(a, b){
    return a + b;
}
console.log('soma ' + add(a, b));

function subtract(a, b){
    return a - b;
}
console.log('subtração ' + subtract(a, b));

function multiply(a, b){
    return a * b;
}
console.log('multiplicação ' + multiply(a, b));

function divide(a, b){
    return a / b;
}
console.log('divisão ' + divide(a, b));

function module(a, b){
    return a % b;
}
console.log('modulo ' + module(a, b));

function max2(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log('Maior entre 2 números ' + max2(a, b));

function max3(a, b, c){
    if(a > b && a > c){
        return a;
    }
    else if(b > a && b > c){
        return b;
    }
    else{
       return c;
    }
}
console.log('Maior entre 3 números ' + max3(a, b, c));

function sign(a){
    if(a > 0){
        return 'positive';
    }
    else if(a < 0){
        return 'negative';
    }
    else{
        return 'zero';
    }
}
console.log('sinal ' + sign(a));

function checkTriangle(a, b, c){
    if(a <= 0 || b <= 0 || c <=0 ){
        return 'angulos invalidos';
    }
    else if (a+b+c == 180){
        return true;
    }
    else{
        return false;
    }
}
console.log('checa triangulo ' + checkTriangle(a, b, c));

function chessPiece(piece){
    switch(piece.toLowerCase(piece)){
        case 'pawn':
            return 'Pawn chess pieces can only directly forward one square, with two exceptions. Pawns can move directly forward two squares on their first move only.Pawns can move diagonally forward when capturing an opponents chess piece.';
            break;
        case 'rook':
            return 'The rook piece can move forward, backward, left or right at any time.';
            break;
        case 'knight':
            return 'The Knight piece can move forward, backward, left or right two squares and must then move one square in either perpendicular direction';
            break;
        case 'bishop':
            return 'The bishop can move in any direction diagonally, so long as it is not obstructed by another piece.';
            break;
        case 'queen':
            return 'The queen can move in any direction on a straight or diagonal path.';
            break;
        case 'king':
            return 'The king piece can move one single square in any direction.';
            break;
        default:
            return 'peça invalida';
    
    }
}
console.log('regras da peça ' + chessPiece(piece));

function convertScore(score){
    if( score >= 90){
        return 'A';
    }
    else if(score >= 80){
        return 'B';
    }
    else if(score >= 70){
        return 'C';
    }
    else if(score >= 60){
        return 'D';
    }
    else if(score >= 50){
        return 'E';
    }
    else if(score < 50){
        return 'F';
    }
    else{
        return 'Nota invalida';
    }
}
console.log('nota convertida ' + convertScore(score));

function checkOdd(a, b, c){
    if(a % 2 === 1 || b % 2 === 1 || c % 2 === 1 ){
        return true;
    }
    else{
        return false;
    }
}
console.log('checa números impar ' + checkOdd(a, b, c));

function checkEven(a, b, c){
    if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ){
        return true;
    }
    else{
        return false;
    }
}
console.log('checa números par ' + checkEven(a, b, c));

function profit(cost, price, taxes){
    if(cost <= 0 || price <= 0){
        return 'valores iniciais invalidos';
    }
    let totalCost = cost + cost * taxes;
    let profit= (price - totalCost) * 1000;
    return profit;
}
console.log('lucro total é ' + profit(cost, price, taxes));

function imposto(salarioBruto){
    
    let aliquotaINSS, aliquotaIR, salarioBase, salarioLiquido;

    if(salarioBruto <= 1556.94){
        aliquotaINSS = .08;
        salarioBase = salarioBruto - salarioBruto * aliquotaINSS;
    }
    else if(salarioBruto <= 2594.92){
        aliquotaINSS = .09;
        salarioBase = salarioBruto - salarioBruto * aliquotaINSS;
    }
    else if(salarioBruto <= 5189.82){
        aliquotaINSS = .11;
        salarioBase = salarioBruto - salarioBruto * aliquotaINSS;
    }
    else{
        salarioBase = salarioBruto - 570.88;
    }

    if(salarioBase <= 1903.98){
        aliquotaIR = 0;
        salarioLiquido = salarioBase;
    }
    else if(salarioBase <= 2826.65){
        aliquotaIR = .075;
        salarioLiquido = salarioBase - (salarioBase * aliquotaIR - 142.8);
    }
    else if(salarioBase <= 3751.05){
        aliquotaIR = .15;
        salarioLiquido = salarioBase - (salarioBase * aliquotaIR - 354.8);
    }
    else if(salarioBase <= 4664.68){
        aliquotaIR = .225;
        salarioLiquido = salarioBase - (salarioBase * aliquotaIR - 636.13);
    }
    else{
        aliquotaIR = .275;
        salarioLiquido = salarioBase - (salarioBase * aliquotaIR - 869.36);
    }

    return salarioLiquido;
}
console.log('salario após impostos é ' + imposto(salarioBruto));