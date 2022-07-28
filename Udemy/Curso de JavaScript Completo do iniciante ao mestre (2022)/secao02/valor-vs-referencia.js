// > teste = "teste"
// 'teste'
// > typeof teste
// 'string'
// > teste1 = new String("Teste1")
// [String: 'Teste1']
// > teste
// 'teste'
// > teste1
// [String: 'Teste1']
// > typeof teste1
// 'object'
// > 

// variaveis primitivas não possuem refrencia a objetos
// O que é primitivo não é representado atraves de um objeto, ou seja, não possui metodos.
// Objetos armazenados por valor 
// > let a = "a"
// undefined
// > let _a="a"
// undefined
// > a == _a
// true


// objetos armazenados por referencia
// > let b = []
// undefined
// > let _b = []
// undefined
// > b == _b
// false
// O que esta acontencendo é que o que esta sendo armazenado não é o valor e sim o espaço na memoria onde a variavel foi salva. 


// > b
// []
// > _b
// []
// > b = _b
// []
// > b == _b
// true
// > b[0] = "teste"
// 'teste'
// > b
// [ 'teste' ]
// > _b
// [ 'teste' ]
// Se fizermos agora qualquer coisa em um dos arrays (b ou _b) irá ser refletido no outro pois os dois apontam para o mesmo local na memoria.

// vamos criar uma função
function alteraArray(a){
    a.push("add");
}

let arr = ["arr"]; // array
console.log(arr);
alteraArray(arr); // estamos passando para o computador uma referencia onde o valor esta armazenado.
console.log(arr);

// [ 'arr' ]
// [ 'arr', 'add' ]
console.log();
// O mesmo não aconteceria se fosse um tipo de dado primitivo, pois esse é passado por valor e não por referencia.

function alteraPrimitivo(p){ // p = "mensagem"
    p += " adciionado";
    console.log(`Dentro da função: ${p}`);
}
let msg = "mensagem";
console.log(msg);
alteraPrimitivo(msg); // estamos aqui passando o valor da variavel, uma string direta
console.log(msg);
