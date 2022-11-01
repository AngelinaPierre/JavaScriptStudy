# SEÇÃO 20 - INTRODUÇÃO A ORIENTAÇÃO A OBJETOS

<br>

## Introdução
<br>

### Orientação a Objetos (POO)

Paradigma de programação baseada na interação entre objetos.

Um objeto é uma unidade que une dados (propriedades) e suas funções (métodos). Ou seja, é um conjutno de dados formado po `chave:valor`. Vimos tbm que um `array` é uma estrutura de dados que armazena os dados baseados em um `indice`. Quando falamos de objetos, armazenamos cada valor em uma `chave`.

<br>

### Vantagem:

Coesão de dados e comportamentos agrupados.

![](./assets/cap1.png)

- No lado esquerdo temos a lista e o telefone onde o telefone é a função e a lista os dados.
- Na esquerda temos o celular que seria a `coesão` de `dados e comportamentos` agrupados.

<br>

### Orientação a objetos em JS e a clássica

Em Javascript, a POO se dá através de protótipos (prototypes). 

> Na POO, um objeto pe criado a partir de um `classe`.

> Na POO, uma `classe` é uma `especificação` (um molde) para criar objetos.

![](./assets/cap2.png)

- Na imagem acima temos um `projeto` de um `objeto do tipo cadeira`. Logo é a partir de um `projeto/classe` de uma cadeira que iremos `gerar objetos do tipo cadeira`.

![](./assets/cap3.png)

- Observem que é este `projeto/classe` cadeira, existe algumas `propriedades e metodos` como mostrado na imagem acima.

![](./assets/cap4.png)

- A partir deste `projeto/classe` geramos os nossos `objetos do tipo cadeira` como mostrado na imagem acima.
- Logo, uma `especificação/projeto/classe` de uma cadeira nos permite ter `varios objetos do tipo cadeira`. Não sendo necessario termos apenas `um objeto por classe`.
- Observe tbm que `cada objeto criado` é `unico`. Se modificarmos `um objeto` não vamos `alterar a especificação/projeto/molde/classe` daquela cadeira, estamos alterando apenas `aquele objeto`.
- Porem o oposto é diferente. Se alterarmos a `especificação` da cadeira, iremos `alterar todos os objetos` gerados a partir daquela `especificação/projeto/molde/classe`.


> Sempre que falamos `criar um objeto do tipo cadeira` a partir de uma especificação/projeto/molde/classe de cadeira, estamos falando de `INSTANCIAS DA CLASSE CADEIRA`.

Logo quando criamos um `objeto do tipo cadeira` estamo na verdade criando uma `instancia da classe cadeira`.

Na POO nunca usamos diretamente a `classe` e sim trabalhamos sempre em cima dos `objetos gerados a partir daquela classe`. Ninguem senta num prototipo/projeto de uma cadeira.

Vamos observar uma outra situação onde digamos que a partir de uma `cadeira qualquer`, queremos `modifica-la`, como mostrado na imagem abaixo.

![](./assets/cap5.png)

- Teriamos que criar um novo projeto? Sim, vamos precisar ter um outro projeto, porem ja aprendemos muita coisa construindo o `projeto original`. Por exemplo, ja sabemos o `material utilzado` o `numero de parafusos`...
- Logo, quando precisarmos de um outro tipo de cadeira, podemos `reaproveitar` tudo que ja fizemos no `projeto de cadeira original`. Isso é o que chamamos de `reutilizar propriedades e metodos comuns` ou comumente conhecido como `HERANÇA`.
- Onde criamos uma outra classe que irá `herdar` propriedades de metodos da `classe original` com a habilidade de se criar novas propriedades e metodos pertencentes a `nova classe` sem alterar a `classe original`.

> No javascript `Herança` ocorre por meio de seu `protótipo`.

> A POO `não é` reutilização de código.

![](./assets/cap6.png)

- Imagine que voce tem a `classe contaCorrente` com propriedades e metodos como mostrado na imagem acima.
- Essa classe irá gerar `objetos/instancias do tipo contaCorrente`.  

> Uma conta corrente é parecida com uma conta poupança.

![](./assets/cap7.png)

- Como não temos um tipo de conta, podemos fazer uma copia da `contaCorrente` e mudar o nome para `contaPoupanca`, tendo assim duas classes.
- Porem, se quisermos alterar o codigo, teremos que lembrar de fazer a alteração tanto na `contaCorrente` quando na `contaPoupanca`.
- Esse é o perigo em pensar em POO como `reutilização de codigo`. Quando na verdade temos que pensar em `manutenção do codigo`, onde caso tenhamos uma classe chamada `conta` e usando o conceito de `herança` criarmos duas classes `contaCorrente` e `contaPoupanca` poderemos fazer uma alteração que irá refletir nas demais classes.

> Precisamos fazer as duas contas herdarem de uma classe menos especifica.

![](./assets/cap8.png)

- Temos uma `classe Abstrata` chamada de `Contabancaria` onde essa `contaBancaria` precisa ser ou `contaCorrente ou contaPoupanca`.

![](./assets/cap9.png)

-  Na classe `contaBancaria` colocamos tudo o que será comum nas `classes concretas`.
-  O que é `especifico` para cada tipo de conta, colocamos em suas respectivas `classes Concretas`.

> `Classe Genérica` é `abstrata`.
> `Classe Específica` é `Concreta`.

![](./assets/cap10.png)

### Herança

- Uma conta poupança É uma conta bancaria
- Uma conta corrente É uma conta bancaria

### Associação

- Uma conta bancária TEM um cliente.
- Uma conta bancária NÃO É um cliente.

![](./assets/cap11.png)

- Temos um objeto `cliente` que esta `compondo` uma `conta bancaria`.

![](./assets/cap12.png)

> Não podemos criar `objetos/instancias` de `CLASSES ABSTRATAS`.

![](./assets/cap13.png)




<br>
<hr>
<br>

## ES5 vs ES6
<br>

<br>
<hr>
<br>

## prototype
<br>

<br>
<hr>
<br>

## Momento de reflexão
<br>

<br>
<hr>
<br>

## Herança com prototype
<br>

<br>
<hr>
<br>

## hasOwnoperty, intanceOf, isPrototypeOf, getPrototypeOf
<br>

<br>
<hr>
<br>

## Melhor lugar para inserir o construtor
<br>

<br>
<hr>
<br>

## class(ES6)
<br>

<br>
<hr>
<br>

## extends
<br>

<br>
<hr>
<br>

## Porque metodos ficam no protótipo?
<br>

<br>
<hr>
<br>

## Exercicio Proposto: Criar um polyfill para String
<br>

<br>
<hr>
<br>

## Resolução: Criar um polyfill para String
<br>

<br>
<hr>
<br>

## Classes Abstratas
<br>

<br>
<hr>
<br>

## Métodos Estáticos
<br>

<br>
<hr>
<br>

## Desafio: Classe Abstrata ContaBancaria
<br>

<br>
<hr>
<br>

## Resolução Desafio: Classe Abstrata ContaBancaria
<br>
<br>

<br>
<hr>
<br>

## Desafio: Classes Concretas ContaPoupança e ContaCorrente
<br>

<br>
<hr>
<br>

## Resolução Desafio: Classes Concretas ContaPoupança e ContaCorren
<br>

<br>
<hr>
<br>

## Desafio: Composição
<br>

<br>
<hr>
<br>

## Enunciado: Composição
<br>

<br>
<hr>
<br>

## Resolução Desafio: Composição
<br>

<br>
<hr>
<br>

## Desafio: Cliente agora é Classe Abstrata
<br>

<br>
<hr>
<br>

## resolução Desafio: Cliente agora é Classe Abstrata
<br>
<br>

<br>
<hr>
<br>

## Enunciado: Cliente agora é Classe Abstrata
<br>
<br>

<br>
<hr>
<br>

## Resolução Desafio: Classe Abstrata Cliente
<br>

<br>
<hr>
<br>

## Refatoração: Mostrar tipo de documento
<br>

<br>
<hr>
<br>

## Polimorfismo
<br>

<br>
<hr>
<br>