n = 10;

nObj = new Number(10);

console.log(n instanceof Number);
console.log(n instanceof Number || typeof n === "number");
console.log(nObj instanceof Number);

console.log(n.constructor);
console.log(nObj.constructor);


console.log("----------------");

const arr1 = [];
const arr2 = new Array();

console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);

console.log(arr1.constructor);
console.log(arr2.constructor);

console.log("----------------");


// expressões regulares literais
const regex1 = /a/g;
// expressões regulares operador new
const regex2 = new RegExp();

console.log(regex1 instanceof RegExp);
console.log(regex2 instanceof RegExp);


console.log(regex1.constructor);
console.log(regex2.constructor);

// verificando se eh uma função
console.log(typeof function(){});
const fn = () => {};
console.log(typeof fn);

console.log(typeof fn === "function");