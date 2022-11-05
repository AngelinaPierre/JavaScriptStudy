class Cliente {
    constructor(nome, numeroDocumento, tipoDocumento){
        if(this.constructor === Cliente) {
            throw new Error("Cliente is an Abstract class. Can not be instanciated!")
        }

        if(nome && numeroDocumento && tipoDocumento){
            this.nome = nome;
            this.numeroDocumento = numeroDocumento;
            this.tipoDocumento = tipoDocumento;
        }
    }
}

class PessoaFisica extends Cliente{
    constructor(nome,numeroDocumento) {
        super(nome,numeroDocumento, "CPF");
        
    }
}

class PessoaJuridica extends Cliente{
    constructor(nome,numeroDocumento){
        super(nome,numeroDocumento, "CNPJ");
        
    }
}


class ContaBancariaProf{
    constructor(cliente, numero){

        if(this.constructor === ContaBancariaProf){
            throw new Error("ContaBancariaProf is an Abstract class. Can not be instanciated!");
        }

        this.cliente = cliente;
        this.numero = numero;
        this.saldo = 0;
    };

    depositar(value){
        // console.log(`\n[DepositoP: ${value}]\n\nCliente: ${this.cliente}\nSaldo Atual: ${this.saldo}\nSaldo Final: ${this.saldo += value}`);
        this.saldo += value;
    };

    static sacar(value){
        throw new Error("Method sacar() needs to be implemented!");
    };

    get dadosCliente(){
        // console.log(this.cliente.constructor);
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.numeroDocumento}`
        // if(this.cliente.constructor === PessoaFisica){
        //     return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.CPF}`
        // }else{
        // return `${this.cliente.nome},  ${this.cliente.tipoDocumento}: ${this.cliente.CNPJ}`
        // }
    }
}

class Transferir {
    static execute(contaOrigem, contaDestino, value){
        if(!contaOrigem instanceof ContaBancariaProf || ! contaDestino instanceof ContaBancariaProf){
            throw new Error("Accounts needed to inherit from ContaBancaria");
        }

        try {
            contaOrigem.sacar(value);
            contaDestino.depositar(value);
        } catch (error) {
            console.log("Error: ", error.message);
        }
    }

}


class ContaPoupancaProf extends ContaBancariaProf{
    constructor(cliente, numero){
        super(cliente, numero);
        this.aniversario = Date.now();
    }

    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(value > disponivel){
            throw new Error("Saldo insuficiente");
        };
        // console.log(`\n[SaqueP: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
        this.saldo -= value;
    }
}

class ContaCorrenteProf extends ContaBancariaProf{
    constructor(cliente, numero){
        super(cliente, numero);
        this.limite = 0;
    }
    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(disponivel < value){
            throw new Error("Saldo Insuficiente!");
        }
        // console.log(`\n[SaqueP: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
        this.saldo -= value;
    }
}

const angelina = new PessoaFisica("angelina", "14.031.904-29");
const pierre = new PessoaJuridica("Pierre LTDA", "860.402.225/0001-01");
// console.log(angelina);
// console.log(pierre);


const contaP1 = new ContaPoupancaProf(angelina, 1);
console.log(contaP1.dadosCliente);
const contaC1 = new ContaCorrenteProf(angelina, 2);
console.log(contaC1.dadosCliente);
const contaP2 = new ContaPoupancaProf(pierre, 3);
console.log(contaP2.dadosCliente);
const contaC2 = new ContaCorrenteProf(pierre, 5);
console.log(contaC2.dadosCliente);



contaP1.depositar(2000);
contaP1.sacar(400);

contaP1.depositar(300);
contaP1.limite = 200;
contaP1.sacar(50);

// console.log(conta1);
// console.log(conta2);
// console.log(conta3);
// console.log(conta4);

