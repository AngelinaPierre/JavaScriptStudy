# SEÇÃO 08 - DOM: PARTE 2

<br>

## HTMLCollection vs NodeList
<br>

Vamos agora falar sobre a diferença entre `HTMLCollecion` e `NodeList`.

~~~
document.getElementsByTagName()
         getElementsByClassName()
         querySelectorAll()          
~~~

- O `.querySelectorAll()` irá nos retornar uma `nodeList`, onde essa `NodeList` é `estatica`.
- Em contra partida, o `getElementsByTagName() e getElementsByClassName()`, ou toda essa sintaxe que começa com `.getElements`, irá retornar um `HTMLCollection` e ao contrario da `nodeList` essa `HTMLCollection` é `dinamica`.

Vamos criar uma arquivo html chamado `htmlCollection_vs_nodeList` para podermos exemplificar melhor essas diferenças.

- Vamos criar uma estrutura bastante simples para exemplificarmos melhor.

> Obs: Para criar um elemento ja com id, basta fazermos `elemento#id` ou seja `ul#list` e apertar o tab.
> OBS2: Para criar mais de um elemento igual rapidamente, basta a gente fazer `li*5` e apertar o tab novamente.

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
    <div class="container">
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
    </div>

    <script>
        
    </script>
</body>
</html>
~~~ 

- Primeiro iremos criar duas constantes uma chamada `nodeList` e a outra chamada `htmlCollection`.
- A `nodeList` é retornada utilizando o `.querySelectorAll()`. Vamos pegar usando o `id` uma coleção de `lis` e salvar nessa constante que criamos.

~~~
<script>
    const nodeList = document.querySelectorAll("#list li");
    console.log(nodeList); 
</script> 

// SAIDA:
NodeList(5) [li, li, li, li, li]

~~~

- Vamos agora selecionar as nossas `lis` usando o `getElementByTagName()`, o que irá nos retornar um `HTMLCollection`.
- Poderiamos selecionar todas as `lis` diretamente, mas vamos usar o `id= list` da nossa `ul`. Para manter o padrão que usamos no querySelector().
- Porem, ao usar qualquer metodo que utilize essa sintaxe `#list li` não podemos selecionar diretamente, temos que `encadiar 2 metodos`.

~~~
<script>
    const nodeList = document.querySelectorAll("#list li");
    console.log(nodeList);
    const htmlCollection = document.getElementById("list").getElementsByTagName("li");
    console.log(htmlCollection);
</script>

// SAIDA:
NodeList(5) [li, li, li, li, li]
HTMLCollection(5) [li, li, li, li, li]
~~~

Podemos ver pelo retorno no console do browser, que ambos são parecidos. Logo qual seria a diferença?

- Como foi falado antes, o `HTMLCollection` é dinamico, ja o `NodeList` é estatico.
- Vamos fazer um experimento para vermos o que seria essa diferença entre ser `dinamico` e `estatico`.
- Vamos usar o `.innerHTML` para colocarmos uma nova `li` junto com as que ja são existentes.
  
~~~
<script>
    const nodeList = document.querySelectorAll("#list li");
    console.log(nodeList);
    const htmlCollection = document.getElementById("list").getElementsByTagName("li");
    console.log(htmlCollection);

    document.querySelector("#list").innerHTML += "<li>Item 6</li>";

    console.log(nodeList);
    console.log(htmlCollection);
</script>

// SAIDA:

NodeList(5) [li, li, li, li, li]
HTMLCollection(5) [li, li, li, li, li]
NodeList(5) [li, li, li, li, li]
HTMLCollection(6) [li, li, li, li, li, li]
~~~

- Como podemos ver pelo console, temos como o `length` o numero `5` nos dois primeiros console.
- Depois, acrescentamos no meio da execução do codigo mais uma `li`, e agora na saida do console vemos que o nosso `htmlCollection` foi atualizado adicionando a `li` extra que colocamos dentro do seu `length`, mostrando sua `função dinamica`. Ja o `nodeList` uma vez guardado o valor dentro dele, será o mesmo valor para sempre, não irá se atualizar a medida que o DOM sofre alteração.
- Isso não tem nada haver com o fato de termos criado a `li` com o `.querySelector`. Tanto que se fizermos com os metodos que geram uma `nodeList`, o resultado será o mesmo.

~~~
<script>
    const nodeList = document.querySelectorAll("#list li");
    console.log(nodeList);
    const htmlCollection = document.getElementById("list").getElementsByTagName("li");
    console.log(htmlCollection);

    document.querySelector("#list").innerHTML += "<li>Item 6</li>";

    console.log(nodeList);
    console.log(htmlCollection);

    document.getElementById("list").innerHTML += "<li>Item 7</li>";

    console.log(nodeList);
    console.log(htmlCollection);

</script>

// SAIDA:

NodeList(5) [li, li, li, li, li]
HTMLCollection(5) [li, li, li, li, li]
NodeList(5) [li, li, li, li, li]
HTMLCollection(6) [li, li, li, li, li, li]
NodeList(5) [li, li, li, li, li]
HTMLCollection(7) [li, li, li, li, li, li, li]
~~~

- A mesma coisa acontece quando queremos retirar elementos, o `nodeList` permanecerá intacto, ja o `HTMLCollection` irá atualizar seu `length`.

~~~
<script>
    const nodeList = document.querySelectorAll("#list li");
    console.log(nodeList);
    const htmlCollection = document.getElementById("list").getElementsByTagName("li");
    console.log(htmlCollection);

    document.querySelector("#list").innerHTML += "<li>Item 6</li>";

    console.log(nodeList);
    console.log(htmlCollection);

    document.getElementById("list").innerHTML += "<li>Item 7</li>";

    console.log(nodeList);
    console.log(htmlCollection);

    document.getElementById("list").innerHTML = "";
    console.log(nodeList);
    console.log(htmlCollection);

</script>

// SAIDA:

NodeList(5) [li, li, li, li, li]
HTMLCollection(5) [li, li, li, li, li]
NodeList(5) [li, li, li, li, li]
HTMLCollection(6) [li, li, li, li, li, li]
NodeList(5) [li, li, li, li, li]
HTMLCollection(7) [li, li, li, li, li, li, li]
NodeList(5) [li, li, li, li, li]
HTMLCollection []
~~~

- Vejam que o `HTMLCollection` esta vazia pois limpamos os items da tela, porem o `NodeList` continua contando como `5`.

<br>
<hr>
<br>

## Node vs Element
<br>

Relembrando o topico passado `HTMLCollection` retorna uma coleção, de `html/objetos` e ela é `dinamica/live`, ja o `.querySelector()`, é estatico e sua utilização retorna uma `NodeList` contendo `nós do tipo elemento`.

Há `12` tipos diferentes de `"nós"` no `DOM HTML` (elemento, atributo, texto, comentário, etc). Um `elemento` é só um tipo especifico de `nó`.

- Vamos ver um exemplo de um HTML simples:

~~~
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <div class="container">
            <p>Lorem <a href="#">link</a> .</p>
        </div>
    </body>
</html>
~~~

- Como seria representado esse html, em uma estrutura de DOM?
  
![](./assets/cap1.png)

- Esse html nos tras uma `estrutura linear`, uma coisa dentro da outra.

![](./assets/cap2.png)

- Para o mesmo html, agora temos a representação de alguns outros `"nós"` que seriam referentes ao `atributo` de cada elemento.

![](./assets/cap3.png);

- Agora, podemos ver os `"nós"` do tipo `texto` que tambem são representados.
- Logo para essa estrutura html, os `"nós"` que formam a arvaro de DOM podem ser separados pelos tipos:
  - `Elemento`: `html | body | div | p | a `
  - `Atributo`: `class | href`
  - `Texto`: `lorem | . | link `
- Por isso que falamos que o `.querySelector()` retorna uma `NodeList` que possui `nós do tipo elemento`.

Vamos agora ver alguns metodos que podemos usar para manipular o DOM desse html.

### Navegar entre os nós

~~~
Node.parentNode
    .parentElement
    .nextSibling
    .previousSibling
~~~

- Acessando os filhos dos `nós`.

~~~
Node.childNodes
    .children
    .firstChild
    .firstElementChild
    .lastChild
    .lastElementChild
    .hasChildNodes()
~~~

### Adicionando Nós

~~~
ParentNode.prepend()
          .append()

Node.appendChild()
    .insertBefore()
    .cloneNode()

ChildNode.after()
         .before()
~~~

- A partir do `elemento`

~~~
Element.insertAdjacentElement()
       .insertAdjacentHTML()
       .insertAdjacentText()
~~~


### Removendo Nós

~~~
Node.replaceChild()
    .removeChild()

ChildNode.remove()
~~~

> Cuidado com o `.remove()` pois ele não funciona no IE, caso a gente queira usar, basta criar um `polyfill` usando o `removeChild()`


### Criar nós

~~~
document.createElement()
        .createAttribute()
        .createTextNode()
        .write() // não usamos
~~~

- Quando criamos um elemento, estamos tecnicamente criando um elemento `fora da arvore do DOM HTML`, ou seja, ele so foi criado na `memoria` não esta em lugar nenhum da tela.
- Esse elemento so irá ficar visivel para o usuario, quando a gente adicionar ele a `arvore do DOM HTML` ou seja, dentro do `document`, usando os metodos ja mencionados `.appendChild()`. Ou seja, quando usarmos um metodo para adicionar esse `novo nó` dentro de um `nó existente`.






<br>
<hr>
<br>

## Navegar na árvore do DOM
<br>

<br>
<hr>
<br>

## children e childNodes
<br>

<br>
<hr>
<br>

## firstChild, lastChild
<br>

<br>
<hr>
<br>

## Create DOM
<br>

<br>
<hr>
<br>

## adicionar DOM
<br>

<br>
<hr>
<br>

## after e before
<br>

<br>
<hr>
<br>

## Insert
<br>

<br>
<hr>
<br>

## remove
<br>

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