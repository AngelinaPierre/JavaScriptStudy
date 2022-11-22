const myMap = new Map(); // mapa
const myObj = new Object();
const arr = [];

myObj.prop1 = "prop 1";

myMap.set("prop1", "prop 1");
myMap.set(true, false);
myMap.set(myObj, "meu objeto");
myMap.set(arr, myObj);



console.log(myMap.get("prop1")); // prop 1
console.log(myMap.get(true)); // false
console.log(myMap.get(myObj)); // meu objeto
console.log(myMap.get(arr)); // meu objeto

const myMap2 = new Map([
    [0, "zero"],
    [1,"um"],
    [2, "dois"],
]);

console.log(myMap2.get(0));
console.log(myMap2.get(1));
console.log(myMap2.get(2));

console.log(myMap2.keys()); // [Map Iterator] { 0, 1, 2 }

console.log(myMap2.has(2));

console.log(myMap2.values()); // [Map Iterator] { 'zero', 'um', 'dois' }

console.log(myMap2.entries()); // [Map Entries] { [ 0, 'zero' ], [ 1, 'um' ], [ 2, 'dois' ] }

let keys = myMap2.keys();

for(let k of keys){
    console.log(k);
}

for(let value of myMap2.values()){
    console.log(value);
}

let _contador = new WeakMap();

class Contador{
    constructor(){
        // this.contador = 0;
        _contador.set(this, 0);
    };
    increment(){
        // this.contador++;
        console.log(this.contador);
        _contador.set(this, _contador.get(this) + 1);
        console.log(_contador.get(this));
    };
    get contador(){
        return _contador.get(this);
    }
}

console.log("-----");

const c1 = new Contador();
c1.increment();
console.log(c1.contador);
c1.increment();
c1.increment();
c1.increment();
console.log(c1.contador);
