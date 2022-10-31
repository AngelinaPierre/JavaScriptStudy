const str = "global string";

//[1]

function teste(str){
    console.log("-------------- this teste");
    console.log(this); 
    console.log(str);

    setTimeout(() => {
        console.log("--------------"); // teste dinamismo this, arow function nao muda o this, function expression muda.
        console.log(this);
    },2000);
}
//[3]
const teste2 = () => {
    console.log("arrow function");
    console.log(this);
}
teste2();

const obj = {
    foo: "bar",
    teste, // [2]
    teste2,
}
console.log("\n");
obj.teste("string de objeto função teste()"); // this  = object obj
// obj.teste2();



// this dinamico com eventos criado no escopo.html


























/**

[ANOTAÇÕES]

[1]

// function teste(){
//     const str = "local string";
//     console.log(str);
// }

// console.log(str);
// teste();


[2]
const obj = {
    foo: "bar",
    teste2: teste2 
}
obj.teste2("string de objeto"); // this  = object obj

[3]
// teste2("parametro"); // this = object global


*/