// interando sobre objetos

const pessoa = {
    nome: "Angelina",
    idade: 28,
    "email": "gabrielle.tripodi@hotmail.com",
}

console.log(typeof pessoa, pessoa);
console.log();

// Para interar sobre essas propriedades vamos utlizar o loop forIn(), que irá interar sobre as propriedades de um objeto.
for(let qualquerNome in pessoa){
    console.log(typeof qualquerNome, qualquerNome);

}
console.log();

// Ele intera sobre a propriedades do objeto e nao o valor, para adquirir o valor da propriedade do objeto...
for(let qualquerNome in pessoa){
    console.log(typeof pessoa[qualquerNome], pessoa[qualquerNome]);
}