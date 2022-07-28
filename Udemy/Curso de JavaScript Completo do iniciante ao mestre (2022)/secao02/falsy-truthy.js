/**
 * FALSY -> 0, "", Nan, undefined, null, false
 * 
 */

if(true){
    console.log('true');
}else{
    console.log('false');
}


if(false){
    console.log('true');
}else{
    console.log('false');
}


if("false"){
    console.log('true');
}else{
    console.log('false');
}


if(0){
    console.log('true');
}else{
    console.log('false');
}


if(""){
    console.log('true');
}else{
    console.log('false');
}

console.log('NaN');
if("oi" * 2){ // NaN
    console.log('true');
}else{
    console.log('false');
}

console.log('Undefined');
if(undefined){
    console.log('true');
}else{
    console.log('false');
}

console.log('Null');
if(null){
    console.log('true');
}else{
    console.log('false');
}

let n;
console.log('Variable n');
if(n){
    console.log('true');
}else{
    console.log('false');
}