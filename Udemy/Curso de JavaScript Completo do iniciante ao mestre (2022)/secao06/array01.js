// criandoa array
const arr = [1, 5, 10, "olá", true];

// let sohNumeros = arr.every(
//     function(el){ // el = elemento
//         console.log(el);
//         // return true;
//         return typeof el === "number";
//     }
// )

// let sohNumeros1 = arr.some(
//     function(el){ // el = elemento
//         console.log(el + "\n");
//         // return typeof el === "number";
//         return typeof el === "number" && el > 20;
//     }
// )

let arr1 = arr.filter(function(el, i, _arr){
    // console.log(el);
    // console.log(i);
    // console.log(_arr);
    return typeof el === "number";
})

const arr2 = arr.forEach(function(el, i, _arr){
    console.log(el,i);
})

let arr3 = arr1.map(function(el, i, _arr){
    return el * el;
})

console.log(arr);
console.log(arr1);
console.log(arr3);

// console.log(arr2);


// console.log("\n"+sohNumeros);
// console.log("\n"+sohNumeros1);
