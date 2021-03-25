let custo = 500.00;
let venda = 850.00;
let imposto = 0.2;

if(custo <= 0 || venda <= 0){
    console.log('valores iniciais invalidos');
}
let valorCustoTotal = custo + custo * imposto;
let lucro = (venda - valorCustoTotal) * 1000;
console.log(lucro);