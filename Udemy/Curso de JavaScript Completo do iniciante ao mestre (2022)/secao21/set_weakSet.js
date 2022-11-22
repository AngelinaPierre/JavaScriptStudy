const _set = new Set();
const _weakSet = new WeakSet();

const arr = [1, 2, 3, 4, 2, 3, 5];

_set.add(1);
_set.add(5);
_set.add(7);
_set.add(2);
_set.add(2);
_set.add(6);


// console.log(_set.size); // 4
console.log(_set.has(6)); // 
_set.delete(6);
// console.log(_set.size); // 3
console.log(_set.has(6)); // 3
console.log("-------");

for(let elemento of _set){
    console.log(elemento);
};

console.log("------- keys");

for(let elemento of _set.keys()){
    console.log(elemento);
};
console.log("------- values");

for(let elemento of _set.values()){
    console.log(elemento);
};

console.log("------- CALLBACK");


let obj2 = {};
(function(){
    let obj1 = {
        foo: "bar",
    };
    let obj2 = {
        foo2: "bar2",
    };

    _set.add(obj1);
    _weakSet.add(obj2);

})();

for(let x of _set){
    console.log(x);
}
// for(let x of _weakSet){
//     console.log(x);
// }

console.log("XXXXXXXXX");
console.log(_set.size);
console.log(_weakSet.has(obj2));