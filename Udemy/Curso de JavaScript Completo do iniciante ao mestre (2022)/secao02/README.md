# Seção 02 - Revisão Lógica de Programação.

<br>
<hr>

## 11. Introdução

<br>
<hr>
<br>

## Variaveis

<br>

- Espaços onde armazenamos valores
- var 
  - cross-browser (ES5)
- let & const (o que iremos utilizar)
  - ES2015
  - let não permite recriar a variavel, o var sim.

~~~

let teste = 'minha string';
console.log(teste);
teste = 10;
console.log(teste);

var teste1 = 'var permite recriar a variavel';
var teste1 = 'nova variavel';

const teste2 = 10;
console.log(teste2);
// não conseguimos reatribuir um valor a uma constante.
// com let podemos alterar.

// não precisamos atribuir um valor na criação da variavel.
let teste3;
console.log(teste3);
teste3 = 20;
console.log(teste3);

const teste4 = 'eu sou imutavel';
console.log(teste4);
~~~

<br>
<hr>
<br>

## Tipos de dados primitivos

<br>

- Strings, number(int, float), boolean
- Tipos não primitivos: undefined, null, symbol(ES2015)

~~~
let minhaVar = 'string';
console.log(minhaVar);
let minhaVar1 = "Minha 'string'";
console.log(minhaVar1);
let minhaVar2 = "Minha com aspas duaplas \"string\"";
console.log(minhaVar2);
// template literal
var minhaVar3 = 'minha template literal';
console.log(minhaVar3);
let idade = 40;
let msg1 = "eu possuo"+ idade +" anos";
console.log(msg1);
console.log("Hello" + " world");
let msg2 = `eu possuo ${idade} anos`;
console.log(msg2);

let var1 = 10;

let var2 = 10.5;


// para verificar o tipo de uma variavel usamos o typeof

console.log(typeof msg1, typeof idade, typeof minhaVar, " -- ", 20);

// number
const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);


// boolean

const isValid = true; // false
console.log(`isValid: ${isValid}`);



// undefined e null

let varTeste; 
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);

// precisamos explicitamente declarar o valor null
let varTeste1 = null; // uma variavel que tenha o valor null, possui como tipo um object.
console.log(varTeste1);
console.log(typeof varTeste1);
varTeste = 10;
console.log(typeof varTeste1, varTeste1);
~~~

<br>
<hr>
<br>


## Number

<br>
<hr>
<br>


## Boolean

<br>
<hr>
<br>


## undefined e null

<br>
<hr>
<br>


## Conversão ente tipos

<br>

~~~
let n1 = 10;
let n2 = "2";

// conversão implicita
console.log(typeof n1, typeof n2, n1 * n2); // multiplicação de string com number

console.log(typeof n1, typeof n2, n1 / n2); 

console.log(typeof n1, typeof n2, n1 + n2); // 102, o sinal de + pode ser utilizado tanto para somar quando para concatenar strings.


// CONVERSÃO EXPLICITA.
// sempre que formos fazer calculos matematicos, convertemos para numeros...
// parseInt, parseFloat, Number()

n2 = parseInt(n2);
console.log(typeof n1, typeof n2, n1 + n2);

n1 = "10.99999";
console.log(typeof n1, n1);
n1 = parseInt(n1);
console.log(typeof n1, n1);
n1 = "10.99999";
n1 = parseFloat(n1);
console.log(typeof n1, n1);


// Number()

let n3 = "10aaasad";
n3 = parseInt(n3);

let n4 = 2;

console.log(typeof n3, typeof n4, n3 + n4, n3); // as letras foram descartadas

n3 = "a14";
n3 = parseFloat(n3); // not a number NaN
console.log(typeof n3, n3);



// COnversão de numero em string

let n5 = 10;
n5 = n5 + "";
console.log(typeof n5, n5);
n5 = 15;
console.log(typeof n5, n5);
n5 = n5.toString(); // metodo que converte o numero para string
console.log(typeof n5, n5);

// to string -> Pode receber um paratrmetro (base de conversão), default = 10.

// decimais 0 - 9 | hexadecimal 0 - f(15)
n5 = 12;
n5 = n5.toString(16);
console.log(typeof n5, n5);

// forma binaria
n5 = 15;
n5 = n5.toString(2);
console.log(typeof n5, n5);
~~~

<br>
<hr>
<br>


## Operadores Aritmeticos, Logicos e Atribuição.

<br>

~~~
// soma (+) | subtração (-) | multiplicação (*) | divisão (/) | resto (%) | potencia (**).

let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2); // multiplos de 3 ou par ou impar
console.log(3 ** 2);


// OPERADORES DE ATRIBUIÇÃO

let n3 = 20; 
// n3 = n3 + 15;
n3 += 15; 
// -= | *= | /= | %= | **=
console.log(n3);


// OPERADORES DE INCREMENTO E DECREMENTO

let i = 0;
// i = i + 1; || i+= 1
console.log(i++);
console.log(i);
console.log(++i);
console.log(i); 

// OPERADORES DE COMPARAÇÃO

/**
 * IGUAL DE VALOR ==
 * IGUAL DE VALOR E TIPO ===
 * <,>,<=,>=
 * != VALORES DIFERENTES
 * !== VALORES E TIPOS DIFERETENS
 */


// OPERADORES LÓGICOS

/**
 * && - AND
 * || - OR
 * !  - NOT
 * 
 * Para uma pessoa viajar para o exterior:
 *  - precisa ser maior de 18 anos
 *              OU
 *  - Acompanhado com os pais
 *              E
 *  - Ter comprado bilhete
 * 
 */

let idade = 18;
let paisPresentes = true;
let comprouBilhete = false; //[2]
// const podeViajar = idade >= 18 || paisPresentes === true; // [1]
// const podeViajar = idade >=18 || paisPresentes;
// const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete); //[2] - Forma errada
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete; //[2] - Forma certa
console.log(`Pode viajar : ${podeViajar}`);

/**
 * [1] - Como a variavel paisPresentes é um booleano (true) podemos somente escrever o nome da variavael sem os operadores de atribuição.
 * [2] - Precisamos colocar os parenteses na forma certa pois se não teremos um quebra na regra de negocio, onde a pessoa pode viajar apesar de não ter comprado o bilhete.
 */


// PRECENDENCIA DE OPERADORES

console.log(n1,n2,n3);
n1 = 6;
n2 = 8;
let media = (n1 + n2)/2;
console.log(`media: ${media}`);

console.log( 3* 2 ** 2); // 12
console.log((3*2)**2); //36


// if.. else






~~~

<br>
<hr>
<br>



## Condicional IF-ELSE

<br>

~~~
// PRECENDENCIA DE OPERADORES

let n1 = 6;
let n2 = 8;
console.log(n1,n2);
let media = (n1 + n2)/2;
console.log(`media: ${media}`);

console.log( 3* 2 ** 2); // 12
console.log((3*2)**2); //36

if(n1 === 0 || n2 === 0){
    console.log('Reprovado!');
}else if(media < 7){
    console.log('Reprovado! Vai para recuperação!');
}else{
    console.log('Aprovado');
}
console.log('saiu do bloco if!');

// if.. else


let idade = 27;
let paisPresentes = false;
let comprouBilhete = true; //[2]
// const podeViajar = idade >= 18 || paisPresentes === true; // [1]
// const podeViajar = idade >=18 || paisPresentes;
// const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete); //[2] - Forma errada
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete; //[2] - Forma certa
console.log(`Pode viajar : ${podeViajar}`);

/**
 * [1] - Como a variavel paisPresentes é um booleano (true) podemos somente escrever o nome da variavael sem os operadores de atribuição.
 * [2] - Precisamos colocar os parenteses na forma certa pois se não teremos um quebra na regra de negocio, onde a pessoa pode viajar apesar de não ter comprado o bilhete.
 */


if(comprouBilhete === true){
    console.log('1Sim. Comprou o bilhete.');
}else{
    console.log('1Não comprou o bilhete!');
}

if(comprouBilhete){
    console.log('2Sim. Comprou o bilhete.');
}else{
    console.log('2Não comprou o bilhete!');
}

if(!comprouBilhete){
    console.log('3Sim. Comprou o bilhete.');
}else{
    console.log('3Não comprou o bilhete!');
}

if(!comprouBilhete){
    console.log('3Sim. Comprou o bilhete.');
}else{
    if(idade >=18){
        console.log('4É maior de idade, pode viajar!');
    }else{
        console.log('5OPA, menor de idade, não pode viajar!');
    }
}

// OPERADOR TERNARIO

// let msgMaiorIdade = "";
// if(idade >= 18){
//     msgMaiorIdade = "É maior de idade";
// }else{
//     msgMaiorIdade = "É menor de 18 anos"
// }

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos";

if(!comprouBilhete){
    console.log('Não comprou o bilhete');
}else{
    console.log(msgMaiorIdade);
}


~~~ 


<br>
<hr>
<br>


## Operador Ternários

<br>
<hr>
<br>


## Valores falsy e truthy

<br>
<hr>
<br>


## Curto-Circuito (default)

<br>
<hr>
<br>


## Condicional SWITCH

<br>
<hr>
<br>


## Repetições (loops)

<br>
<hr>
<br>


## BREAK vs CONTINUE

<br>
<hr>
<br>


## Funções

<br>
<hr>
<br>


## EXERCICIO PROPOSTO

<br>

1) Vamos criar uma html com dois botões.
  - BTN1 = MOSTRAR TABUADA
  - BTN2 = LIMPAR TELA.
2) Vamos criar tbm uma div com {id} para manipular o elemento no javascript.
3) Vamos tbm criar uma função para mostrar a tabuada.
  - Quando essa função for chamada, vamos escrever algo na <div>
  - Para isso acontecer precisamos acessar o elemento html <div id='output'> e armazenar uma referencia desse elemento no mundo do javascript.

> Para fazer a ponte do javascript para o mundo do HTML precisamos de uma ferramenta chamada DOM - DOCUMENT OBJECT MODEL. Tudo que manipularmos no DOM será refletido no HTML.

4) Vamos criar uma variavel constante para receber a referencia do elemento html.
   - Sempre que estivermos falando do DOM, chamamos a palavra reservada {document} que possui varios metodos.
   - O metodo que iremos chamar irá selecionar um elemento pela sua ID.

~~~
        const output = document.getElementById("output");

~~~

5) Quando executarmos a função de mostrar a tabuada queremos pegar a variavel (output) e colocar um valor dentro dela (codigo html).
   - Como queremos colocar codigo HTML dentro da varivel (output) podemos usar uma propriedade chamada (innerHTML) e colocar um valor qualquer.
   - Essa propriedade tbm permite a recepção de tags html <br>.

6) Existem diversas formas de conectar uma função no javascript a um botão no HTML.
6.1) O jeito mais simples seria atribuir um evento/função que será executada quando clicarmos no botão.
  - Para isso usamos um atributo do HTML chamado (onClick), que recebe o nome da função que será executada com os parenteses.

7) Quando clicarmos no mostrar tabuada temos que fazer o usuario digitar um numero qualquer e mostrar a tabuada de 1 a 1000.



> Toda informação que vem da interface do usuario é considerada como uma STRING.
> Se for fazer conta, uma boa ideia é transformar essa string em numero.
> Se o usuario não digitar um numero e sim uma letra, no futuro aprenderemos a vetar isso!

<br>
<hr>
<br>
