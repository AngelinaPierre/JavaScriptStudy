// let doc = document.addEventListener("click", () => {}); // undefined
// let doc = document.querySelector("a");
// console.log(doc);
// document.querySelector("a").style.color = "red";

const calc = {
    value: 0,
    soma(num){
        // console.log(value); // error
        console.log(this.value);
        this.value += num;
        // console.log(this);
        return this;
    },
    subtrai(num){
        this.value -= num;
        return this;
    },
    log(){
        console.log(this.value);
        return this;
    },
}
// console.log(calc.soma(5).soma(2)); // objeto
calc.soma(5).soma(2); // valor
calc.soma(5).soma(2).subtrai(3);
calc.soma(5).soma(2).subtrai(3).soma(2).log();
calc.soma(5).soma(2).subtrai(3).soma(2).log().soma(5);
// console.log(calc.value);
console.log(calc); // objeto
