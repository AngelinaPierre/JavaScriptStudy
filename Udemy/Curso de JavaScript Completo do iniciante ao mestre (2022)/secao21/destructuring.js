const eu = {
    nome: "Angelina",
    sobrenome: "Pierre",
};
console.log(eu); 

// do lado direito do operador de atribuição [=], temos um objeto literal.
// poderiamos usar o [destructuring] da seguinte maneira:

// extraimos do objeto [eu], as propriedades [nome, sobrenome] 
// e armazenamos nas constantes [nome,sobrenome];
const {nome, sobrenome} = eu; // const || let;

console.log(nome, sobrenome); 

// da maneira acima, so conseguimos extrair com os nomes iguais, se quisermos usar 
// outro nome para a constante cujo valor ser armazenado, fazemos da seguinte maneira:

const {nome: nomePessoa, sobrenome: sobrenomePessoa} = eu;
console.log(nomePessoa, sobrenomePessoa);