let x = 10;
console.log(x);
x = "uma \"string\"";
console.log(x);

function teste(){
    console.log(this)
}
const teste2 = () => {
    console.log('teste2');
    console.log(this);
}
teste();

const obj = {
    n: 0,
    teste1: teste,
    teste2
};
// obj.teste1();
obj.teste2();
