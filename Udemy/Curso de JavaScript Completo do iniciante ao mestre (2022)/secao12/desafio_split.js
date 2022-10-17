function formatarNome(nomeCompleto){
    // vamos quebrar o nomeCompleta usando o split()
    let nomeAsArray = nomeCompleto.split(" ");
    if(nomeAsArray.length === 1){
        return nomeCompleto;
    }
    // removendo o primeiro elemento do array original.
    let primeiroNome = nomeAsArray.shift();

    return nomeAsArray.join(" ") + ", " + primeiroNome;
}


console.log(formatarNome("Angelina"));
console.log(formatarNome("Angelina Pierre"));
console.log(formatarNome("Angelina Pierre Tripodi"));