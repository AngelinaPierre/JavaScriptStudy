# Seção 02 - Revisão Lógica de Programação.

<br>
<hr>

## 11. Introdução

<br>
<hr>
<br>

## Variaveis

<br>
<hr>
<br>

## Tipos de dados primitivos

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
<hr>
<br>


## Operadores Aritmeticos

<br>
<hr>
<br>


## Operadores de atribuição

<br>
<hr>
<br>


## Incremento e Decremento

<br>
<hr>
<br>


## Operadores de Comparação

<br>
<hr>
<br>


## Operadores Lógicos

<br>
<hr>
<br>


## Precedência de Operadores

<br>
<hr>
<br>


## Condicional IF-ELSE

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
