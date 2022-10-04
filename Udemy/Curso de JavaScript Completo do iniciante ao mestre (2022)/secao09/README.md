# SEÇÃO 09 - EVENTOS

<br>

## Introdução
<br>

### O que são Evento:

`Evento` é uma ocorrencia interativa que ocorre por intervenção do usuario ou não. Por exemplo:
- Sseguir um link
- Submeter um formulario
- Carregar uma página ou recurso do servidor (AJAX)
- Digitar um texto
- Mover o mouse...

### Event Handlers

Uma função que é executada quando um evento ocorre. Ou seja, uma função de `callback` que é executada quando um evento acontence.

### Disparador de eventos

É o elemento que disparou o evento. Ou seja, o elemento ao qual foi atrelado o `event handler`.

### Event Handler - DOM level 0

Vamos agora falar sobre `tipos de event handler`. Temos no `DOM lvl 0` uma maneira um pouco ultrapassada de atrelar uma função no evento.

~~~
<button onClick="funcao()" id="btn">...</button>
~~~

- Temos uma função atrelada a um `atributo = onClick`, onde o evento é o `click` do mouse, porem quando estamos usando o `DOM lvl 0` precisa ser usado uma palavra-chave chamada `on` seguida pelo `nome do evento`, caso `click`.
- Como estamos usando um `atributo do DOM lvl 0` passamos a palavra `onClick` seguida de uma `função entre apas`.
- Observe que nesse tipo de implementação precisamo passar os `parenteses()` da função.


~~~
const btn = document.getElementById("btn");
btn.onClick = funcao;
~~~

- Temos uma outra maneira de fazer o vinculo entre uma função `event handler` em um evento.
- Criamos uma variavel que recebe a referencia do elemento.
- E depoiss vinculamo chamando a `variavel.onEvento`, no exemplo acima, temos o evento `click` que precisamos colocar a palavra `on` na frente e atribuimos a ela a `funcao`;
- Observe que essa função não tem `parenteses`.

> Caracteristicas:
>   - Não conseguimos vincular mais de um evento ao mesmo elemento html.

### Event Handler - DOM lvl 2

Para utilizar o `DOM lvl2` precisamos de um metodo chamado `.addEventListener()`.

~~~
const btn = document.getElementById("btn");
btn.addEventListener(evento, funcao, fase);
~~~

- Esse metodo recebe pelo menos `2 parametros`, o `tipo do evento` e `função`. O parametro `fase` mostrado no codigo é opcional, cujo valor `default = false`.


Vamos agora ver alguns exemplos no nosso vscode. Vamos criar um novo documento html e chama-lo de `introdução.html`.

Para começar a demonstração, vamos criar 3 botões:

~~~
<body>
    <h1>Eventos</h1>
    <button id="btn1">Botão 1</button>
    <button id="btn2">Botão 2</button>
    <button id="btn3">Botão 3</button>
</body>
~~~

- No mundo do javascript iremos criar algumas variaveis que referencie a esses botões.

~~~
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
~~~

- Ja vimos como utilizar o `DOM lvl 0` porem, vamos ver o porque a utilização dele não é uma boa pratica.
- A primeira coisas é que não conseguimos vincular `2 eventos` ao mesmo elemento html.
- Podemos atribuir uma `função anonima` ao evento do click do botão.

~~~ 
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.onclick = function(){
    console.log("click btn1 funcao anonima");
}
~~~ 

- Poderiamos tbm criar uma função nomeada e atribuir ao evento.

~~~ 
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function clicou(){
    console.log("click funcao cliclou()");
}

btn1.onclick = function(){
    console.log("click btn1 funcao anonima");
}
btn1.onclick = clicou;
~~~ 

- Como podemos ver, a função `clicou()` sobrescreveu a função anonima que criamos anteriormente, não aceitando assim mais de um evento no mesmo elemento.
- Vamos ver como fazemos para trabalhar com o `DOM lvl 2`. Para isso, usamos o `addEventListener()` passando como `evento = click` (tira o `on`) e coloca o nome do evento entre `"aspas"`, e como segundo parametro, passamos uma função `event handler` e essa função será executada quando ocorrer o `click` no `btn2`.
- Podemos passar tanto uma `função anonima` quanto uma `função nomeada`.

~~~ 
<script>
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    function clicou(){
        console.log("click funcao cliclou()");
    }

    btn1.onclick = function(){
        console.log("click btn1 funcao anonima");
    }
    btn1.onclick = clicou;

    btn2.addEventListener("click",clicou);

</script>
~~~ 

- Poderiamos tbm trabalhar com `função anonima`. Observe que agora podemos ter mais de um evento vinculado ao mesmo elemento html.

~~~
<script>
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    function clicou(){
        console.log("click funcao cliclou()");
    }

    btn1.onclick = function(){
        console.log("click btn1 funcao anonima");
    }
    btn1.onclick = clicou;

    btn2.addEventListener("click",clicou);

    btn2.addEventListener("click", function(){
        console.log("click btn2 funcao anonima");
    })

</script>
~~~

- Vamos agora imaginar que tbm temos a maneira de criar evento para o mesmo botão usando o `DOM lvl 0 +  DOM lvl 2`.

~~~ 
<script>
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    function clicou(){
        console.log("click funcao cliclou()");
    }

    btn1.onclick = function(){
        console.log("click btn1 funcao anonima");
    }
    btn1.onclick = clicou;

    btn2.addEventListener("click",clicou);

    btn2.addEventListener("click", function(){
        console.log("click btn2 funcao anonima");
    })

    btn2.onclick = function(){
        console.log("função anonima no btn2");
    }

</script>
~~~

- Observe que todas as 3 funções foram executadas ao clicar no botão 2.
- Agora, vamos ver o que acontence se dentro do html do `botao 2` colocarmos o atributo `onClick`, recebendo diretamente um `console.log()`.

~~~
<button id="btn2" onclick="console.log('click com atributo')">Botão 2</button>
~~~

- Ao clicarmos no botão 2, vemos que a `função com atributo` nunca foi executada pois foi sobrescrita pelo `onclick` no javascript.
- Se comentarmos essa linha de codigo, a `função com atributo` irá funcionar.

~~~
<script>
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    function clicou(){
        console.log("click funcao cliclou()");
    }

    btn1.onclick = function(){
        console.log("click btn1 funcao anonima");
    }
    btn1.onclick = clicou;

    btn2.addEventListener("click",clicou);

    btn2.addEventListener("click", function(){
        console.log("click btn2 funcao anonima");
    })

</script>
~~~

<br>
<hr>
<br>

## Propagação de eventos
<br>

<br>
<hr>

## O objeto event
<br>

<br>
<hr>

## Delegação de eventos
<br>

<br>
<hr>

## target vs currentTarget
<br>

<br>
<hr>

## Exercicio proposto: Validar formulário
<br>

<br>
<hr>

## Cancelar o envio de formulário
<br>

<br>
<hr>

## Exercicio proposto: Contador de caracteres
<br>

<br>
<hr>

## Melhoria: evitar números "mágicos"
<br>

<br>
<hr>

## Exercicio Proposto: Aceitar os termos para usar o form
<br>

<br>
<hr>

## Exercicio Proposto: Feedback Message
<br>

<br>
<hr>

## Executar callback quando fechar
<br>

<br>
<hr>

## Acessibilidade: Fechar com o ESC do teclado
<br>

<br>
<hr>

## Eventos de teclado
<br>

<br>
<hr>