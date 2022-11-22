// [METODO OBJECT CREATE()]

const mae = {
    nome: "Maria",
    falar: function(msg){
        console.log(`${this.nome}: ${msg}`);
    }
}

// usando metodo especifico para criarmos objetos
const filha = Object.create({
    nome: "Angelina", // a propriedade esta sendo colocada dentro do prototype
});

// usando o metodo passando o objeto como primeiro parametro
// Fazendo dessa maneira, o segundo parametro não é o objeto em si, e sim os
// descritores.
const filha1 = Object.create(mae, {
    nome: {
        value: "Angelina1",
        // colocando enumerable como true para a propriedade ser passada no [assign()].
        enumerable: true,
    }, 
})

// dessa maneira, quando formos ver no console quem é [filha1.__proto__], temos o
// proprio objeto [mae]. Permitindo assim que possamos utilizar o metodo [falar], no objeto [filha1].


// [METODO OBJECT ASSIGN()]

// Esse metodo cria um objeto novo, colocando as propriedades e metodos do objeto passado neste novo objeto.

const obj = {
    a:"a",
    b:"b",
    c: "c",
};

// vamos criar esse objeto para fazer um [clone] abaixo.
const obj1 = {
    b: "b2",
    d: "d2",
}

// vamos criar uma propriedade não enumeravel para fazermos um teste vendo se o [assign()] tbm retorna as propriedades não enumeraveis.
// Object.defineProperty(obj1, "naoEnumeravel", {
//     value: "não enumeravel",
// });

Object.defineProperties(obj1, {
    naoEnumeravel:{
        value: "nao enum",
    },
    enumeravel:{
        value: "enum",
        enumerable: true,
    },
});

const obj4 = Object.assign({}, obj1);
// console.log(obj4);


// O metodo [assign()] so irá copiar metodos [enumeraveis]. 
const filho = Object.assign(obj, filha1);

// podemos tbm passar mais de um objeto para o metodo [assign()].
obj.d = "d";  //  nosso objeto [filho] foi tbm alterado ao alterarmos o objeto que constroi o mesmo.

// Para que o objeto base não altere o objeto gerado, temos que passar um objeto vazio como primeiro parametro.
const filho1 = Object.assign({}, obj, filha1);

// esse objeto vazio é o retornado que será armazenado em [clone]
// observe que tanto obj, quanto obj1, possuem propriedades de mesmo nome
let clone = Object.assign({},obj, obj1);  
// quando temos propriedades de mesmo nome, o [assign()] faz uma mescla entre essas propriedades. Fazendo com que o ultimo objeto que foi incluido prevaleça sobre o primeiro.
// Vamos ver o que acontece quando invertermos a ordem. O ultimo objeto prevalece.
clone = Object.assign({}, obj1, obj);

// poderiamos tbm colocar as propriedades de um objeto dentro do outro. Sendo que dessa maneira obj1 = clone1, logo se alterarmos um objeto o outro tbm será alterado.
// const clone1 = Object.assign(obj1, obj);

obj.e = "e";

// outra forma de criarmos clone de objetos sem utilizarmos o [assign()] seria usando o [spread operator]
const obj2 = {...obj, ...obj1}; // não retorna propriedades não enumeraveis.
const obj3 = {...obj1, ...obj};
// console.log(obj2);
// console.log(obj3);


// [METODO OBJECT KEYS() | VALUES() E ENTRIES()]

// chaves das propriedades [cross-browser]
console.log(Object.keys(obj1)); // nao mostra propriedades nao-enumeraveis.
// valores das propriedades
console.log(Object.values(obj1));
// chave e valor no formato de array bi-dimensional.
console.log(Object.entries(obj1));

/**
[CONSOLE]
> teste = Object.entries(obj2)
> teste
> teste[0]
> teste[0][0]
> teste[0][1]

 */




