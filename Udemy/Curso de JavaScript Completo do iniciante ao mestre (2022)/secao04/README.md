# Seção 04 - Funções

<br>
<hr>
<br>

## Introdução
<br>

- São tipos de objetos com a incrivel capacidade de serem invocados.
- Podem ser literais
- Em alguns casos, ocorre o hoisting
- São objetos de primeira classe.
- No ES5 funções são a única maniera de gerar escopo.
- Podem ser IIFE (Immediately Invoked Function Expression).
- Podem ter propriedades internas como arguments e name.


### Funções Literais
<br>

- As funções literais são aquelas que não utilizamos o operador `new` na sua criação.

~~~
function myFunc() {}
function() {}
// declaraçãod e função
function minhaFunc() { 
    // corpo da funcao
} 
~~~

<br>

### Hoisting
<br>

- Capacidade do javascript de "içar" uma function declaration.

~~~
function teste(){
    console.log(teste);
}

teste(); 
~~~ 

- O que aconteceria se colocassemos a chamada da função antes do corpo da função? Vai funcionar?
- Sim, pois no momento do parceamento desse javascript todas as funções são "içadas" para o topo do arquivo.

~~~
teste();  

function teste(){
    console.log(teste);
}

~~~

- O mesmo não irá acontecer com `function expressions`

~~~ 
teste1(); // vai dar o not defined.
const teste1 = function teste1() {
    console.log("teste"); 
}
~~~ 

- Com variaveis funciona da mesma forma so que um pouco diferente.

~~~
console.log(minhaVar);
var minhaVar = "variavel";
~~~

- As variaveis vao para cima do documento, porem  não possuem valores ainda, o que é "hoistiado" é a criação da variavel, sua declaração.
- No codigo acima, sua atribuição correr somente na linha de declaração real da variavel.

~~~
console.log(minhaVar1);
const minhaVar1 = "variavel1";
console.log(minhaVar1);

console.log(minhaVar2);
let minhaVar2 = "variavel2";
console.log(minhaVar2);
~~~  

- Seja com `const` ou `let` precisamos criar a variavel antes de utiliza-la.
- So conseguimos fazer `hoisting` de variaveis declaradas com `var`.
  

<br>
<hr>
<br>

## Funções auto-invocáveis 
<br>

### Objetos de primeira classe 
<br>

- Funções em javascript são tratadas como qualquer outro objeto.
- Passadas como parâmetros para outras funções (call-back)
- Atribuídas em propriedades de objetos (métodos).
- Retornadas como resultado de outra função.
- Podem ter suas próprias propriedades.

<br>

### ES5: Única forma de definir escopo de variáveis.
<br>

- No ECMA Script 5 a unica forma de definir o escopo de variaveis era atraves de funções.
- No `if(){}` como estamos utilizando a palavra `var` ela esta no escopo da função inteira, e não no escopo global. 
- Por isso o primeiro `console.log(x)` funciona e o segundo não.
- Como a `var` não gera `escopo de bloco` ela acaba "vazando" do `if(){}` e indo para o escopo da função inteira.
~~~ 
function minhaFunc(){
    if(true){
        var x = 10;
    }
    console.log(x) // 10
}
console.log(x) //erro
~~~ 

- Seria diferente se utilizassemos o `let` ou o `const`.
- Essas variaveis so irão existir no escopo de bloco, ou seja, dentro do `if(){}`. 

~~~ 
function minhaFunc() {
    if(true){
        let x = 10;
        console.log(x); // 10
    }
    console.log(x) // erro
}
console.log(x) // erro
~~~ 

<br>

### IIFE: Funções auto-invocáveis
<br>

- Evitar poluir o escopo global.

1) Vamos criar um arquivo `.html` e outros dois `.js` (menu && modal) para exemplificar.
2) Se criarmos uma variavel de mesmo nome nos dois arquivos `.js`:
   - let = erro + false
   - var = true sempre.
3) O `let` veio em partes para resolver essa questão, porem o mesmo não acontece com uma função.
4) Criamos uma função `init()` nos dois arquivos `.js` se chamarmos essa função no `.html` quem será retornado? Será a ultima função carregada no `script`, para fazer o fix, basta chamar a função dentro do arquivo depois da função.

~~~
// iife-menu.js
function init() {
    console.log('init menu'); 
}

// iife-modal.js
function init() {
    console.log('init modal')
}
~~~

- Ainda falando sobre as questões das variaveis, vamos colocar nossa variavel `isValid` dentro da função...
- Ou seja, no modal teremos uma variavel `isValid = true` e no menu teremos outra variavel `isValid = false`.

~~~
// iife-menu.js
function init() {
    let isValid = false;
    console.log('init menu'); 
}
init()
// iife-modal.js

function init() {
    let isValid = true;
    console.log('init modal')
}
init()
~~~

- As variaveis agora estão no escopo da função e não no global.
- Agora o que esta acontecendo é que as funções estão uma sobre-escrevendo a outra, como fazemos para que nem a função `init()` polua o escopo global? O que seria um dos objetivos de usar as `funções auto-invocaveis`. 
- Vamos criar uma função autoinvocavel, para isso:

~~~
// sem nome ou seja, função anonima

(function(){

})()
~~~

- E colocamos o codigo dentro da função anonima, não levando a função para o escopo global.

~~~ 
(function(){
    let isValid = false;
    console.log('menu', isValid);

    function init(){
        console.log('init do menu');
    }
    init();
})() // esses parenteses() nos mostra que a função é autoexecutavel, assim que o javascript ler o codigo/função irá executa-la.
~~~ 

- Basicamente, é isso o que as funções `auto-invocaveis` fazem, geram um escopo isolado de cada arquivo, pois tudo o que colocamos dentro de um arquivo "vaza" para fora se nao estiver dentro de `função, let ou const`


<br>

### Não vai precisar de IIFE se:
<br>

- Usar um Bunfle (Webpack, Parcel, outros) -  deixa coisas isoladas no proprio escopo e so permite utilização usando palavras chaves como `import` ou `require`.
- Usar ESModules (browser modernos)
- Programar em Node

<br>
<hr>
<br>

## Parâmetros para funções auto-invocaveis
<br>

- Conseguimos passar parametros para a função anonima.

~~~
// passando 3 parametros para uma função auto-invocavel / anonima

(function(n1,n2,n3){
    let isValid = false;
    console.log('menu', isValid);

    function init(){
        console.log('init do menu');
    }
    init()
})() // [1] Parenteses onde passamos os parametros para a função anonima.
~~~

- O parenteses() que invoca a função anonima é justamente o ultimo // [1]

~~~
(function(n1,n2,n3){
    let isValid = false;
    console.log('menu', isValid,n1,n2,n3);

    function init(){
        console.log('init do menu');
    }
    init()
})(1,2,3);
~~~

- Algo comum de ser ver, principalmente em codigo de bibliotecas que usam o sistema de função au-invocavel/anonima é, por exemplo, passar os objetos `window` e `document` .
- Passamos para dentro da função auto-invocavel, o objeto global `window` e o objeto global `document`  que esta dentro de `window`.
- Colocamos no parametro da função anonima `(win, doc)`.
- Podemos por exemplo acessar a função alert dentro do objeto.

~~~

(function(win,doc){
    let isValid = false;
    win.alert("objetos globais");
    console.log('obg glob: ', isValid, win,doc);

    function init(){
        console.log('init ob global');
    }
    init();
})(window, document);
~~~

<br>
<hr>
<br>

## use strict
<br>

- Se esquecermos de quando declararmos uma variavel usar o `let` a variavel em questão irá para o `escopo global` podendo gerar problemas no futuro.

~~~
console.log('use-stric');
(function(win,doc){
    isValid = false;
    win.alert("objetos globais");
    console.log('obg glob: ', isValid, win,doc);

    function init(){
        console.log('init ob global');
    }
    init();
})(window, document);

console.log("isValid", isValid);
~~~

- A forma de impedir que isso aconteça seria utilizando o `use strict`.
- Vamos ganhar um erro no console, porem é melhor do que poluir o `escopo global`.

~~~
console.log('use-stric');
(function(win,doc){
    "use strict";
    isValid = false;
    win.alert("objetos globais");
    console.log('obg glob: ', isValid, win,doc);

    function init(){
        console.log('init ob global');
    }
    init();
})(window, document);

console.log("isValid", isValid);
~~~

<br>
<hr>
<br>

## Arguments
<br>

### Proprieaddes arguments
<br>

- Digamos que tenhamos uma função somar() sem parametros nenhum.

~~~
function somear() {
    let soma = ??
    return soma;
}
console.log(somar(1,2));
console.log(somar(1,2,3,4));
console.log(somar(1,2,3,4,5,6,7,8,9,10));
~~~

- Como iriamos fazer a soma de todos os parametros que forem passados? ou seja, mais de 1? 
- Como poderiamos saber quantos parametros foram passados para dentro desta função?

~~~

function somar(n1,n2){
    return n1 + n2;
}
console.log(somar(1,2));
console.log(somar(1,2,4)); // 3

// para termos acesso a um terceiro parametro, precisarios add mais um na função

function somar3(n1, n2, n3){
    return n1 + n2 + n3;
}

console.log(somar3(1,2)); // NaN
console.log(somar3(1,2,4)); // 7


~~~

- Queremos deixar o numero de `argumentos` opcionais, sem precisar ficar acrescentando `n1, n2, n3...`.

~~~

// com arrays...
function somar4(arr){
    let somaTotal = 0;
    for(let i = 0; i < arr.length; i++ ){
        somaTotal += arr[i];
    }
    return somaTotal;
}

console.log(somar4([1,2,3]));
~~~

- Passando somente com os numeros. `arguments`

~~~
// somente com numeros

function somar5(){
    console.log(arguments);
    let somaTotal = 0; 
    for(let i = 0; i < arguments.length; i++){
        somaTotal += arguments[i];
    }
    return somaTotal
}

console.log(somar5(1,3,5));
console.log(somar5(1,3,5,2,3,4));
console.log(somar5(1,3,5,231,32,31,3,231));
~~~

- Quando usamos o arguments no console é mostrado como objeto, ja no browser será um pouco diferente, será como se fosse um ARRAY.

<br>
<hr>
<br>

## Arguments vs Arrow Functions
<br>

- `arguments` não podem ser utilizados dentro de `arrow functions`.
- Para utilizar `arguments`, precisamos obrigatoriamente trabalhar ou com `function expression` ou com `function declaration` que foi o que fizemos na função `somar()`.

~~~
// função somar como const expression 

const somar2  = () => {
    console.log(arguments);
    somaTotal = 0; 
    for(let i = 0; i < arguments.length; i ++){
        somaTotal += arguments[i];
    }
    return somaTotal;
}
console.log(somar2(1,2,3,4,5));
~~~

<br>
<hr>
<br>

## Propriedade name
<br>

- Toda função possui uma propriedade chamada `name` que irá retornar o nome da propria função.

~~~
// função somar como const expression (arguments)
const somar1 = function () { // função "sem nome" atribuida a uma variavel com nome
    console.log(arguments);
    let somaTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        somaTotal += arguments[i];
    }
    return somaTotal;
}

console.log(somar1(1,2,3,4));
console.log(somar1.name);


const somar6 = function s() { // função com nome atribuida a uma variavel com nome.
    console.log(arguments);
    let somaTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        somaTotal += arguments[i];
    }
    return somaTotal;
}

console.log(somar6(1,2,3,4,3,1));
console.log(somar6.name);

~~~

<br>
<hr>
<br>

## Objetos de primeira classe
<br>

- Passadas como parâmetros para outras funções (callback)
- Atribuidas em propriedades de objetos (métodos)
- Retornadas como resultado de outra função.
- Podem ter suas próprias propriedades.

- Funções de javascript são tratadas como objetos de primeira classe.

~~~ 
// funções como parametros de outras funções (callback)
function fn(callback){ // callback = função sendo passada como parametro
    console.log('executar ação de callback');
    console.log(typeof callback); // string function
    callback(); // execução da função passada como parametro.
}

// na chamada da função vamos passar como parametro uma função anonima.
fn(function(){
    console.log('função passada por parametro.');
});
~~~ 

- Se não passarmos uma função como parametro iremos receber um undefined, quando chamarmos a função.

~~~
function fn(cb){
    console.log('Executar acao de callback');
    console.log(typeof cb);
    cb(); // undefined
}
fn(); 
~~~

- Logo precisamos criar uma verificação para termos certeza de que esta sendo passada uma função para o parametro de callback. (curto-circuito).

~~~ 

// curto circuito (verificação)
function fn(cb){
    console.log('executar ação de callback com CC');
    console.log(typeof cb);
    typeof cb === "function" && cb();
}
fn(); // vai executar sem erro e dar undefined
// passndo uma função anonima...
fn(function(){
    console.log('função passada por parametro 2');
})
~~~ 

- Poderiamos tambem criar uma outra `function` chamada de `callback()` e passar para a outra função em vez de criarmos uma função anonima...

~~~
// curto circuito (verificação)
function fn(cb){
    console.log('executar ação de callback com CC');
    console.log(typeof cb);
    typeof cb === "function" && cb();
}
fn(); // vai executar sem erro e dar undefined
// passndo uma função anonima...
fn(function(){
    console.log('função passada por parametro 2');
})

function callback(){
    console.log('função de callback passada por parametro');
}

fn(callback);
~~~

- Podemos tambem atribuir funções a propriedades de objetos.

~~~

// atribuindo funções a propriedades de objetos.

const obj = {
    callback: callback
}
obj.callback();

// mesma coisa
const obj = {
    callback,
}
obj.callback();
~~~

- Podemos retornar funções como resultado de outras funções.

~~~ 

function fn2(n1){

    return function(n2){
        return n1 * n2;
    }
}
~~~

- Quando executarmos `fn2()` ela irá receber um `parametro` e irá retornar uma outra função.

~~~
// Retornando uma função como resultado de outra função.

function fn2(n1){

    return function(n2){
        return n1 * n2;
    }
}

const funcao2 = fn2(10); // o que estŕa dentro de [funcao2] será a função anonima retornada.
const mult = funcao2(2); // estamos agora passando o segundo parametro requerido, pois a função que erá retornada precisa de um parametro. 

console.log(mult); // 20
~~~

- Ou seja, na primeira chamada de `fn2()`, a `função2` irá armazenar a `função de retorno` (que possui um parametro), quando chamamos `função2(2)` estamos passando o segundo parametro requirido para a execução.
- Isso acontece pq a função é em si um `objeto`e da mesma forma que podemos retornar um `objeto` podemos retornar uma função.
- Esse exemplo envolve um conceito chamado `closuring????` que veremos + a frente.

~~~
// mais simples
function fn3(){
    return function(){
        console.log('função retornada por paramentro (simples)');
    }
}

fn3(); // não funciona.
console.log(typeof fn3, fn3); // function fn3.
console.log(typeof fn3,fn3()); // function anonymous

// temos que armazenar a função de retorno em uma variavel
const func3 = fn3();
func3();
console.log(typeof fn3, fn3, typeof func3, func3); // func3 = função anonima.
~~~

- Podemos tambem colocar nossas proprias `propriedades` dentro de uma função.

~~~

// mais simples
function fn3(){
    fn3.count++;
    return function(){
        console.log('função retornada por paramentro (simples)');
    }
}

fn3(); // não funciona.
console.log(typeof fn3, fn3); // function fn3.
console.log(typeof fn3,fn3()); // function anonymous

fn3.count = 0;
// temos que armazenar a função de retorno em uma variavel
const func3 = fn3();
const func3a = fn3(); 
const func3b = fn3();

func3();
console.log(fn3.count);
console.log(typeof fn3, fn3, typeof func3, func3); // func3 = função anonima.


~~~


<br>
<hr>
<br>

## Desafio: Calcular média
<br>

- Construir uma função para calcular média.
- Pode receber um ou mais valores numéricos
- Deve retornar um único número
- Deve gerar um erro se receber um parâmetro não n umero
- Deve retornar zero caso não receba nenhum parâmetro.

Exemplos:

- calcularMedia() // 0 
- calcularMedia(2, 6) // 4
- calcularMedia(2,6,1,1,2,6) // 3
- calcularMedia("2", "6") // Error  

<br>
<hr>
<br>

## Resolução: Calcular média
<br>

~~~
// criar função autoinvocavel
(function(){
    function calcularMedia(){
        let totalMedia = 0;
        let qtdParams = arguments.length;
        for(let i = 0; i < qtdParams; i ++){
            if(typeof arguments[i] !== "number"){
                throw Error("only Numbers");
            }
            totalMedia += arguments[i];
        }
        return (totalMedia / qtdParams) || 0; // para nao retornar NAN (curto circuito);
    }

    let media = calcularMedia(2,1,2,3); 
    console.log(media);
})()
~~~ 

<br>
<hr>
<br>

## Desafio: Calcular IMC
<br>

- Construir uma função para calcular IMC
  - IMC = peso / altura^2
  - Deve retornar um único número
  - Deve gerar um erro se receber um parâmetro não número
  - Deve retornar erro caso não receba nenhum parâmetro.
- Depois iremos criar uma função para classificar o IMC.
  - Deve receber um número (o IMC)
  - Deve retornar uma string
  - Deve gerar um erro se receber um parâmetro não número.
  - Deve retornar erro caso não receba nenhum parâmetro.

<table>
    <thead>
        <tr>
            <th>Classificação</th>
            <th>IMC</th>
        </tr>
    </thead>
    <tbody>
        <tc>
        <tr>
            <td>Muito abaixo do peso</td>
            <td>16 a 16,9 kg/m2</td>
        </tr>
        <tr>
            <td>Abaixo do peso</td>
            <td>17 a 18,4 kg/m2</td>
        </tr>
        <tr>
            <td><strong>Peso normal</strong></td>
            <td><strong>18,5 a 24,9 kg/m2</strong></td>
        </tr>
        <tr>
            <td>Acima do peso</td>
            <td>25 a 29,9 kf/m2</td>
        </tr>
        <tr>
            <td>Obesidade Grau 1</td>
            <td>30 a 34,9 kg/m2</td>
        </tr>
        <tr>
            <td>Obesidade Grau 2</td>
            <td>35 a 40 kg/m2</td>
        </tr>
        <tr>
            <td>Obesidade Grau 3</td>
            <td>maior que 40 kg/m2</td>
        </tr>
    </tbody>
</table>




<br>
<hr>
<br>

## Classificação IMC
<br>

<br>
<hr>
<br>

## Resolução: calcular IMC
<br>

~~~
function calcularIMC(peso, altura){
    if(peso === undefined || altura === undefined){
        // checagem para ver se estão passando os parametros
        throw Error('need two parameters: weight and height'); 
    }
    return peso / (altura * altura);
}

// função para receber o calculo do IMC e retornar uma string
function classificaIMC(imc){
    if(imc <= 16.9){
        return ' muito abaixo do peso';
    }else if(imc <= 18.4){
        return 'abaixo do peso';
    }else if(imc <= 24.9){
        return 'normal';
    }else if(imc <= 29.9){
        return 'acima do peso';
    }else if( imc <= 34.9){
        return 'obesidade 1';
    }else if(imc <= 40){
        return 'obesidade 2';
    }else{
        return 'obesidade 3';
    }
}


let imc = calcularIMC(50, 1.63);
console.log(imc); 
console.log(classificaIMC(imc));
~~~


<br>
<hr>
<br>

## Callbacks
<br>

- Funções de retorno, podemos passar funções como parametros para outras funções.

~~~

function teste(n){
    console.log('função teste', n + n);
}

teste(1);

function teste1(cb){
    console.log('função teste 1');
    console.log(cb);
    if(typeof cb === 'function'){
        cb();
    }else{
        throw Error('Precisa ser uma função');
    }
    console.log(cb);

}
// se temos uma função que recebe outra como parametro, temos que passar a função na chamada, ou por função anonima, ou criando uma função e passando seu nome.
teste1(function(){
    console.log('função anonima de callback');
});

function fn(){
    console.log('função declarada para callback');
}
teste1(fn);

// usando function expression

const teste2 = function(cb){
    console.log("função teste 2");
    console.log(cb);
    typeof cb === 'function' && cb(30); // curto circuito.
    console.log(cb);
}

// o que é armazenado dentro da constante [fn] é uma função e não o retorno da mesma. Isso significa que esse codigo não faz exatamente nada.
const fn1 = function(){
    console.log('function expression de callback')
}

// podemos tambem fazer com que nossa callback receba parametros.

const fn2 = function(p){
    console.log('function expression de callback with parameters',p);
}
// fn2(30);

teste2(fn2);


~~~

<br>
<hr>
<br>

## Resolução: Calcular IMC (com callbacks)

<br>

- IMC = peso / altura²
- Deve receber peso, altura e uma função de call-back opcional.
- Se não receber call-back, retornar o imc calculado.
- Se receber call-back, deve retornar o retorno do callback.
- Exemplos:

~~~
calcularIMC() // 0
calcularIMC(60, 1.65) // 22.03856749 
calcularIMC(60,1.65, classificaIMC) // "peso normal" 

~~~

<br>
<hr>
<br>