const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log("arr1: " + arr1);
console.log("arr2: " + arr2);

function sum(){
    console.log(arguments);
    console.log(arguments.length);
}

sum(1,2,3); // arguments.length = 3
sum(arr1)// arguments.length = 1
sum([1,2,3]);

sum(...[1,2,3]);
sum(...arr1);


const arr3 = arr1.push(...arr2);
console.log("arr3: " + arr3);
console.log(arr1);
