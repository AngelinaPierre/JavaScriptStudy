function formatarNome(nomeCompleto){
    // removendo espaços iniciais e finais de um nome
    nomeCompleto = nomeCompleto.trim();
    // achando indice do primeiro espaço
    const space = nomeCompleto.indexOf(" ");
    // const space = nomeCompleto.lastIndexOf(" ");
    console.log(space);
    if(space < 0){
        return nomeCompleto;
    }
    // criando substrings
    const primeiroNome = nomeCompleto.slice(0,space);
    const sobrenome = nomeCompleto.slice(space + 1);
    console.log(primeiroNome);
    console.log(sobrenome);

    return sobrenome + ", " + primeiroNome;

}

console.log(formatarNome("Angelina pierre Tripodi"));