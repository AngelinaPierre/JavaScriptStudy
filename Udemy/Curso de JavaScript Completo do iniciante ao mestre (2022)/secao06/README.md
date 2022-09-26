# Seção 06 - ARRAYS 
<br>

## every(), some(), forEach(), filter() e map()
<br>
Arrays são estruturas onde podemos armazenar dados no javascript. Logo em vez de termos somente 1 valor em uma variavel, com arrays podemos ter mais de um valor em uma mesma variavel.

No javascript temos alguns metodos de objetos do tipo `Array`.

### Sintaxes Literais vs Construtores

Lembrando que temos duas sintaxes para a criação de arrays:

~~~
[sintaxe literal]
const arr = []

[sintaxe Construtores - objeto]
const arr = new Array()
~~~

### Alguns Metodos

~~~
arr.every()
   .some()
   .forEach()
   .map()
   .filter()
~~~

Vamos criar um arquivo dentro do nosso novo diretorio para os exemplos de array, um novo arquivo chamado `array01.js`. Vamos usar mais agora o terminal do vscode.

- Vamos criar uma array(sintaxe literal) para poder fazermos alguns exemplos.

~~~
const arr = [1, 5, 10, "olá", true];
~~~

- A primeira coisa que iremos ver, são as funções `some()` e `every()` .
- Essas duas instruções servem para verificar alguma validação nos dados desta `array`
- Vamos criar uma nova variavel chamada `sohNumeros` e atribuir a ela o array `arr` mais o metodo `.every()`. 
- Esse metodo irá fazer uma verificação em cada elemento do array e retornar verdadeiro(true), se o codigo que passarmos dentro do parenteses (no caso vamos passar uma function()), for verdadeiro.

~~~
// criandoa array
const arr = [1, 5, 10, "olá", true];

let sohNumeros = arr.every(
    function(){
        return true;
    }
)

console.log(sohNumeros);

// SAIDA: true
~~~ 

- A função `every()` irá retornar true, se ao executar uma função em todos os elementos do array, o retorno de todos for true;
- Como fizemos a função dentro do `every()` sempre retornar true, o retorno será true.
- Vamos ver outro caso, vamos fazer criar uma verificação para ver se cada elemento do array é um numero.
- Dentro da função anonima, vamos passar um parametro (el = elemento), e criar um console.log(el), para vermos a saida e vamos manter o retorno true da função anonima.
- O elemento `el` que passamos como parametro serve para verificarmos que a função será executada para cada um dos elementos do `array`.

~~~ 

// criandoa array
const arr = [1, 5, 10, "olá", true];

let sohNumeros = arr.every(
    function(el){ // el = elemento
        console.log(el);
        return true;
    }
)

console.log(sohNumeros);

// SAIDA:
❯ node array01.js
1
5
10
olá
true
~~~

- Vamos alterar o codigo para fazer uma verificação caso cada elemento do array é igual a um number.

~~~ 
const arr = [1, 5, 10, "olá", true];

let sohNumeros = arr.every(
    function(el){ // el = elemento
        console.log(el);
        return typeof el === "number";
    }
)

console.log(sohNumeros);

// SAIDA:
❯ node array01.js
1
5
10
olá
false

~~~ 

- A partir da 4 interação, temos uma string, logo, a função `every()` irá retornar falso, pois todos os elementos precisariam ser number para retornar true.

Para a função `some()` o oposto é valido, ou seja, se tivermos pelo menos um numero dentro do array, a função irá retornar verdadeiro (`true`).

~~~
❯ node array01.js
1
5
10
olá
1

false

true
~~~

- Agora usando o `some()`  vamos verificar se os numeros são numeros e maiores que `20`.
- Sabemos que não temos nenhum numero mais do que 20, logo todas as interações do nosso array será falso.

~~~

let sohNumeros1 = arr.some(
    function(el){ // el = elemento
        console.log(el);
        // return typeof el === "number";
        return typeof el === "number" && el > 20;

    }
)
~~~

O proximo metodo que iremos ver é o `.filter()`  que é utilizado quando queremos filtrar um array.

- Queremos um array apenas com os elementos que são numeros, ou seja, descartar qualquer outro elemento que não seja um numero. Ou seja, iremos fazer um filtro desse array.
- O `.filter()` tbm recebe uma `função anonima` igual as outras que ja vimos. Essa função anonima pode receber 3 parametros, o `elemento`, o `indice` e o proprio `array`.
- Não confunda o `array`  parametro, com o `array`  de variavel que criamos acima.
- Primeiro vamos observar no console.log() o que seria cada `el`.

~~~
arr.filter(function(el, i, _arr){
    console.log(el);
    console.log(i);
    console.log(_arr);
    return true;
})

// SAIDA:
1
0
[ 1, 5, 10, 'olá', true ]
5
1
[ 1, 5, 10, 'olá', true ]
10
2
[ 1, 5, 10, 'olá', true ]
olá
3
[ 1, 5, 10, 'olá', true ]
true
4
[ 1, 5, 10, 'olá', true ]
~~~

- O primeiro ponto que podemos verificar é que ao utilizar o `.filter()` nossa array original não será alterada.
- Esse metodo irá retornar um novo array, não podemos ver isso no codigo acima pois o mesmo não esta sendo salvo em nenhuma variavel.
- Para verficiarmos isso, basta criarmos uma variavel que receba o `arr.filter()`

~~~
const arr1 = arr.filter(function(el, i, _arr){
    return true;
})

console.log(arr);
console.log(arr1);

// SAIDA: 
❯ node array01.js
[ 1, 5, 10, 'olá', true ]
[ 1, 5, 10, 'olá', true ]

// saida para return false
❯ node array01.js
[ 1, 5, 10, 'olá', true ]
[]
~~~

- Vejam que nossa nova array `arr1` tem uma saida vazia no console.log() pois ao chamar o metodo `.filter()` o return esta como falso.
- Se quisermos retornar somente os numeros, temos que fazer com que a função retorne `true` para os elementos que são numeros do array `arr`.Ou seja, os elementos que retornarem `true` serão incluidos no novo array gerado pelo `.filter()`, e o array original permanecerá intacto.

~~~
const arr1 = arr.filter(function(el, i, _arr){
    // console.log(el);
    // console.log(i);
    // console.log(_arr);
    return typeof el === "number";
})

console.log(arr);
console.log(arr1);

// SAIDA:
❯ node array01.js
[ 1, 5, 10, 'olá', true ]
[ 1, 5, 10 ]
~~~

- O proximo metodo que iremos observar será o `.forEach()`. Igual ao `.filter()` não irá alterar o array original, na verdade esse metodo nem valor de retorno possui, sendo assim sempre irá retornar `undefined`.
- Esse metodo tbm pode receber parametros como o metodo `.filter()`.

~~~ 
const arr1 = arr.filter(function(el, i, _arr){
    // console.log(el);
    // console.log(i);
    // console.log(_arr);
    return typeof el === "number";
})

const arr2 = arr.forEach(function(el, i, _arr){
    console.log(el);
})

console.log(arr);
console.log(arr1);
console.log(arr2);

// SAIDA:
[ 1, 5, 10, 'olá', true ]
[ 1, 5, 10 ]
undefined
~~~ 

- Sempre que usarmos o metodo `.forEach()`, nao vamos precisar criar uma constante para salvar o retorno do metodo pois o mesmo retorna `undefined`.
- Esse metodo é usado quando queremos fazer algum tipo de interação dentro do nosso `array=arr`, em vez de usar os loops `for() ou while()`.

~~~
const arr2 = arr.forEach(function(el, i, _arr){
    console.log(el,i);
})

// SAIDA:
1 0
5 1
10 2
olá 3
true 4
~~~

- Se quisermos que o `.forEach()` tenha o mesmo efeito do `.filter()` poderiamos criar uma array nova atribuindo a ela o valor de vazio, e dentro do `.forEach()`, fazemos uma verificação para ver se o array1 possui numeros, e caso possua, adicionamos ao novo array com metodos que ainda não vimos...

~~~ 
const arr2 = []
arr.forEach(function(el, i, _arr){
    if(typeof el === "number"){
        // metodo de add no array2
    }
})
~~~

Agora iremos ver o proximo metodo, chamado de `.map()`. Esse metodo irá retornar uma  `nova array`  com os dados transformados.

- Primeiro vamos testar o codigo, da mesma maneira que fizemos com os outros metodos.
- Vamos usar o `arr1` que so possui numeros, e vamos executar o metodo `.map()` nesse array passando uma function de callback, essa função tambem pode receber `elementos, indice, array`.
- Para cada numero vamos retornar o numero multiplicado por ele mesmo.

~~~
arr1.map(function(el, i, _arr){
    return el * el;
}) 

console.log(arr);
console.log(arr1);
~~~

- Se executarmos esse codigo, iremos ver que nosso `arr1` continua com os numeros sem alteração nenhuma.
- Porem diferente do `.forEach()` o `.map()` retornou um novo array, so que no codigo acima não salvamos em lugar nenhum esse retorno.
- Logo precisamos criar uma variavel para receber esse retorno e depois printar essa variavel na tela.

~~~
arr1 = arr1.map(function(el, i, _arr){
    return el * el;
})
console.log(arr);
console.log(arr1);

// SAIDA:
[ 1, 5, 10, 'olá', true ]
[ 1, 25, 100 ]
~~~

- Esse codigo agora irá sobrescrever os valores iniciais do `arr1` no proprio `arr1`, poderiamos criar uma outra variavel para que o array de origem não fosse alterado.
- Para o `array1` não ser alterado, vamos criar uma nova variavel para receber o retorno do `.map()`.

~~~

let arr3 = arr1.map(function(el, i, _arr){
    return el * el;
})

console.log(arr);
console.log(arr1);
console.log(arr3);

// SAIDA:
[ 1, 5, 10, 'olá', true ]
[ 1, 5, 10 ]
[ 1, 25, 100 ]

~~~

<br>
<hr>
<br>

## indexOf(), lastIndexOf(), includes(), find(), findIndex()
<br>

Existe um site que mostra os metodos que podemos utilizar baseado no tipo de browser. `caniuse.com`.

Vamos criar um documento novo chamado `array2.js` para exemplificarmos melhor esses metodos. Dentro desse documento, vamos criar algumas arrays...

- Vamos ver primeiro os metodos `.indexOf()` e `.lastIndexOf()`. Esses metodos irão retornar o valor do indice de um elemento encontrado.
- No caso do `.indexOf()` ele retorna o valor do indice do primeiro valor encontrado. 

~~~
let arr = [4,5,10,20,35,4,5];

console.log(arr.indexOf(5));

// SAIDA:
1 
~~~

- Ja o `.lastIndexOf()` irá nos retornar o valor do ultimo elemento encontrado.

~~~
let arr = [4,5,10,20,35,4,5];

console.log(arr.lastIndexOf(5));

// SAIDA:
6
~~~

Os proximos metodos que iremos ver serão o `.includes()`, `.find()` e `.findIndex()`.

- O `.includes()` irá retornar `true` ou `false` se o valor procurado for encontrado.
- Antes de mostrar, vamos ver o que é retornado pelo `.indexOf()` se procurarmos um valor que não existe dentro do array. Ele irá retornar um valor de `-1` quando não encontrar o valor que procuramos. A mesma coisa acontece com o `.lastIndexOf()`.
- Ja o `.includes()` retorna um valor booleano se encontrar ou não o valor.

~~~

let arr = [4,5,10,20,35,4,5];

console.log(arr.includes(5));
console.log(arr.includes(555));

// SAIDA:
true
false

~~~

- Para simular o `.indexOf()`  como o includes, basta fazermos uma checagem para no caso do valor ser maior que `-1`

~~~
console.log(arr.indexOf(5) > -1);

// SAIDA:
true
~~~

Vamos ver agora o `.find()` e o `.findIndex()`.

- No find, vamos colocar uma função de callback e ele irá retornar o primeiro valor encontrado que satisfaça a função de callback que iremos escrever.
- Por exemplo, queremos encontrar o primeiro valor cujo o elemento seja maior do que 10.
- Precisamos passar na função de callback uma propriedade que ira representar os elementos do array.

~~~
console.log(arr.find(function(el){
    return el > 10;
}))

// SAIDA:
20
~~~

- Agora iremso ver o `.findIndex()`, que igualmente ao metodo `.find()` recebe uma função de callback, e retorna o indice que satisfaça a função de callback, ou seja, se usarmos a mesma verificação do `.find()` (maior que 10), ele irá retornar o indice do elemento que satisfaça a verificação.

~~~
console.log(arr.findIndex(function(el){
    return el > 10;
}))

// SAIDA:
3
~~~

<br>
<hr>
<br>

## concat(), join(), toString()
<br>

Vamos criar um novo arquivo para exemplificar melhor esses metodos. Dentro dele iremos criar dois arrays.

~~~
let arr1 = [1,2,3];
let arr2 = [5,6,7]; 
~~~

- O primeiro metodo que iremos ver será o `.toString()`, esse metodo irá mostrar uma representação em string do array.
- Se fizermos o `typeof` irá nos mostrar o valor em `string` e não em `array`.

~~~
let arr1 = [1,2,3];
let arr2 = [5,6,7];

console.log(arr1.toString());
console.log(typeof arr1.toString());


// SAIDA:
❯ node array03.js
1,2,3
~~~ 

- O metodo `.join()` é bastante parecido com o `.toString()` com uma pequena diferença. Ele tbm retorna uma string, com a diferença que o `.join()` pode receber um parametro opcional, que será o caracter utilizado para separar os valores.

~~~
let arr1 = [1,2,3];
let arr2 = [5,6,7];

console.log(arr1.toString());
console.log(typeof arr1.toString());


console.log(arr1.join());
console.log(typeof arr1.join());
console.log(arr1.join(" - "));

// SAIDA:
❯ node array03.js
1,2,3
string
1,2,3
string
1 - 2 - 3
~~~

- Outro medoto que iremos ver será o `.concat()`  que serve para que a gente possa fazer a junção de arrays.
- Vamos criar um novo array3 para receber a concateção do array1 com o array2.

~~~
let arr1 = [1,2,3];
let arr2 = [5,6,7];

console.log(arr1.toString());
console.log(typeof arr1.toString());


console.log(arr1.join());
console.log(typeof arr1.join());
console.log(arr1.join(" - "));

let arr3 = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);


// SAIDA:

❯ node array03.js
1,2,3
string
1,2,3
string
1 - 2 - 3
[ 1, 2, 3 ]
[ 5, 6, 7 ]
[ 1, 2, 3, 5, 6, 7 ]
~~~

- Usando o `.concat()`, podemos tbm acrescentar valores a mais, ou seja, valores que não existem nos outros arrays mas que serão adicionados ao novo valor.

~~~
let arr1 = [1,2,3];
let arr2 = [5,6,7];

console.log(arr1.toString());
console.log(typeof arr1.toString());


console.log(arr1.join());
console.log(typeof arr1.join());
console.log(arr1.join(" - "));

let arr3 = arr1.concat(arr2, 4, 89, 9, 10);

console.log(arr1);
console.log(arr2);
console.log(arr3);

// SAIDA:
❯ node array03.js
1,2,3
string
1,2,3
string
1 - 2 - 3
[ 1, 2, 3 ]
[ 5, 6, 7 ]
[
  1, 2,  3, 5,  6,
  7, 4, 89, 9, 10
]
~~~

- Alem de valores, podemos tbm passar um outro array...

~~~
let arr1 = [1,2,3];
let arr2 = [5,6,7];

console.log(arr1.toString());
console.log(typeof arr1.toString());


console.log(arr1.join());
console.log(typeof arr1.join());
console.log(arr1.join(" - "));

let arr3 = arr1.concat(arr2, 4, 89, 9, 10, ["ola", "mundo"]);

console.log(arr1);
console.log(arr2);
console.log(arr3);

// SAIDA:
❯ node array03.js
1,2,3
string
1,2,3
string
1 - 2 - 3
[ 1, 2, 3 ]
[ 5, 6, 7 ]
[
  1,  2,     3,
  5,  6,     7,
  4,  89,    9,
  10, 'ola', 'mundo'
]
~~~ 

- Antigamente quando queriamos criar um clone do array, usavamos o metodo `.concat()`, porem hoje em dia temos outros metodos para isso.
- Vamos ver como funcionaria com o `.concat()`. Vamos criar um outro documento `array04.js` para exemplificar melhor.

~~~
let arr1 = ["a", "b", "c"];
let arr2 = arr1;
~~~

- Sabemos que quando estamos fazendo esse tipo de atribuição, não estamos `clonando` os valores e sim criando duas variaveis que apontam para o mesmo objeto.
-  Logo se atribuirmos um novo valor ao `arr2` a mudança será tbm refletida no `arr1`

~~~
let arr1 = ["a", "b", "c"];
let arr2 = arr1;

arr2[arr2.length] = "novo valor";

console.log(arr1);
console.log(arr2);

// SAIDA:

❯ node array04.js
[ 'a', 'b', 'c', 'novo valor' ]
[ 'a', 'b', 'c', 'novo valor' ]
~~~

- Se quisermos que o `arr2` não aponte para o `arr1` mas sim que crie uma `copia` desse array, para podermos depois trabalhar com ele fazemos da seguinte maneira...
- Criamos uma array vazia `[]` usamos o `.concat()` e passamos o `arr1`  como parametro.

~~~
let arr1 = ["a", "b", "c"];
// let arr2 = arr1;
let arr2 = [].concat(arr1);

arr2[arr2.length] = "novo valor";

console.log(arr1);
console.log(arr2);

// SAIDA:
❯ node array04.js
[ 'a', 'b', 'c' ]
[ 'a', 'b', 'c', 'novo valor' ]
~~~

<br>
<hr>
<br>

## push(), pop(), shift(), unshift(), slice(), splice()
<br>

Vamos criar um novo documento para poder exemplificar melhor esses metodos.

- Vamos criar uma array para vermos como funciona o metodo `.push()`.
- Esse metodo serve para acrescentarmos valores no fim de um array.
- Nesse metodo podemos passar mais de um parametro ao mesmo tempo, e com tipos diferentes.

~~~ 
let arr = [1,3,5,7,9];

console.log(arr);

arr.push(11,13, true, "ola mundo");

console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]

~~~ 

- O retorno do metodo push nos retorna o indice que o array se encontra apos a inserção dos novos valores.
- Logo o metodo push irá alterar o array original e retornar o novo indice desse array.

~~~
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
~~~

- Vamos agora ver o metodo `pop()`. Esse metodo irá remover o ultimo elemento do array, e retorna o elemento que foi removido, modificando tambem o array original.

~~~
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

let ultimoItem = arr.pop();
console.log(ultimoItem);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[
  1, 3,  5,  7,
  9, 11, 13, true
]
~~~

- Esse metodo altera nossa array original, porem se precisarmos por algum motivo, capturar o ultimo item de um array, sem destruir o array original, podemos utilizar outros metodos, podemos fazer um clone do nossa array usando o metodo `.concat()`, ou buscamos pelo indice.
- Vamos observar como seria feita pelo indice. Pegamos o ultimo elemento sem alterar o array.

~~~
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
~~~

Os proximos metodos que iremos observar serão o `.shift()` e o `.unshift()`.

- O metodo `.shift()` é muito parecido com o metodo `.pop()`, porem em vez de pegar o ultimo elemento do array, ele pega o `primeiro`.

~~~
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

let primeiroItem  = arr.shift();
console.log(primeiroItem);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
1
[ 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
~~~

- Podemos ver que o primeiro elemento era o numero `1`, mas depois da execução do metodo `.shif()` o elemento foi removido do nosso array original.
- Usamos o mesmo principio que utilizamos acima para pegar o primeiro elemento sem modificar o array orignal.

Ja o metodo `.unshift()` é muito parecido com o metodo `.push()` porem ao invez de incluir no final do array, o elemento será incluido no `começo`.

- Esse metodo retorna o indice

~~~

let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

let primeiroItem  = arr.shift();
console.log(primeiroItem);
console.log(arr);

teste = arr.unshift(4,5,6);
console.log(teste);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
1
[ 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
11
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
~~~

Os dois ultimos metodos que iremos ver agora são os `.slice()` e o `.splice()`.

- Servem para quando queremos "recortar" um pedaço do array.
- Vamos observar como utilizar o metodo `.slice()`. 
- O proprio visual studio nos da indicações sobre como utilizar o metodo. Temos o `start:numero` e o `end:numero` que precisam ser passados como parametro.
- Por exemplo, queremos fazer um recorte no array a partir do indice `2` ate o `4`.
- Vejam que o elemento de indice `4` não é incluido no novo array quando usamos esse metodo. Alem disso podemos observar que o metodo não altera o array original.

~~~ 
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

let primeiroItem  = arr.shift();
console.log(primeiroItem);
console.log(arr);

teste = arr.unshift(4,5,6);
console.log(teste);
console.log(arr);

let arr2 = arr.slice(2,4);
console.log(arr2);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
1
[ 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
11
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 6, 3 ]
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
~~~ 

- Podemos tambem usar esse metodo sem estabelecer o indice de final

~~~ 
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

let primeiroItem  = arr.shift();
console.log(primeiroItem);
console.log(arr);

teste = arr.unshift(4,5,6);
console.log(teste);
console.log(arr);

let arr2 = arr.slice(5);
console.log(arr2);
console.log(arr);

// SAIDA:

❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
1
[ 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
11
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 7, 9, 11, 13, true, 'ola mundo' ]
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
~~~ 

- O metodo de `splice()` serve tanto para `remover` elementos quanto para `adicionar` elementos, em qualquer posição.
- Temos que tomar cuidado com ele pois ele tbm modifica o array original.
- Ele recebe alguns parametros, o primeiro deles é o `start/inicio` a partir de qual elemento queremos modificar, no caso será o `2`.

~~~
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

let primeiroItem  = arr.shift();
console.log(primeiroItem);
console.log(arr);

teste = arr.unshift(4,5,6);
console.log(teste);
console.log(arr);

let arr2 = arr.slice(5);
console.log(arr2);
console.log(arr);

let arr3 = arr.splice(2);
console.log(arr3);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
1
[ 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
11
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 7, 9, 11, 13, true, 'ola mundo' ]
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 4, 5 ]
~~~

- O metodo `splice()` irá retornar os elementos removidos do array original.
- COmo não passamos no parametro a quantidade de elementos que queremos remover do array original, o metodo, a partir do indice `2` removeu e adicionou no `arr3` todos os elementos depois desse indice. 
- Ele modificou o `array orig` e retornou os elementos removidos.
- Vamos agora dar como parametro a quantidade de elementos que queremos remover a partir do indice `2`.

~~~
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

let primeiroItem  = arr.shift();
console.log(primeiroItem);
console.log(arr);

teste = arr.unshift(4,5,6);
console.log(teste);
console.log(arr);

let arr2 = arr.slice(5);
console.log(arr2);
console.log(arr);

let arr3 = arr.splice(2,4);
console.log(arr3);
console.log(arr);

// SAIDA:

❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
1
[ 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
11
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 7, 9, 11, 13, true, 'ola mundo' ]
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 6, 3, 5, 7 ]
[ 4, 5, 9, 11, 13, true, 'ola mundo' ]
~~~ 

- Podemos tbm passar um terceiro parametro, que seria os elementos que queremos adicionar ao utilizar o metodo, no caso vamos add uma string.

~~~
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

let primeiroItem  = arr.shift();
console.log(primeiroItem);
console.log(arr);

teste = arr.unshift(4,5,6);
console.log(teste);
console.log(arr);

let arr2 = arr.slice(5);
console.log(arr2);
console.log(arr);

let arr3 = arr.splice(2,4,"ola mundo");
console.log(arr3);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
1
[ 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
11
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 7, 9, 11, 13, true, 'ola mundo' ]
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 6, 3, 5, 7 ]
[ 4, 5, 'ola mundo', 9, 11, 13, true, 'ola mundo' ]
~~~ 

- Para colocar mais valores, basta ir adicionando ao metodo.

~~~
let arr = [1,3,5,7,9];

console.log(arr);

let teste = arr.push(11,13, true, "ola mundo");
console.log(teste);
console.log(arr);

// let ultimoItem = arr.pop();
let ultimoItem = arr[arr.length - 1];
console.log(ultimoItem);
console.log(arr);

let primeiroItem  = arr.shift();
console.log(primeiroItem);
console.log(arr);

teste = arr.unshift(4,5,6);
console.log(teste);
console.log(arr);

let arr2 = arr.slice(5);
console.log(arr2);
console.log(arr);

let arr3 = arr.splice(2,4,"ola mundo", 10, 100,1000);
console.log(arr3);
console.log(arr);

// SAIDA:
❯ node array05.js
[ 1, 3, 5, 7, 9 ]
9
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
ola mundo
[ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
1
[ 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
11
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 7, 9, 11, 13, true, 'ola mundo' ]
[ 4, 5, 6, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
[ 6, 3, 5, 7 ]
[ 4, 5, 'ola mundo', 10, 100, 1000, 9, 11, 13, true, 'ola mundo' ]
~~~

<br>
<hr>
<br>

## reverse(), reduce() + Desafio
<br>

Vamos criar um novo documento para exemplificarmos melhor como utiliza-se esses metodos.

- O primeiro metodo que iremos ver será o `.reverse()`, que como o nome ja nos diz, inverte a ordem dos arrays.
- Temos que tomar cuidado com esse metodo pois ele irá alterar o array original.

~~~
let arr = [1,2,3]; 

console.log(arr.reverse());
console.log(arr);

// SAIDA:

❯ node array06.js
[ 3, 2, 1 ]
[ 3, 2, 1 ]
~~~

- Ja o metodo `.reduce()` irá fazer uma iteração em cada elemento do array, o objetivo do `.reduce()` é ser utilizado quando queremos retornar somente um elemento do array.
- Para entendermos vamos fazer um exemplo simples, onde pegamos um array de numeros e retornamos a soma desses valores.
- Esse metodo recebe uma função de callback que possui a logica para retornar somente um valor.
- Essa função de callback pode receber `4 parametros`.
  - Acumulador
  - valor_atual
- O retorno da função de callback é o que será realizado em cada iteração/loop em cima desse array.
- Se retornarmos simplesmente o `acumulador` mais o `valor_atual`, na primeira iteração, tenha em mente que o `acumulador = primeiro indice = 1` e o `valor_atual = 2`, isso na `primeira iteração`.
- Na `segunda iteração` o `acumulador = retorno primeira iteração = 3` e o `valor_atual = 3`;
- Logo, o que será armazenado dentro da variavel de `soma` será o valor `6`.  

~~~
let arr = [1,2,3]; 

console.log(arr.reverse());
console.log(arr);

let soma = arr.reduce(function(acumulador, valor_atual){
    return acumulador + valor_atual;
});
console.log(arr);
console.log(soma);

// SAIDA:

❯ node array06.js
[ 3, 2, 1 ]
[ 3, 2, 1 ]
[ 3, 2, 1 ]
6
~~~

- Essa função de callback do `.reduce()` pode receber mais dois parametros que são `opcionais`.
  - Indice
  - Array original.
- Se observamos no console.log() esse valores, vemos que o metodo passou no loop 3x, mesmo tendo 4 elementos dentro do array. Isso acontece pq na primeira vez o `acumulador` e o `valor_atual` ja tinham valores.

~~~
let arr = [1,2,3,4]; 

// console.log(arr.reverse());
// console.log(arr);

let j = 0;
let soma = arr.reduce(function(acumulador, valor_atual, i, _arr){
    console.log("i: " + i + " j: " + j + " acumulador: " + acumulador + " valor_atual: " + valor_atual);
    console.log(_arr);
    return acumulador + valor_atual;
});
console.log(arr);
console.log(soma);

// SAIDA:

❯ node array06.js
i: 1 j: 0 acumulador: 1 valor_atual: 2
[ 1, 2, 3, 4 ]
i: 2 j: 0 acumulador: 3 valor_atual: 3
[ 1, 2, 3, 4 ]
i: 3 j: 0 acumulador: 6 valor_atual: 4
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
10
~~~

- Observe que podemos colocar um segundo parametro dentro do `reduce()`, o primeiro sendo a função de callback, e o segundo sendo o `valor inicial`, quando não passamos, o `acumulador` e o `valor_atual` pega os 2 primeiros elementos do array.
- Se passarmos como segundo parametro do `.reduce()`  o valor de `0` quem irá receber esse valor será o acumulador, e o `valor_atual` irá receber o numero `1`.

~~~
let arr = [1,2,3,4]; 

// console.log(arr.reverse());
// console.log(arr);

let j = 0;
let soma = arr.reduce(function(acumulador, valor_atual, i, _arr){
    console.log("i: " + i + " j: " + j + " acumulador: " + acumulador + " valor_atual: " + valor_atual);
    console.log(_arr);
    return acumulador + valor_atual;
}, 0);
console.log(arr);
console.log(soma);

// SAIDA:

❯ node array06.js
i: 0 j: 0 acumulador: 0 valor_atual: 1
[ 1, 2, 3, 4 ]
i: 1 j: 0 acumulador: 1 valor_atual: 2
[ 1, 2, 3, 4 ]
i: 2 j: 0 acumulador: 3 valor_atual: 3
[ 1, 2, 3, 4 ]
i: 3 j: 0 acumulador: 6 valor_atual: 4
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
10
~~~

- Percebam que ao adicionarmos o `valor_inicial` a quantidade de iterações/loops, se tornou a quantidade de elementos do array.
- Podemos passar nesse `valor_inicial` qualquer coisa, um numero, um array vazio, um objeto ou uma string ate mesmo.
- Vamos ver o que acontece quando passamos uma string, no caso, o acumulador na primeira iteração será uma string que irá concatenar com o numero do `valor_atual = 1`. 
- Nesse caso, em vez de somar, ou seja, o retorno ser um numero, teremos como retorno uma grande string com todos os numeros do array.

~~~
let arr = [1,2,3,4]; 

// console.log(arr.reverse());
// console.log(arr);

let j = 0;
let soma = arr.reduce(function(acumulador, valor_atual, i, _arr){
    console.log("i: " + i + " j: " + j + " acumulador: " + acumulador + " valor_atual: " + valor_atual);
    console.log(_arr);
    return acumulador + valor_atual;
}, "");
console.log(arr);
console.log(soma);

// SAIDA:

❯ node array06.js
i: 0 j: 0 acumulador:  valor_atual: 1
[ 1, 2, 3, 4 ]
i: 1 j: 0 acumulador: 1 valor_atual: 2
[ 1, 2, 3, 4 ]
i: 2 j: 0 acumulador: 12 valor_atual: 3
[ 1, 2, 3, 4 ]
i: 3 j: 0 acumulador: 123 valor_atual: 4
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
1234
~~~

- Vamos ver outro exemplo, imagine agora que temos um array de nomes.
- E queremos retornar usando o metodo `.reduce()` um objeto da seguinte maneira.
  - Nomes que comecem com a letra `d` (como se fosse um contador)
  - Nomes que comecem com a letra `M`

~~~
contatos = {
    "D": 1,
    "M": 1,
    "J": 2,
} 
~~~

- Vamos ver como poderiamos reproduzir esse retorno acima usando o metodo `.reduce()`.
- Criamos um variavel `nomesPorOrdem` para receber o retorno do metodo. Dentro do metodo, passamos a função de callback com os parametros, e como `valor_inicial` do `.reduce()`, passamos sempre, o tipo de dado que queremos receber, no caso, um objeto.
- Como parametros da função de callback iremos passar `acumulador = nomes` e `valor_atual = nomeAtual`.
- Como queremos pegar a primeira letra do nome, vamos criar uma variavel para isso dentro da função.
- Depois faremos uma verificação para ver se dentro do objeto `nomes` existe uma propriedade `nomes[primeiraLetra]`, que no caso é o `D`  maiusculo.
  - Caso exista `nomes.D`, queremos somar mais 1, ou seja,`nomes.D++`
  - Caso não existe `nomes.D = 1`, pois ja encontrou.
- No final, o retorno será o objeto `nomes`. 

~~~
const nomes = ["Daniel", "Maria", "Joana", "João"];
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual,i,_arr){
    console.log("i: " + i + " j: " + j + " nomes: " + nomes + " nomeAtual: " + nomeAtual);
    let primeiraLetra = nomeAtual[0]; // pegando a primeira letra do nome
    console.log("Letra: "+primeiraLetra);
    if(nomes[primeiraLetra]){
        console.log("Entrando no if");
        nomes[primeiraLetra]++;
    }else{
        console.log("Entrando no else");
        nomes[primeiraLetra] = 1;
    }
    console.log("nomes[primeiraletra] = " + nomes[primeiraLetra] + "\n");
    return nomes
}, {});

console.log(nomesPorOrdem)



// SAIDA:

❯ node array06.js
i: 0 j: 0 nomes: [object Object] nomeAtual: Daniel
Letra: D
Entrando no else
nomes[primeiraletra] = 1

i: 1 j: 0 nomes: [object Object] nomeAtual: Maria
Letra: M
Entrando no else
nomes[primeiraletra] = 1

i: 2 j: 0 nomes: [object Object] nomeAtual: Joana
Letra: J
Entrando no else
nomes[primeiraletra] = 1

i: 3 j: 0 nomes: [object Object] nomeAtual: João
Letra: J
Entrando no if
nomes[primeiraletra] = 2

{ D: 1, M: 1, J: 2 }
~~~


- Na primeira interação `nomes` é um objeto vazio e `nomeAtual = Daniel`.
- Pegamos a primeira letra do nome que esta na variavel `nomeAtual`, no caso `D`.
- Na verificação, se o objeto `nomes` possui a propriedade `d` (nomes[primeiraLetra]), adicionamos +1, caso não tenha, damos ao objeto a propriedade `D = 1`.
- Na segunda interação, o nosso objeto `nomes` possui o retorno da primeira iteração, ou seja, `nomes = {D: 1}` e `nomeAtual` irá receber o segundo valor do array, no caso `Maria`. E assim por diante.

~~~ 
[Iteração 1]
nomes = {}
nomeAtual = "Daniel" -> primeiraLetra = nomeAtual[0] = "D"
return {D: 1}

[Iteração 2]
nomes = {D: 1}
nomeAtual = "Maria" -> primeiraLetra = nomeAtual[0] = "M"
return {D: 1, M: 1}

[Iteração 3]
nomes = {D: 1, M: 1}
nomeAtual = "Joana" -> primeiraLetra = nomeAtual[0] = "J"
return {D: 1, M: 1, J: 1}

[Iteração 4]
nomes = {D: 1, M: 1, J: 1}
nomeAtual = "João" -> primeiraLetra = nomeAtual[0] = "J"
return {D: 1, M: 1, J: 2}
~~~ 


### Desafio

Vamos ter um array somente de numeros, e ao invez de retornar um objeto, usando o metodo `.reduce()` temos que retornar um array com numeros unicos. Ou seja, sem repetições.

- Exemplo de array e o retorno do `.reduce()`

~~~ 
const numeros = [1,3,4,1,4,5,3,5,8,9];
const numerosUnicos = [1,3,4,5,8,9];
~~~


<br>
<hr>
<br>

## Resolução: Desafio
<br>

Vamos criar um novo arquivo `reduce-desafio.js` para podermos resolver esse exercicio.

- Como queremos um array de retorno, como segundo parametro do `.reduce()` passamos um array vazio.
- Dentro da função de callback, os dois parametros que precisamos passar seriam do `acumulador` e o do `valor atual`. O valor do acumulador será o valor de retorno.
- Dentro do corpo da função, precisamos verificar se no nosso novo array, no caso `numUnicos`, possui o elemento ou nao o lemento que se encontra no `numAtual`.
  - No if, chamamos o metodo `indexOf()` para sabermos ate que indice o array esta, e caso seja menor que zero `< 0` significa que não foi encontrado. Logo adicionamos com o metodo `.push()`

~~~
const numeros = [1,3,4,1,4,5,3,5,8,9]; // return -> [1,3,4,5,8,9]

let j = 0;
const numerosUnicos = numeros.reduce(function(numUnicos, numAtual, i, _arr){
    console.log("i: " + i + " j: " + j + " numUnicos: " + numUnicos + " numAtual: " + numAtual + " Array: " + _arr + "\n");
    if(numUnicos.indexOf(numAtual) < 0 ){
        // não encontrado o numero no array
        numUnicos.push(numAtual);
    }
    return numUnicos;
}, []);

console.log(numerosUnicos);

// SAIDA:

❯ node reduce-desafio.js
i: 0 j: 0 numUnicos:  numAtual: 1 Array: 1,3,4,1,4,5,3,5,8,9

i: 1 j: 0 numUnicos: 1 numAtual: 3 Array: 1,3,4,1,4,5,3,5,8,9

i: 2 j: 0 numUnicos: 1,3 numAtual: 4 Array: 1,3,4,1,4,5,3,5,8,9

i: 3 j: 0 numUnicos: 1,3,4 numAtual: 1 Array: 1,3,4,1,4,5,3,5,8,9

i: 4 j: 0 numUnicos: 1,3,4 numAtual: 4 Array: 1,3,4,1,4,5,3,5,8,9

i: 5 j: 0 numUnicos: 1,3,4 numAtual: 5 Array: 1,3,4,1,4,5,3,5,8,9

i: 6 j: 0 numUnicos: 1,3,4,5 numAtual: 3 Array: 1,3,4,1,4,5,3,5,8,9

i: 7 j: 0 numUnicos: 1,3,4,5 numAtual: 5 Array: 1,3,4,1,4,5,3,5,8,9

i: 8 j: 0 numUnicos: 1,3,4,5 numAtual: 8 Array: 1,3,4,1,4,5,3,5,8,9

i: 9 j: 0 numUnicos: 1,3,4,5,8 numAtual: 9 Array: 1,3,4,1,4,5,3,5,8,9

[ 1, 3, 4, 5, 8, 9 ]
~~~



<br>
<hr>
<br>

## Array.from() vs Array.of()
<br>

A primeira coisa q precisamos observar, é que nos metodos anteriores, o acesso era feita a partir do `objeto do tipo array`. O `arr.reduce()` tem começa com a letra minuscula, indicando que é um objeto.

Nesses metodos de agora, temos o acesso como  `Array.from()`, onde indica que acessamos esse metodo diretamente da `função construtora` ou da `classe Array`. Essa palavra `Array` com o `A` maiusculo deixa subentendido que é uma `função construtora`.

- Vamos exemplificar melhor usando o console.
- Se criarmos duas arrays, `arr e arr2` atribuindo valores a ela utilizando metodos como `.push()` vemos que estamos manipulando um objeto do `tipo array`.
- Ja se digitarmos no console `Array` o proprio console nos mostra que estamos acessando uma `função`.

~~~
arr = [1,2,3]
Array(3) [ 1, 2, 3 ]

arr2 = [4,5,6]
Array(3) [ 4, 5, 6 ]

arr.push(5)
4
arr
Array(4) [ 1, 2, 3, 5 ]

Array
function Array()
~~~

- Outra coisa que precisamos nos atentar é na questão do suporte, onde esse `Array.from() e Array.of()` não possui suporte para o IE11.
- Outra observação é que dentro do site do [can i use](https://caniuse.com/), sempre que procuramos um metodo, tbm nos eh mostrado um link para a documentação do mesmo, onde nessa documentação, no caso do `Array.from()`, temos um o exemplo de `POLYFILL`.
- Sempre que vermos essa palavra `POLYFILL`, significa uma maneira de fazer o metodo funcionar em browsers que nao funcionam nativamente, criando assim essa função no browser.
- Abaixo segue o exemplo de `POLYFILL` do `Array.of()`, por ser mais simples...

~~~
if(!Array.of){
    Array.of = function(){
        return Array.prototype.slice.call(arguments);
        // or
        let vals = [];
        for(let prop in arguments){
            vals.push(arguments[prop]);
        }
        return vals;
    }
} 
~~~

Vamos agora criar um novo documento(html) para vermos como funcionam esse metodos.

- Vamos começar pelo `Array.from()` que serve para criarmos um array a partir de outro array, ou de um objeto que se pareça com um array.
- Por enquanto vamos criar uma variavel chamando ela de `arr1`, poderiamos usar a sintaxe literal, mas nesse caso queremos usar a função construtora, ou seja, criamos utilizando o operador `new` passamos a função construtora `Array()` junto com os valores que queremos.
  
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const arr1 = new Array(1,2,3);
        console.log(arr1);
    </script>
</body>
</html>
~~~

- Agora, digamos que queremos criar uma nova array a partir desta primeira array que criamos, no caso `arr1`.
- Uma das formas é usando o `Array.from()`, onde acessamos diretamente o metodo `.from()` da função `Array()`. Na pratica seria como se tivessemos fazendo uma copia.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const arr1 = new Array(1,2,3);
        console.log(arr1);

        const arr2 = Array.from(arr1);
        console.log(arr2);
    </script>
</body>
</html> 

// SAIDA:
> (3) [1, 2, 3]
> (3) [1, 2, 3]
~~~

- Vamos adicionar uns valores antes de mostrar o `arr2` no console, para poder diferenciar entre os arrays.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const arr1 = new Array(1,2,3);
        console.log(arr1);

        const arr2 = Array.from(arr1);
        arr2.push(4,5);
        console.log(arr2);
    </script>
</body>
</html>

// SAIDA:
// SAIDA:
> (3) [1, 2, 3]
> (5) [1, 2, 3, 4, 5]
~~~

- Ja o `Array.of()` serve para criar arrays, so que ele é especialmente util quando formos criar uma nova array utilizando a sintaxe do `new Array()` passando um unico argumento `do tipo numero`.
- Na pratica o que esta acontecendo é que, quando criamos o array passando somente um argumento `new Array(3)`, estamos criando um array com `3 posições`.
- Ja quando fazemos o `Array.of(3)`, na pratica estamos criando um array, com `uma posição` colocando o numero `3` no array.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const arr1 = new Array(1,2,3);
        // console.log(arr1);


        const arr2 = Array.from(arr1);
        arr2.push(4,5);
        // console.log(arr2);

        const arr3 = new Array(3);
        console.log(arr3);
        console.log(arr3.length);


        const arr4 = Array.of(3);
        console.log(arr4);
        console.log(arr4.length);

    </script>
</body>
</html>

// SAIDA:
> (3) [empty × 3]
> 3
> [3]
> 1

~~~  

- No console podemos ver que ele nos mostra o array criado com o `empty x 3`.
- E que foi colocado o numero `3` no outro array quando usamos o `.of()`.

Agora vamos ver uma maneira mais pratica de como usar o `Array.from()`.

- No nosso html, vamos colocar 3 paragrafos, e seleciona0los no mundo do javascript criando uma constante e usando o `querySelector()`.

~~~
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>

    <script>
        
        const paragrafos = document.querySelectorAll('p');
        console.log(paragrafos);

    </script>
</body>
</html>

// SAIDA:

> NodeList(4) [p, p, p, p]


~~~

- A saida do console nos mostra que temos uma `nodeList` onde os paragrafos são mostrados como um array `[p,p,p,p]` com os indices `0,1,2,3` que armazenam cada um dos paragraoos.
- Como ele se parece com um array, podemos usar o metodo `.length` que ira nos mostrar a quantidade de elementos desse array...

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores</p>

    <script>
        const paragrafos = document.querySelectorAll('p');
        console.log(paragrafos);
        console.log(paragrafos.length);
    </script>
</body>
</html> 

// SAIDA:

> NodeList(4) [p, p, p, p]
> 4
~~~

- Podemos tambem usar o metodo `.forEach()` que tbm é um metodo de arrays.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores</p>

    <script>
        const arr1 = new Array(1,2,3);
        // console.log(arr1);


        const arr2 = Array.from(arr1);
        arr2.push(4,5);
        // console.log(arr2);

        const arr3 = new Array(3);
        //console.log(arr3);
        //console.log(arr3.length);


        const arr4 = Array.of(3);
        //console.log(arr4);
        //console.log(arr4.length);

        const paragrafos = document.querySelectorAll('p');
        console.log(paragrafos);
        console.log(paragrafos.length);

        paragrafos.forEach(function(p){
            console.log(p.textContent);
        })
    </script>
</body>
</html>

// SAIDA:

> NodeList(4) [p, p, p, p]
> 4
> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.
> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.
> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores
> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores blablabalb
~~~

- Podemos tambem fazer uma manipulação usando o `template literal` para colocar um numero na frente de cada um dos paragrafos, basta passar o indice na função de callback do `.forEach()`

~~~

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores blablabalb</p>

    <script>
        const paragrafos = document.querySelectorAll('p');
        console.log(paragrafos);
        console.log(paragrafos.length);

        paragrafos.forEach(function(p, i){
            p.textContent = `${i} = ${p.textContent}0`;
            console.log(p.textContent);
        })
    </script>
</body>
</html>

// SAIDA BROWSER:
0 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.0

1 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.0

2 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores0

3 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores blablabalb0

// SAIDA CONSOLE

> NodeList(4) [p, p, p, p]
> 4
> 0 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.0
> 1 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.0
> 2 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores0
> 3 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores blablabalb0
~~~

- Lembre-se que podemos usar os incrementos para manipular o começo dos valores {`i != i++ != ++i`}.
- A gente usou o metodo `.forEach()` para fazer essa manipulação, porem so irá funcionar em browser mais mordernos quando tivermos falando de elementos do DOM `nodeList` por exemplo.
- Digamos que queremos fazer exatamente a mesma coisa usando o `.map()`, como seria?

~~~ 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores blablabalb</p>

    <script>
        paragrafos.map(function(p, i){
            p.textContent = `${i} = ${p.textContent}0`;
            console.log(p.textContent);
        })
    </script>
</body>
</html>

// SAIDA CONSOLE:

Uncaught TypeError: paragrafos.map is not a function
    at array_from_of.html:47:20
~~~

- Vemos que ao tentar fazer a mesma coisa usando o `.map()`, recebemos um erro, pois o `paragrafos.map()` não é uma função.
- E o `.map()` não existe em objetos do tipo `nodeList`, apesar de que `paragrafos/nodeList` se pareça com um array, ele não é um array de verdade.
- Logo, como conseguimos criar uma array a partir do `objeto paragrafos` para podermos assim ter acesso ao `.map()`? Ou seja, vamos transformar tudo que é paragrafo em um objeto do `tipo array`.
- Temos varias formas, uma delas é usando o `Array.from()`, onde passamos como parametro o `nodeList = paragrafos`.Ou seja, estamos criando um array a partir dos elementos que estão dentro do objeto do DOM.

~~~ 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores blablabalb</p>

    <script>
        let paragrafos = document.querySelectorAll('p');
        console.log(paragrafos);
        console.log(paragrafos.length);

        //paragrafos.forEach(function(p, i){
            //p.textContent = `${i} = ${p.textContent}0`;
            //console.log(p.textContent);
        //})

        paragrafos = Array.from(paragrafos);
        paragrafos.map(function(p, i){
            p.textContent = `${i} = ${p.textContent}0`;
            console.log(p.textContent);
        })
    </script>
</body>
</html>

// saida:

NodeList(4) [p, p, p, p]
> 4
> 0 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores, consequatur ipsam temporibus consectetur sunt rem amet accusamus quia maxime nemo ullam! Doloremque, voluptatibus.0
> 1 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.0
> 2 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores0
> 3 = Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore ut, vero voluptatibus cum dignissimos maiores blablabalb0
~~~

- Agora ao usar o `.map()` vemos que esta funcionando, tendo exatamente o mesmo resultado so que usando o `.map()`. Podemos fazer isso com qualquer metodo de array.

Conseguimos usar qualquer metodo de arrays que vimos em `objetos do DOM` se primeiro transformarmos o `objeto` do DOM em um `array` usando o metodo do objeto `Array.from()` para fazer essa transformação.

<br>
<hr>
<br>

## spread operator
<br>

Vamos ver algumas facilidades que a versão ES6 do javascript nos trouxe. Vamos criar um novo documento chamado de `spread.js`.

- O `spread` operator e o `rest` operator são bastante parecidos. Sempre que vermos no nosso codigo 3 pontinhos `...`, estamos nos referindo ou ao `spread` ou ao `rest` operator.
- Vamos criar um array com 3 numeros para vermos quando utilizar o `spread`.
- Digamos que a gente queira passar esses valores do array, para uma função. Ou seja, `sum(1,2,3)`, queremos executar uma função, e não cria-la passando esses valores `1,2,3`.
- Porem esses valores estão dentro de um array, se fizermos `sum(1,2,3)` estamos passando 3 argumentos, ja quando fazemos `sum(arr)` estamos passando somente 1 argumento. Em outras palavras estamos fazendo `sum([1,2,3])`
- Como poderiamos fzer para "quebrar" essa array, e não passa-la dessa maneira? Somente passar os valores que estão dentro do array separados por virgula.
- É ai que usamos o `spread operator` da seguinte maneira `sum(...[1,2,3]);`, assim iremos "quebrar" o array e passar os argumentos/indices/elementos como parametros individuais.

~~~
const arr = [1,2,3];

sum(1,2,3); // aruments.length = 3
sum(arr); // arguments.length = 1
sum([1,2,3]);

sum(...[1,2,3]); ===  sum(...arr);
~~~

- Vamos criar uma função para vermos melhor como funciona. Vamos criar uma função chamada `sum()` sem argumentos, e dentro da função vamos colocar no `console.log()` o `arguments` e o `arguments.length`.


~~~
const arr = [1,2,3];

function sum(){
    console.log(arguments);
    console.log(arguments.length);
}

sum(1,2,3); // arguments.length = 3
sum(arr)// arguments.length = 1
sum([1,2,3]);

sum(...[1,2,3]);
sum(...arr);

// SAIDA:

❯ node spread.js
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
[Arguments] { '0': [ 1, 2, 3 ] }
1
[Arguments] { '0': [ 1, 2, 3 ] }
1
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
~~~

- Na primeira chamada da função `sum(1,2,3)`, passamos 3 argumentos
- Na segunda chamada da função `sum(arr)`, passamos 1 argumento.
- Na terceira chamada da função `sum([1,2,3])`, passamos 1 argumento tbm, igual a segunda chamada, porem escrito de outra forma.
- Na quarta chamada da função `sum(...[1,2,3])`, passamos 3 argumentos, usando o spread operator, e podemos observar que o array foi quebrado em elementos separados `[Arguments] { '0': 1, '1': 2, '2': 3 }`
- E na quinta chamada da função `sum(...arr)`, passamos tbm 3 argumentos e é equivalente a quarta chamada.

Sempre que precisarmos quebrar o array, ou seja, separar os elementos, usamos esses 3 pontinhos `...`. 

> Lembre-se que não irá funcionar em todos os browsers.

Outro exemplo que podemos utilizar esse operador seria com o metodo `.push()`.

- Temos a nossa `arr` e tbm uma outra array chamada `arr2`, e vamos criar uma `arr3` que será a junção dessas duas arrays. Vamos ver o que acontece no console.

~~~

const arr1 = [1,2,3];

function sum(){
    console.log(arguments);
    console.log(arguments.length);
}

sum(1,2,3); // arguments.length = 3
sum(arr1)// arguments.length = 1
sum([1,2,3]);

sum(...[1,2,3]);
sum(...arr1);

const arr2 = [4,5,6];
console.log("arr1: " + arr1);
console.log("arr2: " + arr2);
const arr3 = arr1.push(arr2);
console.log("arr3: " + arr3);
console.log(arr1);

// SAIDA:
❯ node spread.js
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
[Arguments] { '0': [ 1, 2, 3 ] }
1
[Arguments] { '0': [ 1, 2, 3 ] }
1
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
arr1: 1,2,3
arr2: 4,5,6
arr3: 4
[ 1, 2, 3, [ 4, 5, 6 ] ]
~~~

- Lembrando que o metodo `.push()` sempre irá retornar o `.length` do array no qual foi inserido, e modifica a `array original`.
- Vejam que demos um `.push()` de um array, para dentro de outro array `[ 1, 2, 3, [ 4, 5, 6 ] ]`, se quisermos add os elementos como se fossem individuais/quebrados, usuariamos o `.spread operator`.

~~~
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log("arr1: " + arr1);
console.log("arr2: " + arr2);

function sum(){
    console.log(arguments);
    console.log(arguments.length);
}

sum(1,2,3); // arguments.length = 3
sum(arr1)// arguments.length = 1
sum([1,2,3]);

sum(...[1,2,3]);
sum(...arr1);


const arr3 = arr1.push(...arr2);
console.log("arr3: " + arr3);
console.log(arr1);


// SAIDA:

❯ node spread.js
arr1: 1,2,3
arr2: 4,5,6
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
[Arguments] { '0': [ 1, 2, 3 ] }
1
[Arguments] { '0': [ 1, 2, 3 ] }
1
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
[Arguments] { '0': 1, '1': 2, '2': 3 }
3
arr3: 6
[ 1, 2, 3, 4, 5, 6 ]
~~~

Assim temos uma unica array com numeros, e nao um array dentro de outro array.

<br>
<hr>
<br>

## destructuring
<br>

Vamos criar um novo documento e chama-lo de `destructuring.js` para vermos como funciona.

- O `destructuring` serve para a gente criar variaveis de uma array. Ele serve tanto para `arrays` quanto para `objetos`.
- Sempre que vermos a sintaxe, no caso de `arrays`, colchete com o sinal de igual `const/let[] = `, não estamos vendo um array de verdade e sim um `destructuring`, ou seja, estamos tirando da nossa array uma `variavel` com o valor que queremos.
- Vamos criar algumas arrays para podermos ver como funciona. Vamos usar o `destructuring` na nossa array e colocar dentro da variavel `[n1] = arrr`.
- Como so estamos passando uma unica posição, o valor que será atriuido será o valor do `primeiro elemento` do array.

~~~ 
const arr = [10,20,30];
console.log(arr);
const [n1,n2] = arr;
console.log(n1,n2);


// SAIDA:

❯ node destructuring.js
[ 1, 2, 3 ]
1
~~~

- Se colocarmos `[n1,n2] = arr`, o primeiro e o segundo valor serão atribuidos a essas variveis.

~~~
const arr = [1,2,3];
console.log(arr);
const [n1,n2] = arr;
console.log(n1,n2);

// SAIDA:

❯ node destructuring.js
[ 10, 20, 30 ]
10 20
~~~

- Ou seja, a partir da nossa array, foram criadas duas variaveis constantes `n1,n2`, e os valores da primeira e segunda posição do indice foram atribuidos a essas variaveis.
- Poderiamos tambem utilizar o `rest operator` da seguinte maneira, `const [n1, ...n2] = arr`, isso fará com que o restante dos valores dentro do array sejam colocados no `n2` e nao somente um valor.

~~~ 
const arr = [10,20,30];
console.log(arr);

const [n1,...n2] = arr;
console.log(n1);
console.log(n2);

// SAIDA:

❯ node destructuring.js
[ 10, 20, 30 ]
10
[ 20, 30 ]

~~~

- Como fariamos se a gente não quisesse que o `n2` armazenasse o valor segundo valor, e sim o ultimo? Basta colocarmos mais um virgula que fara com que seja `ignorad` o segundo valor `[n1,,n2] =  arr`.

~~~
const arr = [10,20,30];
console.log(arr);

const [n1,,n2] = arr;
console.log(n1);
console.log(n2);

// SAIDA:

❯ node destructuring.js
[ 10, 20, 30 ]
10
30
~~~

> Sempre que vermos a sintaxe que parece um array porem esta do lado esquerdo da igualdade, `[n1] = ` estamos nos referindo ao `destructuring`, ou seja, pegando os valores do nosso array e trazendo para as varaiveis.

<br>
<hr>
<br>

## for ... of
<br>

Agora vamos falar sobre o `loop for...of`. Se lembrarmos falamos sobre o loop `for..in` na parte de revisao de logica de programação usando esse loop em um objeto. Vamos criar um novo documento(`for_of.js`) para darmos uma relembranda e vermos como o loop `for... of`  funciona.

- Vamos criar primeiramente uma constante que irá receber um array, e tbm um objeto para relembrar o loop `for...in`.

~~~
const arr = [1,2,3];

const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com",
} 
~~~

- O loop `for..in` serve para percorrer `objetos`. 

~~~
const arr = [1,2,3];

const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com",
}

for(let prop in obj){
    console.log(prop);
}

// SAIDA:
❯ node for_of.js
nome
idade
email
~~~

- Cada iteração do `prop` será mostrada as propriedades do objeto sem o valor.
- Para acessar a propriedade e o valor, basta colocarmos no console o objeto `obj` passando a sintaxe de colchetes `obj[prop]`

~~~
const arr = [1,2,3];

const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com",
}

for(let prop in obj){
    console.log(prop);
    console.log(obj[prop]);
}

// SAIDA:

❯ node for_of.js
nome
Maria
idade
28
email
maria@server.com

~~~

- Ja o loop `for..of` serve para fazer iteração de `arrays` retornando seus valores.

~~~
const arr = [1,2,3];

const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com",
}

for(let prop in obj){
    console.log(prop);
    console.log(obj[prop]);
}

for(n of arr){
    console.log(n);
}

// SAIDA:

❯ node for_of.js
nome
Maria
idade
28
email
maria@server.com
1
2
3
~~~

- O que acontece quando usamos esse loop eh que estamos acessando os valores da nossa array diretamente, sem precisar fazer o loop `for/while...`. Se tornando uma sintaxe mais simples.
- Esse loop não funciona no `IE11`.


<br>
<hr>
<br>

## Desafio
<br>

<br>
<hr>
<br>

## Resolução: Desafio
<br>

<br>
<hr>
<br>

## Introdução ao prototype, call() e apply()
<br>

<br>
<hr>
<br>