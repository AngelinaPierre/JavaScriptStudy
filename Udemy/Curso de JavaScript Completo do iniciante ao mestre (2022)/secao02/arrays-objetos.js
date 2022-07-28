// array de nomes
const nomes = ["", "", "", ""];

// quando tinhamos um unico objeto de pessoas
const pessoa = {
    nome: "",
    idade: 10,
    email: "",
};

// e se quisessemos ter mais de uma pessoa?
const pessoa1 = {}; // errado...

// a ideia é que tenhamos um ARRAY DE OBJETOS e dentro de cada INDICE desse array de objeto, teremos um objeto do tipo objeto.
// array de objetos do tipo pessoa, onde em cada indice teremos um objeto do tipo pessoa.
const pessoa2 = { nome: "Maria", idade: 10, email: "mara@hotmail.com" };
const pessoas = [
    {
        nome: "Angelina",
        idade: 26,
        email: "gabp@hotmail.com",
    },
    pessoa2,
    {
        nome: "Daniel",
        idade: 40
    }, 
    {
        nome: "Helena",
        idade: 50,
    },
];

console.log(pessoas);
console.log(pessoas[0]);
console.log(pessoas[0].nome);

for(let i = 0; i < pessoas.length; i++){
    console.log(`Nome: ${pessoas[i].nome}`);
}

for(let p in pessoas){
    console.log(`Nome: ${pessoas[p].nome} | idade: ${pessoas[p].idade}`);
}

