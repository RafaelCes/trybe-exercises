let salarioBruto = 3000.00;
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

console.log(salarioLiquido);