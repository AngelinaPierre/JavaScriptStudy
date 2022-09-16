# Seção 05 - DOM (Document Object Model)
<br>
<hr>
<br>

## Introdução
<br>

- Uma API disponibilizada nos browser que edita o que é mostrado na tela.
- Interface entre o mundo do javascript e o mundo do HTML. Toda vez que quisermos acessar um elemento no mundo HTML para manipula-lo, usamos o DOM (objeto document) para fazer essa ponte.
- Sempre que estamos falando de DOM estamos nos referindo ao objeto `document`.


![](../assets/cap4.png)


- Temos um elemento de `body` no html, mas o que estamos fazendo é transformar esse elemento em um objeto onde conseguimos manipular no mundo do `javascript`.
- Na imagem temos varios elementos, que são filhos diretos da tag `body` esses filhos tambem serão transformados em objetos no mundo do javascript.
- Essa estrutura é o que chamamos de `arvore do DOM`, ou seja, uma representação hierarquica do que temos no mundo do `HTML`. Sempre que precisarmos manipular o `HTML` atraves do `Javascript` vamos precisar fazer o acesso ao `DOM`.
- Tudo que fizermos de alteração no `DOM` é automaticamente refletida na tela.

Sempre que falamos de `DOM` estamos nos referindo ao `objeto Document`.

~~~
document.getElementById();
        .getElementsByTagName();
        .getElementsByClassName();
        .querySelector();
        .querySelectorAll();
~~~

<br>
<hr>
<br>

## Selecionar elemento html no Javascript (recursos)
<br>

A partir de agora todos os nossos exercicios serão criados a partir de um arquivo `HTML`. Vamos abrir nosso `exemplo1.html` no nosso browser. Sempre que tivermos um arquivo `html` no browser, nos conseguimos visualizar o `DOM`. Basta pedirmos para `inspecionar`o arquivo e a `itnerface do DOM` irá aparecer.

~~~
[ARQUIVO EXEMPLO1.HTML]

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM - Document Object Model</title>

    <script>
        document.querySelector("h1").textContent = "Editado com JS"
    </script>

</head>
<body>
    <h1 id="title1">Curso Javascript Completo 2018 </h1>

    <main class="cmain" id="idmain">
        <h2>subtitulo</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ipsum tempora, repellendus cum distinctio iure, quos suscipit, magnam vel porro alias maiores nostrum magni? Laudantium sed voluptate excepturi voluptatem temporibus.</p>
    </main>

    <section class="csection" id="idsection">
        <h3>subtitulo 3</h3>
        <p class="paragrafo2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto reiciendis! Nobis enim molestias nemo culpa sit distinctio reprehenderit omnis, at error hic animi aspernatur quam eius voluptas veritatis officia.</p>
        <p class="paragrafo2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dignissimos, pariatur, sed aliquid dolorum ipsum libero dolores consequatur, tenetur impedit deserunt voluptatum ullam autem reprehenderit odio sit quo dolore atque.</p>
    </section>
    
</body>
</html>
~~~

A visualização na aba `elements` nos mostra uma visulização hierarquica do nosso HTML. O que estamos inspecionando é o `DOM` e não o `HTML` em si, para visualizar o `HTML` no browser, basta apertamos `ctrl+u` que poderemos ver o `View-source`. 

Caso a gente faça alguma alteração no `DOM` veremos na pagina, porem se atualizarmos a pagina, o nosso codigo fonte não será alterado.

Na aba `Console` conseguimos testar codigos javascript, se quisermos alterar via javascript, precisamos utilizar o nome do `elemento` que queremos fazer as alterações pelo console.

- Existe duas maneiras de no console acessarmos elementos HTML usando o objeto `document`.
- Pela id `document.getElementById("title1")`
  - Para fazer alteração usamos outra propriedade chamada `.textContent`

~~~
document.getElementById('title1').textContent = 'o que queremos alterar'; 
~~~ 

- O segundo metodo seria utilizando o metodo/propriedade chamada de `querySelector`
- Conseguimos passar dentro deste metodo qualquer seletor de css. Para isso precisamos usar o hashtag `#`

~~~ 
document.querySelector('#title1').textContent = "Editado com querySelector"
~~~

- Vamos colocar uma classe nos paragrafos para selecionar com base nas classes.
- Observe que se dermos um enter, ele nos trará um `Array`, porem não é um `array` de verdade. Nos mostrando que é um `HTML Collection`

~~~
document.getElementsByClassName("paragrafo2")
~~~

- Se utilizarmos o `textContent` com essa classe, ele irá imprimir no console o texto alterado, porem nao irá alterar no browser.
- Isso ocorre pois toda vez que acessamos, não uma representação direta do nosso `HTML`, mas um `HTML collection` ou uma `node list`, estamos acessando um objeto, e não conseguimos acessar as propriedadess desse objeto diretamente.

~~~ 
document.getElementsByClassName("paragrafo2").textContent = "teste de alteração de objeto"
~~~

- Ou seja, se quisermos fazer a alteração do texto, iremos precisar colocar o `Indice` do elemento que queremos alterar.

~~~
document.getElementsByClassName("paragrafo2")[0].textContent = "Editado pela classe"
~~~

- Logo precisamos tomar cuidado com isso, sempre que usarmos  o `getElementByID ou querySelector` estamos acessando uma refrencia do objeto.
- Se usarmos `getElementByClassName ou getElementsByTagName ou o querySelectorAll`, precisamos tambem passar o indice do elemento que queremos.
- `querySelectorAll` precisa ser passado exatamente como no `CSS`0
~~~
document.queryselectorAll(".paragrafo2")[0].textContent = "editado com queryselectorAll"
~~~

- O `QuerySelcetorAll` irá nos retornar um `nodeList` enquanto o `getElementsByClassName` nos retornar um `HTML Collection`. 
- Veremos a diferença entre esses dois objetos mais a frente.
- Se fizermos o `querySelectorAll` passando o `h1` como referencia ele irá nos retornar o `H1`. Porem se fizermos o `querySelectorAll("h1").textContent` nos não conseguimos alterar o elemento.
- Isso acontece pois, apesar de estarmos selecionando um elemento so, com o `querySelectorAll` temos o retorno de uma `nodeList`.

~~~
document.querySelectorAll("h1").textContent = "editando com queryselector" ---> não edita
~~~

- Se quisermos que a edição ocorra, temos que passar o `indice` para o `querySelectorAll` selecionar apenas um elemento.

~~~ 
document.querySelectorAll("h1")[0].textContent = "Editado com queryselector + indice 0"
~~~ 

<br>
<hr>
<br>

## Selecionar na árvore DOM
<br>

Vamos ver um exemplo do `getElementsByTagName` onde poderiamos por exemplo, selecionar todos os paragrafos.

~~~
document.getElementsByTagName("p")

SAIDA: HTMLCollection(3) [p, p.paragrafo2, p.paragrafo2]
~~~

- Vemos na saida que temos `3 paragrafos`. Digamos que queremos pegar o paragrafo apenas do elemento que possui a `id="idmain"`.
- Vamos criar uma variavel para receber esse elemento

~~~
let teste =  document.getElementsById("idmain")

SAIDA: undefined
~~~

- Se digitarmos no console `teste`, essa variavel agora armazena uma referencia para o nosso `main`

~~~
 <main class="cmain" id="idmain"></main>
~~~

- Agora como fazemos para pegar o paragrafo que esta dentro dessa variavel `teste`
- Fazemos uma navegação entre a estrutura hierarquica do `DOM` 

~~~
teste.getElementsByTagName("p")

SAIDA: HTMLCollection [p]
~~~

- Irá nos mostrar um `HTML COllection` com somente um elemento.
- Se fizermos `textContent` não teremos acesso para a edição direta do paragrafo. Porem vimos que se temos uma `Coleção` precisamos passar o `indice` para que a edição funcione.

~~~
teste.getElementsByTagName("p").textContent = "editando sem indice" --> não funcionar a edição

teste.getElementsByTagName("p")[0].textContent = "editando com indice" --> funcionar a edição 

~~~ 

- Observe que agora acessamos somente o paragrafo que se encontra dentro da `id="idmain"`. Os outros dois paragrafos nao foram editados.
- Vamos agora ver um jeito mais facil. Se quisermos pegar o mesmo paragrafo, podemos usar o `querySelector` para editar de forma mais direta da seguinte maneira:

~~~ 
document.querySelector("#idmain p")
~~~

- Lembre que quando usamos o `querySelector` temos que passar exatamente como usariamos no `CSS`, logo basta usar o `#` + `espaço` + `elemento` que queremos selecionar no caso a tag `p`. 

~~~
document.querySelector("#idmain p").textContent = "Editando com querySelector o elemento p" --> Editou o elemento diretamente.
~~~ 

- Vamos ver agora o `idSection` onde possuimos 2 paragrafos.
- Reparem que , dentro do `idSection` temos 2 paragrafos, se a gente fizer `querySelector("#idsection p")` ele irá selecionar, sempre, o primeiro paragrafo.
- Ou seja, o `querySelector` sempre irá nos retornar `um unico objeto`, independente da quantidade de elementos que temos.
- Enquanto que se usarmos o `querySelectorAll` o nosso retorno será uma `Node list` com `2 paragrafos`, precisando de `indice` caso a gente queira fazer a edição.

~~~
document.querySelector("#idsection p")

SAIDA: <p class=​"paragrafo2">​…​</p>​

document.querySelectorAll("#idsection p")

SAIDA: NodeList(2) [p.paragrafo2, p.paragrafo2]
~~~ 

<br>
<hr>
<br>


## Relembrar: onde inserir os nossos scripts?
<br>

Vamos agora fazer umas edições sem utilizar o console e sim o vscode, antes vamos fazer um experimento no console.

~~~
document.querySelector("h1")
<h1 id=​"title1">​Curso Javascript Completo 2018 ​</h1>​

document.querySelector("h1").textContent = "Editado com JS"

~~~

- Vamos copiar o ultimo comando que usamos no console `document.querySelector("h1").textContent = "Editado com JS"`.
- Vamos colocar uma tag `scrip` dentro da tag `head` no nosso arquivo `HTML` no vscode. Vamos salvar e no atualizar o browser para vermos o que acontece.

~~~
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM - Document Object Model</title>

    <script>
        document.querySelector("h1").textContent = "Editado com JS"
    </script>

</head> 
~~~

- Observe que ao atualizarmos a pagina recebemos um erro. Sempre que algo não funcionar no nosso codigo, o `console` é onde observamos o `erro`

~~~
Uncaught TypeError: Cannot set properties of null (setting 'textContent')
    at exemplo1.html:10:50
  (anonymous)	@	exemplo1.html:10
~~~

- Pq será que no browser, o codigo que usamos para editar funciona, porem no vscode não? 
- O que acontece é que, para que esse codigo seja entendido, no caso, `document.querySelector("h1")`, ou seja, não seja um valor nulo, o nosso `HTML` precisa ter sido `parseado/lido/interpretado` pelo browser.
- Porem como nosso `Browser` ler o codigo de cima para baixo, ele irá ler a tag `head/title/meta` e ao chegar na tag `scrip` ele irá mudar a `chave de interpretação do browser`, informando que não esta mais interpretando `HTML` e sim `javascript` para o `motor de renderização do browser`.
- Como ainda não foi passado a parte da `tag body` não existe `h1`, pois ainda não foi lido, logo nesse ponto do codigo `document.querySelector("h1")` é `nulo` e o `nulo` não possui a propriedade `textContent` que é exatamente o que o erro esta informando.
- Logo, toda vez que que estivermos manipulando o `DOM` da pagina `HTML` precisamos `garantir` que o `HTML` em si ja tenha sido `lido e parseado pelo browser`. 
- Tanto que se pegarmos o codigo `javascrip` e colocarmos antes de fechar a tag `body`, garantimos que os objetos dos `DOM` ja existam na memoria fazendo o codigo funcionar.

~~~
<body>
    <h1 id="title1">Curso Javascript Completo 2018 </h1>

    <main class="cmain" id="idmain">
        <h2>subtitulo</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ipsum tempora, repellendus cum distinctio iure, quos suscipit, magnam vel porro alias maiores nostrum magni? Laudantium sed voluptate excepturi voluptatem temporibus.</p>
    </main>

    <section class="csection" id="idsection">
        <h3>subtitulo 3</h3>
        <p class="paragrafo2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto reiciendis! Nobis enim molestias nemo culpa sit distinctio reprehenderit omnis, at error hic animi aspernatur quam eius voluptas veritatis officia.</p>
        <p class="paragrafo2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dignissimos, pariatur, sed aliquid dolorum ipsum libero dolores consequatur, tenetur impedit deserunt voluptatum ullam autem reprehenderit odio sit quo dolore atque.</p>
    </section>
    

    <script>
        document.querySelector("h1").textContent = "Editado com JS (body)"
    </script>

</body> 
~~~

- Por essa razão, colocamos muitas vezes a tag `scrip` antes de fechar o `body`. 
- Existe uma implicação com relação a `performace`, pois o `javascrip` que fica no `head` precisa ser interpretado primeiro antes de mostrar alguma coisa para o usuario. Ja o `javascrip` do `body` nao.


<br>
<hr>
<br>

## Exercicio proposto: saudação
<br>

A ideia é mostrar onde esta escrito `bemvindo(A)` o nome do usuario. Digamos que para o usuario ver essa pagina, ele precise logar, e uma vez logado, temos acesso ao `nome do usuario`.

- Nesta pagina iremos criar uma `variavel` onde iremos colocar o nome do usuario simulando como se tivesse vindo de um banco de dados ou algo do tipo.
- A primeira coisa será a criação de uma arquivo `javascript` e vamos fazer a importação dele no nosso arquivo `html`, antes de fecharmos a tag `body` pois queremos manipular o `DOM`.
- Vamos pensar em nosso arquivo `javascrip` como se fosse um modulo, logo se colocarmos  `functions, variaveis` tudo entrará no `modo global` o que não seria uma boa pratica. `Devemos evitar variaveis e funções globais a todo custo`.
- Logo a primeira coisa que iremos criar no nosso arquivo `javascrip` é uma `função autoinvocavel / anonymous`. Pois estamos trabalhando com o browser e nao estamos utilizando nenhuma ferramenta de `build`. Se tivessemos trabalhando com `web pack` por exemplo, ou criando para o `NodeJS` não iriamos precisar criar uma função anonima.

~~~
[IMPORTAÇÃO DO JAVASCRIPT NO HTML]

<body>
  ...
  <script src="js/saudacao.js"></script>
</body>
~~~

~~~
(function(){
  
}) ()
~~~

- Como vamos receber o `nome do usuario` vamos criar logo uma `constante` para receber esse valor.

~~~
(function(){
  const nomeUsuario = "Angelina(Daniel)"; 
})()
~~~

<br>
<hr>
<br>

## Resolução: Calcular saudação
<br>

- Agora precisamos acessar o elemento `HTML` onde vamos substituir por nossa variavel no `javascript`.

~~~
(function(){
    const userName = "Angelina(Daniel)";
    document.querySelector(".top-bar").textContent = "Bem-vinda(o), " + userName;
})()
~~~

- Ao salvar e atualizar o browser, vemos que conseguimos alterar o `DOM` usando o `javascript`.

Podemos tambem fazer de uma forma diferente. Queremos guardar uma `referencia` desse objeto do `DOM` em uma `variavel`

~~~

(function(){
    const userName = "Angelina(Daniel)";
    // document.querySelector(".top-bar p").textContent = "Bem-vinda(o), " + userName;
    const element = document.querySelector(".top-bar p");

    element.textContent = "Bem-vinda(o), " + userName;
})()
~~~

- Veja que conseguimos o mesmo resultado utilizando a referencia criada.
- Criamos uma constante e atraves dela conseguimos fazer o acesso.

Outra coisa que podemos observar é, temos o `Bem-vindo,` no nosso HTML e no nosso javascrip, porem, se alterarmos no `HTML` o `Bem-vindo` para `Olá` a alteração não será feita pois o nosso codigo no `javascript` irá prevalecer.

- Gostariamos de poder deixar o texto `Bem-vindo/olá` que é apresentado, somente no `html` e somente ter no `javascript` a concatenação com o nome de usuario.
- A propriedade `textContent` serve tanto para definirmos um valor como para `recuperar um valor`.
- Se colocarmos no `console.log(elemento.textContent)`,irá nos mostrar o texto original.
- Logo podemos fazer o seguinte:

~~~
(function(){
    const userName = "Angelina(Daniel)";
    const element = document.querySelector(".top-bar p")
    element.textContent = element.textContent + userName
})()
~~~

- Agora podemos colocar qualquer texto no `html` que será refletido no browser.
- Quando temos a estrutura de `uma variavel + alguma coisa` podemos escrever de outra formar:

~~~
element.textContent += username
~~~

<br>
<hr>
<br>

## Inserir tags HTML
<br>

Continuando, agora queremos mostrar o `nome de usuario` em negrito.

- Podemos fazer no proprio javascript a concatenação da tag `b` com a variavel que possui o nome de usuario.
~~~
  element.textContent += "<br>" + userName + "</b>";
~~~

- Se dermos um F5 veremos que não funciou (foi representado no html a tag normal), isso acontece pois estamos utilizando a propriedade `textContent` e ela não compreende `tags html`.
- Vamos precisar utilizar uma propriedade chamada `innerHTML`. Essa propriedade vai pegar as tags que forem inseridas e `renderiza-las`, ou seja, pegar o codigo HTML e mostrar na tela da maneira apropriada.

~~~
  element.innerHTML = "<br>" + userName + "</b>";
~~~ 

- Essa é a diferença entre `textContent` e `innerHTML`.
- Temos tambem a propriedade `innerText`, que pe semelhante quando vamos alterar, porem diferente quando queremos resgatar um valor, veremos mais a frente.

<br>
<hr>
<br>

## Esconder elemento
<br>

Agora o que iremos fazer é simular essa mesma pagina que estamos trabalhando, mas como se o usuario não estivesse logado.

- Digamos que o usuario irá acessar essa pagina, so que, o que estiver em  `username` será uma string vazia, nulo, ou qualquer coisa do tipo.
- Digamos que fizemos uma requisição para o servidor para recuperar o nome do usuario logado porem esse nome não existe. O que poderiamos fazer?


~~~ 
(function(){
    // checagem para ver se esta logado.
    const username = null;
    const element = document.querySelector(".top-bar p");
    if(username){
        console.log(element.textContent)
        element.innerHTML += "<b>" + username + "</b>";
    }
})()
~~~

- Percebam que se salvarmos da maneira que esta, não iremos receber o nome do usuario, somente o texto do `HTML`.
- Caso não tenha nome de usuario, queremos pegar o nosso paragrafo e esconde-lo, temos varias formas de fazer isso:
  - colocar display:none no css; ou com style in line
  - podemos remover ele da pagina
  - etc..
- Vamos ver como fazer um `display:none`  no elemento,utilizando o `.style` que iremos nos permitir escrever estilos em linha.

~~~ 
const username = null;
    const element = document.querySelector(".top-bar p");
    if(username){
        console.log(element.textContent)
        element.innerHTML += "<b>" + username + "</b>";
    }else{
        element.style.display = "none";
    }
~~~

- Agora quando testamos, nao temos mais o paragrafo, somente mosrtando a barra preta.
- Porem o que queremos esconder não é o paragrafo que seria a `const element` e sim o pai dele, o elemento que possui a classe `top-bar`.
- Poderiamos usar o `querySelector`, mas vamos fazer de uma maneira que a gente veja a `navegação da hierarquia do DOM`. Tanto acessar os filhos, como acessar o pai.
- Vamos observar primeiro o que acontence usando o console.

~~~ 
const element = document.querySelector(".top-bar p");

SAIDA: <p style="display: none;">Olá, </p>

element.parentNode
element.parentElement
~~~

- `parentNode` ou `parentElement`, temos como resposta o elemento pai do elemento `p` que seria o elemento cuja classe é `top-bar`
- Logo, utilizamos o `parentElement` para fazer com que todo o elemento seja escondido. 

~~~
const username = null;
    const element = document.querySelector(".top-bar p");
    if(username){
        console.log(element.textContent)
        element.innerHTML += "<b>" + username + "</b>";
    }else{
        // escondedo tag p especifica
        element.style.display = "none";
        // escondendo todo o elemento pai
        element.parentElement.style.display = "none";
    } 
~~~

- Da mesma forma que acessamos os pais, podemos acessar os filhos.
- `element` é o nosso paragrafo, vamos criar uma variavel `pai` para receber o `parentElement`. Logo o pai será a div que possui o `top-bar`

~~~ 
const element = document.querySelector(".top-bar p");

pai = element.parentElement
<div class=​"top-bar" style=​"display:​ none;​">​…​</div>​

pai.children
SAIDA: HTMLCollection [p]
~~~ 

- QUando usamos a propriedade `children` eles nos mostra todos os filhos que esse elemento possui.

~~~ 
document.querySelector("body").children

SAIDA: 

HTMLCollection(3) [div#principal, script, script, principal: div#principal]
~~~ 

<br>
<hr>
<br>

## Remover elemento
<br>

A abordagem de colocar o `display=none` resolve para o usuario, que não irá mais ver a barra escuro no topo da barra, porem ela ainda esta no `html`. Podemos mudar um pouco essa abordagem, ao inves de dar um `display=none` queremos `remover` o elemento do `DOM`. 

O jeito mais facil de fazer isso é assim: 

- Caso o nome do usuario nao exista, vamos cair no bloco `else{}`, precisamos pegar o elemento `pai` pois é ele que vamos remover.
- Para demonstração vamos primeiro remover o paragrafo
~~~
elemento.remove();
~~~

- Agora quando inspecionamos no `DOM` temos a `div = top-bar` porem o elemento html do paragrafo foi removido da arvore do DOM.
- O problema do `.remove()` é que não irá funcionar em nenhuma versão do `Internet Explorer`.

Vamos agora ver uma outra forma. Para remover um elemento de uma forma que funcione no `IE11`:

- Primeiro precisamos acessar a `Mae` do elemento que queremos remover, por exemplo queremos remover o `top-bar`, para isso temos que acessar a `Mae` do `top-bar` no caso o `hero` e a partir dele pedir que remova o elemento `filho` que é o `top-bar` usando o `.removeChild`.
- Criamos uma constante e damos o valor a ele de `element.parentElement`

~~~ 
const elementForRemove = element.parentElement;
~~~

- A partir dessa constante que criamos vamos acessar a `MAe` dele, ou seja:


~~~
elementForRemove.parentElement .removeChild(elementForRemove);
~~~

- Percebam que agora não existe mais o elemento [`top-bar`].

Percebam que ao fazer constantes atualizações da pagina, o elemento é mostrado rapidamente e depois removido, mostrando que essa abordagem ainda possui falhas, ou seja, ao inves de criar o elemento no hmtl, e no javascript esconder esse elemento temos que fazer o contrario.

Verificar se temos o nome do usuario, vamos `criar dinamicamente` esse elemento de `top-bar` e `inserir` no DOM, e nao fazer a remoção do que foi incluido no HTML. Vamos fazer o oposto:

- `criar o elemento (JS)`
- Se tiver o nome do usuario `incluir um elemento no dom`.

<br>
<hr>
<br>

## Criar elemento
<br>

<br>
<hr>
<br>

## Simular o cadastro de e-mail
<br>

<br>
<hr>
<br>

## Habilitar ou desabilitar um input
<br>

<br>
<hr>
<br>

## Propriedades
<br>

<br>
<hr>
<br>

## Desafio: checkbox
<br>

<br>
<hr>
<br>

## Resolução: checkbox
<br>

<br>
<hr>
<br>