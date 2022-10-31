// var name = "pierre";
// let name2 = "angelina";

function teste(str, num){
    // console.log(this);
    console.log(this.name);
    // console.log(this.name2);
    console.log(str, num);
}

// teste("string", 10);
// teste.call({
//     name: "Maria",
// }, "string", 20);

// teste.apply({
//     name: "joao",
// },["string apply",28]);

// teste.call({
//     name: "Angelina Pierre",
// }, ...["string apply",28]);

const teste2 = teste.bind({
    name: "Joana",
});

teste2();
teste2("Joaquina", 30);

document.addEventListener("click", teste2);