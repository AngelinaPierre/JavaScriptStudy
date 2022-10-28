// funções sem parametros

// function teste(){
//     console.log("function expression teste");
//     return "fn expression";
// }

// const t1 = teste();
// console.log(t1);

// const testeArrow = () => {
//     console.log("arrow function testeArrow");
//     return "arrow function expression";
// }

// const t2 = testeArrow();
// console.log(t2);

// funcçoes com parametro

// function teste(str){
//     console.log("function expression teste " + str);
//     return "fn expression " + str; 
// }

// const t1 = teste("parametro function expression");
// console.log(t1);

// const testeArrow = (str) =>{
//     console.log("arrow function testeArrow1 " + str);
//     return "arrow function - " + str;
// }
// console.log(testeArrow);

// funções so com 1 parametro - omite os parenteses

// function teste(str){
//     console.log("function expression teste " + str);
//     return "fn expression " + str; 
// }

// const t1 = teste("parametro function expression");
// console.log(t1);

// const testeArrow = str => {
//     console.log("arrow function testeArrow1 " + str);
//     return "arrow function - " + str;
// }
// console.log(testeArrow);


// funções com somente um retorno - não precisa das chaves

// function teste(str){
//     console.log("function expression teste " + str);
//     return "fn expression " + str; 
// }

// const t1 = teste("parametro function expression");
// console.log(t1);

// const testeArrow = str => "arrow function - " + str;
// const t2 = testeArrow("arrow function parametro");
// console.log(t2);

// funções com 2+ parametros

// function teste(str,n){
//     console.log("function expression teste || " + str + " - " + n);
//     return "fn expression " + str + n; 
// }

// const t1 = teste("parametro function expression", "10");
// console.log(t1);

// const testeArrow = (str, n) => "arrow function - " + str + n;
// const t2 = testeArrow("arrow function parametro ", " 10");
// console.log(t2);

// retornando um objeto em vez de uma string

// const testeArrow1 = () => {
//     return {
//         foo: "bar"
//     }
// }

// const testeArrow1 = () => ({
//     foo: "bar",
// })

// const t3 = testeArrow1();
// console.log(typeof t3, t3);
// console.log(typeof t3, t3.foo);
// console.log(typeof t3, t3["foo"]);

// hosteando funções - chamando funções antes da declaração

console.log(teste());

function teste(){
    console.log("function expression teste");
    return "fn expression";
}

console.log(testeArrow);
const testeArrow = (str,n) => "fn arrow - " + str + " - " + n;