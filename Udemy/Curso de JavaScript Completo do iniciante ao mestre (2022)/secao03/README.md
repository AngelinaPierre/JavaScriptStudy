# Seção 03: Sistema Léxico do Javascript

<br>
<hr>
<br>


## Sistema Léxico parte 1

<br>

### Instruções
<br>

- Tudo o que é passado para o interpretador do javascrip linha a linha.

~~~
let nome = "Daniel";
console.log(10 + 20);
~~~


### Comentários
<br>

- Comentarios de uma unica linha
~~~
// comentario 1 linha 
~~~

- Comentario multiplas linhas

~~~
/**
* COmentario de varias linhas
*/
~~~

### Case sensitive
<br>

- Diferencia letras maiusculas de letras minusculas.

~~~
let nome = "Daniela";
alert(Nome); // erro 
~~~



### Palavras Reservadas
<br>

- Palavras Reservadas

<table>
    <thead>
        <tr>
            <th>Break</th>
            <th>Debugger</th>
            <th>Finally</th>
            <th>new</th>
            <th>typeof</th>
        </tr>
        <tr>
            <th>Case</th>
            <th>default</th>
            <th>for</th>
            <th>return</th>
            <th>var</th>
        </tr>
        <tr>
            <th>catch</th>
            <th>delete</th>
            <th>function</th>
            <th>super</th>
            <th>void</th>
        </tr>
        <tr>
            <th>class</th>
            <th>do</th>
            <th>if</th>
            <th>switch</th>
            <th>while</th>
        </tr>
        <tr>
            <th>const</th>
            <th>else</th>
            <th>import</th>
            <th>this</th>
            <th>with</th>
        </tr>
        <tr>
            <th>Continue</th>
            <th>export</th>
            <th>in</th>
            <th>throw</th>
            <th>yield</th>
        </tr>
        <tr>
            <th>extends</th>
            <th>instanceOf</th>
            <th>try</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
</table>

- Palavras Reservadas para o futuro

<table>
    <thead>
        <tr>
            <th>enum</th>
            <th>await</th>
            <th>implements</th>
        </tr>
        <tr>
            <th>interface</th>
            <th>let</th>
            <th>package</th>
        </tr>
        <tr>
            <th>private</th>
            <th>protected</th>
            <th>public</th>
        </tr>
        <tr>
            <th>static</th>
            <th>abstract</th>
            <th>boolean</th>
        </tr>
        <tr>
            <th>byte</th>
            <th>char</th>
            <th>double</th>
        </tr>
        <tr>
            <th>final</th>
            <th>float</th>
            <th>goto</th>
        </tr>
        <tr>
            <th>int</th>
            <th>long</th>
            <th>native</th>
        </tr>
        <tr>
            <th>short</th>
            <th>synchroniz</th>
            <th>ed</th>
        </tr>
        <tr>
            <th>throws</th>
            <th>transient</th>
            <th>volatile</th>
        </tr>
    </thead>
<br>
<br>

### Ponto e vírgula
<br>

- O ponto e virgula não é necessário, porem é uma boa pratica sua utilização. 
- A unica brigatoriedade do ponto-e-virgula seria se tivessemos dois comandos de codigo na mesma linha

~~~
let nome = 'Daniel' alert(nome) // erro
let nome = 'Daniel'; alert(nome) // rigth


~~~


### Nomear variaveis
<br>

- Nome de funções que comecem com letras MAIUSCULAS indicam funções CONSTRUTORAS ou CLASSES.
- Funções simples usamos letras minusculas.

~~~
function GetName(){}; // não é boa pratica
function getName(){}; // boa pratica

const Nome = ''; // não é boa pratica
const nome = ''; // boa pratica
~~~

- Quando sua variavel/função possui palavras compostas, utilize o cammelCase.

~~~
const nomedefamilia = ''; // não é boa pratica
const nomeDeFamilia = ''; // boa pratica
~~~

- Não podemos começar variaveis com numeros

~~~
const 2hasAttribute = ''; // erro
const h2asAttribute = ''; // ok, but bad!
const hasAttribute2 = ''; // ok
~~~

- Os caractereris especiais permitidos são [_, $];

~~~
const _hasAttribute = '';
const $hasAttribute = ''; 
~~~


<br>
<hr>
<br>

## Sistema Léxico parte 2
<br>

### "use strict"
<br>

- Quando deixamos o codigo do javascript em modo [restrito] ele deixa o codigo mais segura.

EXEMPLO

- Se abrirmos no browser, não teremos nenhum erro.
~~~ 
<html>
...
<script>
    x = 10;
</script>
...
</html>
~~~ 

- Porem, se colocarmos no codigo a cima o [use-strict] iremos receber um erro ao abrir o codigo no browser.

~~~
<html>
...
<script>
    "use strict";
    x = 10;
</script>
...
</html>
~~~

- Não podemos criar variaveis sem declara-las.
- Precisa, literalmente ser o primeiro da linha, até mesmo se for um comentário. 
- Se o arquivo for html, pode ser que funcione, mas rodar em um arquivo javascript 
- Se não usarmos o use-sctrict ao criarmos uma função, as variaveis dentro desta função irão para o escopo global podendo ser acessadas fora da função.

~~~ 
function foo(){
    "use strict";
    x = 20;
}
~~~

- Se colocarmos o [use-strict] dentro da função, somente aquela função será [use-strict].

<br>
<br>

### Tipagem Dinâmica
<br> 

- Capacidade de armazenar valores de diversos tipos em uma variavel, sem precisar dizer o tipo que a mesma irá armazenar.


<br>
<br>

### Aspas simples ou duplas
<br>

- Podemos trabalhar com aspas duplas e simples, depende de como vamos escrever a string.
- Temos o caractere de escape para colocar as aspas duplas dentro de aspas duplas.

~~~
let msg = 'uma string com aspas simples'
let msg = "uma string com aspas duplas"
let msg = "uma string com 'aspas' simples dentro"
let msg = ' string com "aspas" duplas dentro'
let msg = "uma \"string"
~~~

<br>
<br>

### Not a number
<br>

- Calculo matematico com string retorna um NOT A NUMBER.

~~~
console.log("ola" + 2);
~~~

<br>
<br>

### This Dinâmico
<br>

- Pode mudar de acordo com o codigo.

~~~
function teste(){
    console.log(this);
}
teste();
~~~

- Se a função estiver no escopo global, o this refere a o objeto WINDOW

~~~
const obj = {
    n: 0,
    teste2: teste
};
obj.teste2();
~~~

- Agora o [this] se refere ao objeto e não ao objeto [window] do escopo global.

~~~
// forma simplificada de escrever a mesma função acima
const obj = {
    n: 0,
    teste
};
obj.teste();
~~~

- Se for uma ARROW FUNCTION o [this] deixa de ter um escopo dinamico e passa a fazer parte do escopo lexico da linguagem.

~~~ 
const teste2 = () => {
    console.log('teste2');
    console.log(this);
}
~~~ 

<br>
<br>

### Conversão Implícita
<br>

~~~
console.log("2" * 2);
~~~

<br>
<br>

<br>
<hr>
<br>



