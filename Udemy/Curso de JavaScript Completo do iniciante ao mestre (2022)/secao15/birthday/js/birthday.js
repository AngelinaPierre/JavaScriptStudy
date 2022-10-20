function quantoFaltaPara(mes,dia){
    // precisamos criar uma data para nos mostrar o dia atual
    const today = new Date();
    console.log(today);
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    console.log(today);

    // precisamos ter acesso ao ano atual da dataAtual que criamos, pois se o aniversario ja passou, vamos falar que ele será no ano seguinte.
    let anoAtual = today.getFullYear();

    // vamos tbm precisa pegar a data do aniversario, que esta sendo passada como parametro juntamente com o mes
    const dataNiver = new Date(anoAtual, mes - 1, dia); // lembrar que tem q subtrair 1 do mes

    // agora iremos criar duas variaveis para armazenar tanto nossa data atual quanto a data do aniversario em milisegundos
    // const dataAtualTS = today.getTime();
    const dataAtualTS = +today; // atalho para converter para timeStamp
    let dataNiverTS = +dataNiver;
    console.log(dataAtualTS, dataNiverTS);

    // precisaremos agora fazer algumas verificaçções para vermos se a data do aniversario passou desse ano
    if(dataNiverTS < dataAtualTS){
        // passou o aniversario
        dataNiver.setFullYear(++anoAtual); // soamndo 1 a variavel antes de passar para o metodo
        dataNiverTS = +dataNiver; // atualizando a data de aniversario
    }

    const UM_DIA = 24 * 60 * 60 * 1000;
    const diferenca = dataNiverTS - dataAtualTS;


    return diferenca / UM_DIA;

}

























/**

Vamos ver como zerar os valores no CONSOLE, algo que não vimos em aulas passadas

> data = new Date()
>> Thu Oct 20 2022 14:53:20 GMT-0300 (Brasilia Standard Time)

> data.getMilliseconds()
>> 512


- Como para o exercicio nao queremos levar em consideração os millisegundos, queremos levar em consideração a hora inicial do dia, por exemplo meia-noite.
- Logo vamos zerar essas informações da seguinte maneira

> data.setMilliseconds(0)
>> 1666288542000

> data.setSeconds(0)
>> 1666288500000

> data
>> Thu Oct 20 2022 14:55:00 GMT-0300 (Brasilia Standard Time)



- Outro detalhe é quando passamos mais de um valor para a função construtora.

> data = new Date(2020,7,20)
>> Thu Aug 20 2020 00:00:00 GMT-0300 (Brasilia Standard Time)

- vejam que todos os outros parametros que foram omitidos estão zerados. Se não passarmos o dia, será colocado o 01 que é o padrão.

> data = new Date(2020,7)
>> Sat Aug 01 2020 00:00:00 GMT-0300 (Brasilia Standard Time)

> data = new Date(2020)
>> Wed Dec 31 1969 21:00:02 GMT-0300 (Brasilia Standard Time)


*/