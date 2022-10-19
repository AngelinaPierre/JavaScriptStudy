# SEÇÃO 13 - NUMBER

<br>

# toPrecision(), toFixed(), toExponential()
<br>

- A primeira coisa que iremos fazer para exemplificarmos esses metodos será criar uma variavel chamada `numero`.

~~~
let numero = 1234567.890;
~~~ 

- O primeiro metodo que iremos ver será o `toFixed()`, esse metodo espera receber como parametro um numero que irá representar quantos numeros `apos a casa decimal` queremos ter.
  
~~~ 
let numero = 1234567.890;

console.log(numero.toFixed(2));
console.log(typeof numero.toFixed(2));

// SAIDA:

❯ node introducao.js
1234567.89
string
~~~

- Observem que temos um numero com `duas casas decimais` pois como parametro para o metodo `toFixed()` passamos o numero 2, e o numero foi convertido para uma `string`.
- Vamos ver o que acontece no caso de passarmos mais casas decimais do que realmente existe como parametro para o metodo.

~~~
let numero = 1234567.890;

console.log(numero.toFixed(5));
console.log(typeof numero.toFixed(5));

// SAIDA:  

❯ node introducao.js
1234567.89000
string
~~~

- O metodo irá colocar no caso de não termos a quantidade mais casas decimais para igualar a quantidade de casas que passamos como parametro.
- agora iremos ver o metodo `toPrecision()` que diz respeito ao numero de digitos incluindo os numeros inteiros.

~~~
let numero = 1234567.890;

// toFixed()
console.log(numero.toFixed(5));
console.log(typeof numero.toFixed(5));

console.log(numero.toPrecision(3));
console.log(typeof numero.toPrecision(3));

// SAIDA:

❯ node introducao.js
1234567.89000
string
1.23e+6
string

~~~

- Na saida, temos uma `notação cientifica` pois colocamos um numero muito baixo como parametro do metodo, observe tbm que o numero ded retorno tbm é uma string.
- Vamos colocar um numero maior para ver o que acontence.

~~~ 
let numero = 1234567.890;

// toFixed()
console.log(numero.toFixed(5));
console.log(typeof numero.toFixed(5));

console.log(numero.toPrecision(7));
console.log(typeof numero.toPrecision(7));

// SAIDA:

❯ node introducao.js
1234567.89000
string
1234568
string
~~~

- Como podemos ver agora, o numero foi arredondado para ficar exatamente com a quantidade de numeros que passamos como parametro.
- O que aconteceria se passasemos como parametro um numero maior?

~~~
let numero = 1234567.890;

// toFixed()
console.log(numero.toFixed(5));
console.log(typeof numero.toFixed(5));

console.log(numero.toPrecision(15));
console.log(typeof numero.toPrecision(15));

// SAIDA:

❯ node introducao.js
1234567.89000
string
1234567.89000000
string
~~~

- Na saida do console podemos ver que foi colocado zeros a mais nos numeros, pq ja tinhamos no numero original numeros decimais.

~~~
let numero = 1234567.890;

// toFixed()
console.log(numero.toFixed(5));
console.log(typeof numero.toFixed(5));

console.log(numero.toPrecision(15));
console.log(typeof numero.toPrecision(15));


console.log(123 .toPrecision(6));
console.log((123).toPrecision(6));

// SAIDA:

❯ node introducao.js
1234567.89000
string
1234567.89000000
string
123.000
123.000
~~~

- Vamos agora ver o metodo `toExponencial()` que serve para convertermos um numero em notação cientifica.

~~~
let numero = 1234567.890;

// toFixed()
console.log(numero.toFixed(5));
console.log(typeof numero.toFixed(5));

// toPrecision()
console.log(numero.toPrecision(15));
console.log(typeof numero.toPrecision(15));


console.log(123 .toPrecision(6));
console.log((123).toPrecision(6));


// toExponential()
numero = 12.34567;

console.log(numero.toExponential());

// SAIDA:

❯ node introducao.js
1234567.89000
string
1234567.89000000
string
123.000
123.000
1.234567e+1
~~~ 

- Caso a gente passe como parametro um numero, será definido a quantidade de casas decimais que queremos mostrar do mesmo.

~~~
let numero = 1234567.890;

// toFixed()
console.log(numero.toFixed(5));
console.log(typeof numero.toFixed(5));

// toPrecision()
console.log(numero.toPrecision(15));
console.log(typeof numero.toPrecision(15));


console.log(123 .toPrecision(6));
console.log((123).toPrecision(6));


// toExponential()
numero = 12.34567;

console.log(numero.toExponential());
console.log(numero.toExponential(4));

// SAIDA:

❯ node introducao.js
1234567.89000
string
1234567.89000000
string
123.000
123.000
1.234567e+1
1.2346e+1
~~~

<br>
<hr>
<br>

# toString(), toLocateString()
<br>

<br>
<hr>
<br>

# MAX_VALUE, MIN_VALUE
<br>

<br>
<hr>
<br>

# isNaN()
<br>

<br>
<hr>
<br>