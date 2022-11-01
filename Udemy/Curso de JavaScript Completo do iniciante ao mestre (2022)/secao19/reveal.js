const calcRevealPattern = (function(){

    let n = 0;

    // closure - acesso somente dentro da função
    function _checkNumber(n){
        if(typeof n!== "number"){
            throw TypeError("Precisa passar um numero!");
        }
    }

    function somar(_n){
        _checkNumber(_n);
        n += _n;
        return this; // encadeamento
    }
    function subtrair(_n){
        _checkNumber(_n);
        n -= _n;
        return this;
    }

    function log(){
        console.log(n);
        return this;
    }

    return {
        somar,
        subtrair,
        log,
    }
})()

calcRevealPattern.log();
calcRevealPattern.somar(5).somar(7).subtrair(2).log();
calcRevealPattern.somar("3");
console.log(calcRevealPattern);