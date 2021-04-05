let entrada = 10;

if(entrada < 1){
    console.log('erro n < 1');
    return;
}

for(let coluna = 0; coluna < entrada; coluna +=2){
    for(let linha = 0; linha < entrada; linha +=1){
        if(linha + coluna >= entrada - 1){
        process.stdout.write("* ");
        }
        else if(){
            process.stdout.write("  "); 
        }
    }
    console.log('');
}