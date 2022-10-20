(function(){

    // precisamos ter acesso aos elementos do DOM que precisamos

    // recuperando a data do html
    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText;
    console.log(dateEventDOM);

    // usando função que irá receber a string da data que pegamos do html e irá nos devolver um objeto do tipo data.
    function getDate(str){
        // temos que quebrar a string em duas para termos a data e a hora separadas. Vamos usar o metodo split(" ").
        // vamos usar o "destructuring" para facilitar
        const [date, hours] = str.split(" ");
        console.log(date, hours);

        // precisamos agora fazer a mesma coisa para quebrar a string da data onde temos a "barra", e a da hora no "H".
        const [day, month, year] = date.split("/");
        console.log(day, month, year);
        const [hour, minute] = hours.split("H");
        console.log(hour, minute);

        // agora que temos todas as variaveis, passamos os valores para nossa função construtora
        // MONTH -> precisamos fazer uma subtração de 1, para que o mes que queremos seja o correto, pois janeiro = 0.
        return new Date(year, month - 1, day, hour, minute);
    }

    const dateEvent =  getDate(dateEventDOM);
    console.log(dateEvent);

    // agora que temos a nossa data formatada, precisamos saber quanto tempo falta para chegar essa data, e para isso, obrigatoriamente precisamos saber que dia é hoje.

    const today = new Date();
    console.log(today);

    // Agora precisamos saber a diferença entre essas datas. O jeito mais facil para trabalhar com calculo em datas é transformar tudo em timestamp.
    // vamos criar uma outra variavel (left) onde usaremos o metodo (getTime) para subtrair as datas. 
    let left = dateEvent.getTime() - today.getTime();
    console.log(left);

    // agora que temos a diferença vamos precisar formata-la.
    // Primeira precisamos saber no timestamp em milisegundos, quantos dias existem nele, e depois fazemos o mesmo procedimento para as horas e para os minutos e para os segundos.
    const ONE_MINUTE = 60 * 1000;
    const ONE_HOUR = 60 * ONE_MINUTE;
    const ONE_DAY = 24 * ONE_HOUR; // um dia
    // const ONE_DAY = 24 * 60 * 60 * 1000; // um dia


    // apos criarmos uma variavel que recebe o valor em milisegundos em 1 dia, temos que saber quantos dias temos em 'left'.
    // usaremos ou o parseInt ou o Math.floor para que não venha um numero quebrado.
    const daysLeft = parseInt(left / ONE_DAY); // 306
    console.log(daysLeft); // 306.17365984953705
    // uma vez calculado o numero de dias, precisamos subtrair esse valor da nossa variavel `left`
    left = left - (daysLeft * ONE_DAY); // multiplicamos pelo one_day para voltar para milisegundos
    console.log(left);

    const hoursLeft = parseInt(left / ONE_HOUR);
    console.log(hoursLeft);
    left = left - (hoursLeft * ONE_HOUR);

    const minutesLeft = parseInt(left / ONE_MINUTE);
    console.log(minutesLeft);
    left = left - (minutesLeft * ONE_MINUTE);
    console.log(left);
    
    // AGORA QUE TEMOS OS DIAS, HORAS, E MINUTOS, SOBRA OS SEGUNDOS
    const secondsLeft = parseInt(left / 1000) ;
    console.log(secondsLeft);

    addLeftTime(daysLeft,hoursLeft,minutesLeft, secondsLeft);


    // agora que temos os valores, vamos criar uma função passando esses parametros
    function addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft){
        // aqui iremos criar um paragrafo que irá mostrar nosso contador.
        const p = document.createElement("p");
        p.textContent = `Contagem Regressiva: ${daysLeft} dias, ${hoursLeft} horas, ${minutesLeft} minutos, ${secondsLeft} segundos`;

        // adicionando paragrafo ao nosso DOM
        document.querySelector(".hero-content").appendChild(p);

    }

})()