# SEÇÃO 19 - FUNÇÕES (PART 2)

<br>

## Introdução
<br>

![](./assets/cap1.png)

<br>
<hr>
<br>

## Arrow Functions
<br>

Vamos criar um novo arquivo chamado `arrow.js` para poder exemplificarmos a utilização de arrows functions.

- Geralmente escrevemos funções da seguinte maneira:

~~~
function teste(){
    console.log("function expression teste");
    return "fn expression";
}

const t1 = teste();
console.log(t1);

// SAIDA:

❯ node arrow.js
function expression teste
fn expression
~~~

- Poderiamos escrever a mesma função acima usando `arrow functions`.
- Para criarmos uma `arrow function` primeiramente precisarios criar uma variavel normalmente criamos usando o `const`.

~~~ 
function teste(){
    console.log("function expression teste");
    return "fn expression";
}

const t1 = teste();
console.log(t1);

const testeArrow = () => {
    console.log("arrow function testeArrow");
    return "arrow function expression";
}

const t2 = testeArrow();
console.log(t2);

// SAIDA:

❯ node arrow.js
function expression teste
fn expression
arrow function testeArrow
arrow function expression
~~~

- Passando parametros para as funções.

~~~ 
function teste(str){
    console.log("function expression teste ", str);
    return "fn expression";
}

const t1 = teste("parametro para function expression");
console.log(t1);

const testeArrow = (str) => {
    console.log("arrow function testeArrow ",str);
    return "arrow function expression";
}

const t2 = testeArrow("parametro para arrow function");
console.log(t2);

// SAIDA:

❯ node arrow.js
function expression teste  parametro para function expression
fn expression
arrow function testeArrow  parametro para arrow function
arrow function expression
~~~ 

- A grande novidade é que, se tivermos somente um `parametro` para ser passado para a `arrow function` não precisamos utilizar os parenteses.

~~~ 
function teste(str){
    console.log("function expression teste ", str);
    return "fn expression " + str;
}

const t1 = teste("parametro para function expression");
console.log(t1);

const testeArrow = str => {
    console.log("arrow function testeArrow ",str);
    return "arrow function expression - " + str;
}

const t2 = testeArrow("parametro para arrow function");
console.log(t2);

// SAIDA:

❯ node arrow.js
function expression teste  parametro para function expression
fn expression parametro para function expression
arrow function testeArrow  parametro para arrow function
arrow function expression - parametro para arrow function
~~~ 

- Outra questão é que se temos uma `arrow function` que so possui uma linha de codigo, ou seja, somente um `retorno`, podemos excluir as `chaves{}` e omitir a palavra `return`.

~~~ 
// funções com somente um retorno - não precisa das chaves

function teste(str){
    console.log("function expression teste " + str);
    return "fn expression " + str; 
}

const t1 = teste("parametro function expression");
console.log(t1);

const testeArrow = str => "arrow function - " + str;
const t2 = testeArrow("arrow function parametro");
console.log(t2);

// SAIDA:

❯ node arrow.js
function expression teste parametro function expression
fn expression parametro function expression
arrow function - arrow function parametro
~~~ 

- Agora se tivermos mais de um parametro na `arrow function`, temos que utilizar os parenteses.

~~~ 
// funções com 2+ parametros

function teste(str,n){
    console.log("function expression teste || " + str + " - " + n);
    return "fn expression " + str + n; 
}

const t1 = teste("parametro function expression", "10");
console.log(t1);

const testeArrow = (str, n) => "arrow function - " + str + n;
const t2 = testeArrow("arrow function parametro ", " 10");
console.log(t2);

// SAIDA:

❯ node arrow.js
function expression teste || parametro function expression - 10
fn expression parametro function expression10
arrow function - arrow function parametro  10

~~~ 


- Agora vamos fazer uma teste, no retorno da `arrow function` em vez de retornarmos uma `string` vamos retornar um objeto.

~~~ 
// retornando um objeto em vez de uma string

const testeArrow1 = () => {
    console.log("testeArrow1 chamado");
    return {
        foo: "bar"
    }
}

const t3 = testeArrow1();
console.log(typeof t3, t3);

// SAIDA:

❯ node arrow.js
function expression teste || parametro function expression - 10
string fn expression parametro function expression10
string arrow function - arrow function parametro  10
testeArrow1 chamado
object { foo: 'bar' }
~~~

- Temos tbm como acessar a propriedade do objeto que foi retornado da seguinte maneira:

~~~
// retornando um objeto em vez de uma string

const testeArrow1 = () => {
    console.log("testeArrow1 chamado");
    return {
        foo: "bar"
    }
}

const t3 = testeArrow1();
console.log(typeof t3, t3);
console.log(typeof t3, t3.foo); // sintaxe de ponto
console.log(typeof t3, t3["foo"]); // sintaxe de colchetes

// SAIDA:

❯ node arrow.js
function expression teste || parametro function expression - 10
string fn expression parametro function expression10
string arrow function - arrow function parametro  10
testeArrow1 chamado
object { foo: 'bar' }
object bar
object bar
~~~

- Vamos ver agora o que acontece se retirarmos o `console.log()` da `arrow function` que nos retorna um objeto...

~~~ 
// retornando um objeto em vez de uma string

const testeArrow1 = () => {
    return {
        foo: "bar"
    }
}

const t3 = testeArrow1();
console.log(typeof t3, t3);
console.log(typeof t3, t3.foo);
console.log(typeof t3, t3["foo"]);

// SAIDA:

❯ node arrow.js
object { foo: 'bar' }
object bar
object bar
~~~

- Na função que so temos um `retorno` tiramos as `chaves` e o `return`, vamos fazer a mesma coisa para a  `arrow function` que retorna um objeto para vermos o que acontece.

~~~
// retornando um objeto em vez de uma string

// const testeArrow1 = () => {
//     return {
//         foo: "bar"
//     }
// }

const testeArrow1 = () => {
    foo: "bar",
}

const t3 = testeArrow1();
console.log(typeof t3, t3);
console.log(typeof t3, t3.foo);
console.log(typeof t3, t3["foo"]);
~~~

- O codigo acima não irá funcionar pois queremos retornar um `objeto` porem as `chaves` estão sendo traduzidas pelo javascript como se fossem o `corpo da função` e não um `objeto`.
- Para que isso funcione, basta colocar as `chaves` e seu conteudo dentro de `parenteses` da seguinte maneira:

~~~
// retornando um objeto em vez de uma string

// const testeArrow1 = () => {
//     return {
//         foo: "bar"
//     }
// }

const testeArrow1 = () => ({
    foo: "bar",
})

const t3 = testeArrow1();
console.log(typeof t3, t3);
console.log(typeof t3, t3.foo);
console.log(typeof t3, t3["foo"]);

// SAIDA:

❯ node arrow.js
object { foo: 'bar' }
object bar
object bar
~~~

- Agora podemos ver que a `arrow function` voltou a funcionar e esta nos retornando um `objeto`.

Outro observação sobre as `arrows functions` é que elas não são `hosteadas`, por exemplo, no começo criamos uma `function expression` chamada `teste()`, se chamarmos essa função antes de sua criação, o codigo irá funcionar, porem o mesmo não acontece com as `arrows functions`.

- Ao chamar uma `arrow function` antes de sua criação temos um `erro`
  

~~~
// hosteando funções - chamando funções antes da declaração

console.log(teste());

function teste(){
    console.log("function expression teste");
    return "fn expression";
}

console.log(testeArrow);
const testeArrow = (str,n) => "fn arrow - " + str + " - " + n;

// SAIDA:
❯ node arrow.js
function expression teste
fn expression
/home/angelina/Documents/ESTUDOS/GitHub Repos/JavaScriptStudy/Udemy/Curso de JavaScript Completo do iniciante ao mestre (2022)/secao19/arrow.js:106
console.log(testeArrow);
~~~

<br>
<hr>
<br>


## Escopo léxico vs dinamico
<br>

<br>
<hr>
<br>


## Metodos de objetos
<br>

<br>
<hr>
<br>


## Apply vs call vs bind
<br>

<br>
<hr>
<br>


## Closures
<br>

<br>
<hr>
<br>


## Encadeamento de Metodos
<br>

<br>
<hr>
<br>


## Reveal Patern
<br>

<br>
<hr>
<br>


## Factories Functions
<br>

<br>
<hr>
<br>


## Iniciando com Getters
<br>

<br>
<hr>
<br>


## COnstructor
<br>

<br>
<hr>
<br>


## rest operator
<br>

<br>
<hr>
<br>

