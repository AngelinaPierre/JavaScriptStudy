let x = [10];
let y = {n:10};

function mudaX(x){
    x.push(11);
    console.log("x interno: " + x );
}

function mudaY(obj){
    obj.n++;
    // obj.n = obj.n + 1;
    console.log("y interno: " + obj.n);
}

mudaX(x);
console.log("x externo: " + x);

mudaY(y);
console.log("y externo: " + y.n);