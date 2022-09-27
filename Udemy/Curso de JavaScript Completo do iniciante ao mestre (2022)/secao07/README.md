# SEÇÃO 07 - EXERCICIO PROPOSTO: LISTA DE ALUNOS

<br>

## Introdução

<br>

Vamos construir uma pagina de notas e medias dos alunos.

- Dentro da pasta `js` vamos colocar um arquivo javascript chamado `calc.js` que terá as funções de `sum()` e `average()` que criamos em aulas passadas, na versão dos ES6.
- Temos que fazer o import dentro do html desse `calc.js` pois iremos usar ele para calcular a media.

A ideia é que a gente tem que fazer seria pegar todas as `tr` para acessar as `rows` da `tbody` e colocar o valor da media.

- A primeira coisa que iremos fazer no `script` do html, é criar uma função anonima para evitar poluir o escopo global.
- Dentro desta função iremos criar uma constante `trs` para armazenar todas as nossas `tr`, usando o `querySelectorAll()`

```

<script>
    (function(){
        const trs = document.querySelectorAll("tbody tr");
    })()
</script>

// SAIDA:
NodeList(10) [tr, tr, tr, tr, tr, tr, tr, tr, tr, tr]
```

- Vemos na saida desse codigo, todas as `trs` que temos no nosso html/tabela.
- Dentro de cada `tr` queremos selecionar tbm as `tds`, logo criamos outra constante para armazenar essas `tds`.
- Temos que lembrar que toda informação que vem da interface do usuario, vem em forma de `String`.
- Vejam que ao colocar o sinal de `+` os elementos foram concatenados e não somados, mostrando que é uma string.

```
[CONSOLE BROWSER]

teste = document.querySelectorAll("tbody tr");
NodeList(10) [tr, tr, tr, tr, tr, tr, tr, tr, tr, tr]
teste[0]
<tr>​…​</tr>​
teste[0].querySelectorAll("td")
NodeList(6) [td, td, td, td, td, td]
teste[0].querySelectorAll("td")[1]
<td>​10​</td>​
teste[0].querySelectorAll("td")[1].textContent
'10'
teste[0].querySelectorAll("td")[1].textContent + teste[0].querySelectorAll("td")[2].textContent
'103'
```

- São com esses comandos que percorrermos os elementos do DOM no mundo do javascript, claro que não iremos escrever isso para cada elemento, basta colocarmos dentro de um loop.
- Para isso vamos criar uma variavel `x` que irá servir como um contador para usarmos dentro de um loop `while()`, como condição do loop, ou seja, o loop irá rodar, enquanto tivermos `trs` no indice do contador.
- Vamos por enquanto mostrar no console a saida desse loop.

```
<script>
        (function(){
          const trs = document.querySelectorAll("tbody tr");

          let x = 0;

          while(trs[x]){
            console.log(trs[x]);
            x++;
          }
        })()
      </script>

// SAIDA:

> <tr>...</tr>
> <tr>...</tr>
> <tr>...</tr>
> <tr>...</tr>
> <tr>...</tr>
> <tr>...</tr>
> <tr>...</tr>
> <tr>...</tr>
> <tr>...</tr>
> <tr>...</tr>
```

- Podemos ver na saida do `console.lo()` que o loop nos trouxe cada uma das `trs` com seus elementos filhos que no caso são as `tds`.
- Vamos agora recuperar as `tds`, para isso vamos criar uma constante chamada `tds` que recebera as `trs` no indice `x` cuja a primeira iteração será `0`, selecionando a primeira `td`

```
<script>
        (function(){
          const trs = document.querySelectorAll("tbody tr");

          let x = 0;

          while(trs[x]){

            console.log(trs[x]);

            const tds = trs[x].querySelectorAll("td");
            console.log(tds);
            x++;
          }
        })()
      </script>
```

![](./assets/cap1.png)
<br>

- Como podemos ver na saida do console.log(), temos a `tr` com suas respectivas `tds` sendo mostradas como uma `nodeList`.
- Agora que temos nossas `tds`, vamos criar uma variavel chamada `media` que irá receber o valor da soma das `tds` que possuem as notas.
- Dentro do loop, iremos chamar a função que criamos para o calculo da media `avarege()`, e dentro dessa função, iremos passar os valores das `tds` nos indices `1,2,3,4` so que convertidos para numero em vez de strings, para não ocorrer a concatenação em vez da soma, e usando o `.textContent` para recuperar os valores.

```
<script>
        (function(){
          const trs = document.querySelectorAll("tbody tr");

          let media = 0;
          let x = 0;

          while(trs[x]){

            console.log(trs[x]);

            const tds = trs[x].querySelectorAll("td");
            console.log(tds);

            media =  avarege(
              parseFloat(tds[1].textContent),
              parseFloat(tds[2].textContent),
              parseFloat(tds[3].textContent),
              parseFloat(tds[4].textContent),
            );
            x++;
          }
        })()
      </script>
```

- No codigo acima, estamos passando `4 parametros` para a função `avarege()`.
- Agora que temos a media sendo calculada pela função, temos que pegar a ultima `td` que seria o lugar onde teriamos a media, ou seja, a `td` com `indice=5`, usando o `.textContent` para atribuir o valor da media que foi calculada nessa `td`.

```
<script>
        (function(){
          const trs = document.querySelectorAll("tbody tr");

          let media = 0;
          let x = 0;

          while(trs[x]){

            console.log(trs[x]);

            const tds = trs[x].querySelectorAll("td");
            console.log(tds);

            media =  avarege(
              parseFloat(tds[1].textContent),
              parseFloat(tds[2].textContent),
              parseFloat(tds[3].textContent),
              parseFloat(tds[4].textContent),
            );
            x++;

            tds[5].textContent = media;
          }
        })()
      </script>
```

- Podemos ver agora no browser que os valores das medias estão sendo colocados via `loop while` em todas as `tds`.

Fizemos assim um pequeno exemplo sobre como percorrer elementos do DOM usando um `loop`, porem temos alguns problemas com a forma que construimos nosso codigo.

Na hora de passar os valores para a função de `avarege()` estamos usando numeros estaticos para acessar as `tds`, isso gera um problema futuro na caso da gente querer adicionar mais elementos na nossa tabela, pois teremos que fazer a alteração individual de cada indice.

Existem varias formas de melhorar nosso codigo, poderiamos criar algumas `classes` nas nossas `tds` que recebem a media, que ao inves de selecionar pelo indice, selecionariamos pela classe.

```
<td class="aluno-media"></td>
```

Poderiamos usar um atributo para fazer essa seleção tbm, e dentro do javascript selecionariamos esse atributo usando o `document.queryselector("[aluno-media]").textContent`.

```
<td aluno-media></td>
```

O que iremos fazer nesse momento para não passar esses valores estaticamente, será colocar um atributo na nossa `ths`, pois o `indice` das nossas `ths` são exetamente os indices correspondentes das nossas `tds`.

Por exemplo, na `th` de `media`, se na `th indice = 5`, significa que o lugar que a media esta sendo representada nas `tds` tbm é no indice `5`. Pois essa coluna dentro do `tbody` esta linkada a posição da `th` dentro da `thead`. Logo usaremos esse `ths` para decidir onde cada informação mora dentro do `tbody`.

- Vamos criar primeiro o atributo dentro das `ths`

```
<thead>
    <tr>
        <th>Nome</th>
        <th aluno-nota="n1">Nota 1</th>
        <th aluno-nota="n2">Nota 2</th>
        <th aluno-nota="n3">Nota 3</th>
        <th aluno-nota="n4">Nota 4</th>
        <th aluno-nota="media">Média</th>

    </tr>
</thead>
```

- Agora temos alguns atributos que vao nos orientar onde reside cada uma dessas `tds/notas`.
- Porem agora, precisamos recuperar no javascript o `indice/posição` de cada um desses elementos dentro dessa `thead tr`.
- Para isso, vamos criar uma constante chamada `INDICES_NOTAS` que será um objeto onde iremos criar variaveis que recembem esses indices.
- Temos que lembrar de colocar o `;` depois desse objeto ou antes do começo da função anonima, pois se nao o codigo não irá funcionar.

```
<script>

        const INDICES_NOTAS = {
          n1: 1,
          n2: 2,
          n3: 3,
          n4: 4,
          media: 5,
        };

        (function(){
          const trs = document.querySelectorAll("tbody tr");

          let media = 0;
          let x = 0;

          while(trs[x]){

            console.log(trs[x]);

            const tds = trs[x].querySelectorAll("td");
            console.log(tds);

            media =  avarege(
              parseFloat(tds[1].textContent),
              parseFloat(tds[2].textContent),
              parseFloat(tds[3].textContent),
              parseFloat(tds[4].textContent),
            );
            x++;
            tds[5].textContent = media;
          }
        })()
```

- Apos a criação desse objeto, alteramos a maneira como passamos as notas para a função e tbm como colocamos o valor que recebemos da função dentro da `td` de media, usando a sintaxe `[INDICES_NOTAS.n1]`.

```
<script>

    const INDICES_NOTAS = {
        n1: 1,
        n2: 2,
        n3: 3,
        n4: 4,
        media: 5,
    };

    (function(){
        const trs = document.querySelectorAll("tbody tr");

        let media = 0;
        let x = 0;

        while(trs[x]){

        console.log(trs[x]);

        const tds = trs[x].querySelectorAll("td");
        console.log(tds);

        media =  avarege(
            parseFloat(tds[INDICES_NOTAS.n1].textContent),
            parseFloat(tds[INDICES_NOTAS.n2].textContent),
            parseFloat(tds[INDICES_NOTAS.n3].textContent),
            parseFloat(tds[INDICES_NOTAS.n4].textContent),
        );
        x++;

        tds[INDICES_NOTAS.media].textContent = media;
        }
    })()
    </script>
```

Porem, mesmo fazendo essas alterações, se mudarmos a estrutura da tabela, ainda teriamos que lembrar de mudar dentro do objeto os valores.

A ideia é que esse objeto seja construido `dinamicamente`, a partir dos elementos com atributos da `th`. Vamos fazer isso na proxima aula, vamos popular o objeto `INDICES_NOTAS`, usando os atributos que criamos no elemento `th` do DOM.

<br>
<hr>
<br>

## ERRATA: Correção de gramatica em ingles
<br>

Como muito bem observado pelo aluno André Torelli, cometi uma falha ao escrever "média" em inglês.

O correto é: average

"Aqui nós aprendemos programação e inglês. Nós somos o bixão memo hein doido."

Pra quem não pegou a referência do meme, lá vai: https://www.youtube.com/watch?v=MiQ_OSW9pLM

Bons estudos

<br>
<hr>
<br>

## MELHORIA: Obter o indice de nossa coleção de objetos DOM

<br>

<br>
<hr>
<br>

## MELHORIA: Gerar INDICE_NOTAS dinamicamente
<br>

Vamos fazer alguma alterações para gerar esse objeto `INDICES_NOTAS` dinamicamente.

- Vamos mudar o escopo do objeto `INDICES_NOTAS` de global para dentro da função anonima.

~~~
<script>

        (function(){
          const INDICES_NOTAS = {
            n1: 1,
            n2: 2,
            n3: 3,
            n4: 4,
            media: 5,
          };
          const trs = document.querySelectorAll("tbody tr");
          
          let media = 0;
          let x = 0;
          
          while(trs[x]){

            console.log(trs[x]);

            const tds = trs[x].querySelectorAll("td");
            console.log(tds);

            media =  avarege(
              parseFloat(tds[INDICES_NOTAS.n1].textContent),
              parseFloat(tds[INDICES_NOTAS.n2].textContent),
              parseFloat(tds[INDICES_NOTAS.n3].textContent),
              parseFloat(tds[INDICES_NOTAS.n4].textContent),
            );
            x++;

            tds[INDICES_NOTAS.media].textContent = media;
          }
        })()
      </script>
~~~

- Agora iremos percorrer as `ths` que estão dentro da `thead tr` para poder recuperar o `indice` dos atributos que criamos nessas `ths`.
- Existem algumas maneiras de fazermos isso, uma mais simples, e uma mais complexa, vamos começar pela simples.
- Basicamente iremos criar uma função(`pegaIndice`), para pegar o indice dos atributos que criamos nas `ths` e chamar essa função dentro do nosso objeto `INDICES_NOTAS`, passando a String/indice que queremos pegar.

~~~
[EXEMPLO]

const INDICES_NOTAS = {
    n1: pegarIndice("n1"),
    n2: pegarIndice("n2"),
    n3: pegarIndice("n3"),
    n4: pegarIndice("n4"),
    media: pegarIndice("media"),
}
~~~

- Como ainda não temos essa função vamos cria-la.
- Esssa função irá receber como parametro uma string `indice` que irá nos auxiliar a achar o indice do elemento que queremos no DOM.
- Vamos usar o metodo `.indexOf()` para recuperarmos os indices das `thd` que queremos recuperar os valores. Ou seja, a partir de todas as ths, vamos usar o `.indexOf()` dos elementos que possuem os atributos. Logo vamos procurar o `.indexOf()` a partir da coleção inteira de ths, pois se no futuro alterarmos a tabela, iria quebrar o codigo.
- A primeira coisa que iremos fazer na função, será criar uma constante chamada `trHeader`, que recebera a `tr` que possui as `ths` que queremos.

~~~ 
function pegaIndice(){
    const trHeader = document.querySelector("thead tr");
    console.log(trHeader);
}
~~~

- Agora iremos criar outra constante chamada `thsHeader` que a partir desta `tr` que recuperamos, irá nos ajudar a selecionar a `th` com o `indice` que queremos.

~~~
function pegaIndice(){
    const trHeader = document.querySelector("thead tr");
    const thsHeader = document.querySelectorAll("th");
    console.log(thsHeader);
}
~~~

- Agora que temos a coleção de `ths` dentro da constante `thsHeader`, precisamos selecionar o objeto/elemento cujo o atributo `aluno-nota`, seja igual ao parametro que foi passado para a função.
- Para isso, tbm criamos uma constante que irá salvar esse valor.

~~~
function pegaIndice(ind){
    const trHeader = document.querySelector("thead tr");
    const thsHeader = trHeader.querySelectorAll("th");
    console.log(thsHeader);

    const th = trHeader.querySelector(`[aluno-nota="${ind}"]`);
    console.log(th);
}
~~~ 

- Agora, temos que recuperar o `indice` dessa consnstante `th` que criamos, na coleção `thsHeader`.
- Teriamos algo do tipo `thsHeader.indexOf(th);` porem `thsHeader` que é uma nodeList não possui o metodo `.indexOf` que seria de um array, temos que transformar esse `thsHeader` em um array ou usar o `prototype`.
- Usando o prototype, como primeira parametro da função `.call()` passariamos o `thsHeader` e como segundo parametro o `th`.
- E colocando como retorno da função a constante que esta recebendo o retorno dessa chamada.

~~~
function pegaIndice(ind){
    const trHeader = document.querySelector("thead tr");
    const thsHeader = trHeader.querySelectorAll("th");

    const th = trHeader.querySelector(`[aluno-nota="${ind}"]`);

    // sintaxe antiga
    const indice = Array.prototype.indexOf.call(thsHeader, th);

    return indice;
}
~~~

- Essa seria uma das formas de fazer a conversão, ou pederiamos tbm utilizar uma sintaxe mais moderna...
- Criamos um `Array` a partir da coleção/nodeList de `thsHeader` usando o `Array.from(thsHeader)`, chamamos o `.indexOf()` passando o `th` que queremos selecionar.

~~~ 
function pegaIndice(ind){
    const trHeader = document.querySelector("thead tr");
    const thsHeader = trHeader.querySelectorAll("th");

    const th = trHeader.querySelector(`[aluno-nota="${ind}"]`);

    const indice = Array.from(thsHeader).indexOf(th);
    return indice;
}
~~~

- Outra forma seria utilizando o `spread operator` que irá transformar essa `nodeLIst` que esta na constante `thsHeader` em elementos individuais.

~~~
function pegaIndice(ind){
    const trHeader = document.querySelector("thead tr");
    const thsHeader = trHeader.querySelectorAll("th");

    const th = trHeader.querySelector(`[aluno-nota="${ind}"]`);

    // spread operator
    const indice = [...thsHeader].indexOf(th);
    return indice;
}
~~~

Quando usamos o `console.lgo()` em cima de `INDICES_NOTAS` vemos que ele retonar um objeto com os indices que recuperamos.

~~~
{n1: 1, n2: 2, n3: 3, n4: 4, media: 5} 
~~~

Existe mais uma forma de melhorarmos o nosso codigo, poderiamos criar uma função que percorre o nosso `th` e alimenta o objeto de `INDICES_NOTAS` dinamicamente usando os atributos, por exemplo, propriedade `n1`  recebe o numero `1` do indice..

No proximo video iremos criar dinamicamente a partir do DOM toda essa logica que ja fizemos.

<br>
<hr>
<br>

## Gerar linhas e colunas a partir de uma estrutura de dados

<br>

Agora iremos popular o nosso objeto `INDICES_NOTAS` de forma dinamica a partir dos atributos que temos dentro do nosso `thead`.

- A primeira coisa que iremos fazer será mudar o escopo das variaveis `trHeader e thsHeader` para o escopo da função anonima, podendo assim acessa-las fora da função de `pegaIndice()`

~~~
<script>
    (function(){
        
        const trHeader = document.querySelector("thead tr");
        const thsHeader = trHeader.querySelectorAll("th");

        function pegaIndice(ind){

        const th = trHeader.querySelector(`[aluno-nota="${ind}"]`);

        // spread operator
        const indice = [...thsHeader].indexOf(th);
        return indice;
        }
        const INDICES_NOTAS = {
        n1: pegaIndice("n1"),
        n2: pegaIndice("n2"),
        n3: pegaIndice("n3"),
        n4: pegaIndice("n4"),
        media: pegaIndice("media"),
        };
        const trs = document.querySelectorAll("tbody tr");
        
        let media = 0;
        let x = 0;
        
        while(trs[x]){
        const tds = trs[x].querySelectorAll("td");
        media =  avarege(
            parseFloat(tds[INDICES_NOTAS.n1].textContent),
            parseFloat(tds[INDICES_NOTAS.n2].textContent),
            parseFloat(tds[INDICES_NOTAS.n3].textContent),
            parseFloat(tds[INDICES_NOTAS.n4].textContent),
        );
        x++;

        tds[INDICES_NOTAS.media].textContent = media;
        }
    })()
    </script>
~~~

- Agora iremos apagar o codigo que temos dentro do objeto `INDICES_NOTAS` tornando ele um objeto vazio, para servir de estrutura para quando formos popular ele dinamicamente.

~~~
const INDICES_NOTAS = {} 
~~~

- Temos que percorrer as `ths` que possui o atributo `aluno-nota` que queremos, para isso, temos que criar uma coleção/nodeList que possua `somente` essas `ths` com atributo `aluno-nota`, excluindo por exemplo o `th nome`, ou qualquer outra `th` que possa aparecer no futuro e não tenha esse atributo.
- Para isso vamos criar uma constante chamada `thsAlunoNota` para receber a coleção de `ths` que possuem o atributo `aluno-nota`.

~~~
const trHeader = document.querySelector("thead tr");
const thsHeader = trHeader.querySelectorAll("th");
const thsAlunoNota = trHeader.querySelectorAll("[aluno-nota]");
console.log(thsAlunoNota); 

// SAIDA:
NodeList(5) [th, th, th, th, th]
~~~

- Vemos pelo console.log() que a nossa coleção `thsAlunoNota` so possui os `ths` com o atributo `[aluno-nota]` que especificamos, excluindo assim o `th`que possui o `nome` do aluno.
- Agora iremos percorrer essa coleção de `ths` chamada `thsAlunoNotas` e vamos armazenar dentro do nosso objeto `INDICES_NOTAS`, propriedade `n1,n2...` e o valor `indice do th na coleção thsAlunoNota`.
- Para isso, transformamos nossa coleção `thsAlunoNotas` em um `array` para podermos usar o metood `.forEach()`.
- No `.forEach()` iremos passar como primeiro parametro uma função que recebera como parametro o `th` que queremos. Não vamos precisar colocar o indice da função como segundo parametro pois não é o indice que estamos buscando. 

~~~
(function(){

    const trHeader = document.querySelector("thead tr");
    const thsHeader = trHeader.querySelectorAll("th");
    const thsAlunoNota = trHeader.querySelectorAll("[aluno-nota]");
    const INDICES_NOTAS = {};

    Array.from(thsAlunoNota).forEach(function(){
    
    });

    function pegaIndice(ind){

    const th = trHeader.querySelector(`[aluno-nota="${ind}"]`);

    // spread operator
    const indice = [...thsHeader].indexOf(th);
    return indice;
    }
    
    const trs = document.querySelectorAll("tbody tr");
    
    let media = 0;
    let x = 0;
    
    while(trs[x]){
    const tds = trs[x].querySelectorAll("td");
    media =  avarege(
        parseFloat(tds[INDICES_NOTAS.n1].textContent),
        parseFloat(tds[INDICES_NOTAS.n2].textContent),
        parseFloat(tds[INDICES_NOTAS.n3].textContent),
        parseFloat(tds[INDICES_NOTAS.n4].textContent),
    );
    x++;

    tds[INDICES_NOTAS.media].textContent = media;
    }
})()
~~~

- Agora dentro da função do `forEach()`, temos que buscar o valor da propriedade do atributo `aluno-nota`. Como fazemos para recuperar uma propriedade de um objeto?
- Ja recuperamos a propriedade `checked`, a propriedade `disable`, `value` de um input. Mas nem todas as propriedades podem ser recuperadas de uma forma tao simples somente colocando o ponto e o nome da propriedade. 
- Para algumas propriedades precisamos usar um metodo especifico para esse objetivo. Vamos ver no console.log() a chamada `th.getAttribute` para vermos o que recebemos como saida.
- O `.getAttribute()` nos permite recuperar o `valor` de uma propriedade. Que no caso, a propriedade que estamos buscando é `aluno-nota`, e o valor sendo `n1,n2,n3..`.

~~~
Array.from(thsAlunoNota).forEach(function(th){
console.log(th.getAttribute("aluno-nota"));    
});

// SAIDA:

n1
n2
n3
n4
media
~~~

- Agora que sabemos como pegar o valor de uma propriedade, vamos utilizar esse valor `n1,n2..` para popular o nosso objeto `INDICE_NOTAS`.
- Para popular o objeto vamos utilizar a sintaxe de `colchetes []` passando uma variavel(`valAtt`) que recebe o `th.getAttribute("aluno-nota");`.
- O valor que o `INDICE_NOTAS[valATT]` irá receber como valor o retorno da função `pegaIndice()` onde passamos o `indice` que queremos como atributo, ou seja, a propria `valAtt`.

~~~
[FUNÇÃO ANONIMA]
const trHeader = document.querySelector("thead tr");
    const thsHeader = trHeader.querySelectorAll("th");
    const thsAlunoNota = trHeader.querySelectorAll("[aluno-nota]");
    const INDICES_NOTAS = {};

    Array.from(thsAlunoNota).forEach(function(th){
    let valAtt = th.getAttribute("aluno-nota");
    console.log(valAtt);
    INDICES_NOTAS[valAtt] = pegaIndice(valAtt);
});
~~~

- Agora podemos ver no browser que nosso codigo voltou a funcionar e estamos populando o nosso objeto de forma dinamica, fazendo com que ao adicionar ou remover itens da nossa tabela, o nosso codigo não quebre.
- Podemos ver no console.log() do nosso objeto, que temos o mesmo resultado que antes porem com o objeto sendo populado dinamicamente e nao estaticamente.

Na proxima aula, faremos uma variação desse mesmo exercio, onde teremos um `array de objetos` com todas as informações, e vamos mostrar dentro da `tbody`, essas informações de forma dinamica. Sem que nenhum dado esteja inserido previamente no html.

<br>
<hr>
<br>

## A estrutura de dados mudou. Precisamos refletir no DOM

<br>

<br>
<hr>
<br>

## Resolução: Desafio

<br>

<br>
<hr>
<br>

## Resolução: Desafio 2

<br>

<br>
<hr>
<br>

## Finalizar a seção.

<br>

<br>
<hr>
<br>
