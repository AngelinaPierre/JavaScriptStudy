function getRandomNumber(inicio = 0, fim = 5, integer = true){

    // forma antiga para valores default
    // inicio do numero randomico, defualt = 0
    // fim do numero randomico, default =1
    // inicio = inicio || 0;
    // fim = fim || 1;

    let r = Math.random() * (fim - inicio + 1) + inicio;
    // integar booleano indicando se é queremos mostranar o inteiro ou nao
    


   return integer ? parseInt(r) : r;
}

console.log(getRandomNumber());
console.log(getRandomNumber(2,3));
console.log(getRandomNumber(0,1,false));
console.log(getRandomNumber(0,10,false));


/**
 * 1) A primeira coisa que iremos fazer será criar uma variavel (r) que desrespeita ao numero randomico.
 * 
 */