const data = new Date(); // quando não passamos parametros, armazena a data atual
console.log(data);
console.log(data.getDay()); // dia da semana -> 0 = domingo
console.log(data.getDate()); // dia do mes
console.log(data.getMonth()); // mes -> 0 = janeiro
console.log(data.getTime()); // numero de milisegundos que passaram desde 1JAN1970
console.log(data.getFullYear()); // ano
console.log(data.getHours()); // horario atual
console.log(data.getUTCHours()); // tempo universal
console.log(data.getTimezoneOffset()); // diferença entre a timezone e a UTC em minutos


// metodos setters
console.log(data.setDate(19));
console.log(data);
console.log(data.getSeconds());

console.log(data.setFullYear(2021));
console.log(data);

console.log(data.setTime(0)); // hora inicial usada para contabilizar o timestamp
console.log("-------");
console.log(data);

// obtendo strings a partir de datas.

// forma convencional -> toString()

console.log(typeof data.toString(), "toString() ="+ data.toString());
console.log(typeof data.toDateString(),"toDateString() = " + data.toDateString());
console.log(typeof data.toISOString(),"toISOString() = " + data.toISOString());
console.log(typeof data.toLocaleDateString(),"toLocaleDateString() = " + data.toLocaleDateString());
console.log(typeof data.toLocaleString(),"toLocaleString() = " + data.toLocaleString());
console.log(typeof data.toUTCString(),"toUTCString() = " + data.toUTCString());
console.log(typeof data.valueOf(), "valueof() = " + data.valueOf());

// 60 * 1000 = 1 minuto = 6000 milisegundos
// 60 * 60 * 1000 = 1 hora = 3600000 milisegundos
// 24 *60 *60 * 1000 = 1 dia = 86400000 milisegundos
// 365 * 24 * 60 * 60 * 1000 = 31536000000 milisegundos
// 50 anos = 50 * 365 * 24 * 60 * 60 * 1000 = 157680000000

// passando parametros
console.log(typeof data.toLocaleString(), "toLocaleString() = " + data.toLocaleString());
console.log(typeof data.toLocaleString(), "toLocaleString() = " + data.toLocaleString("en-US"));
console.log(typeof data.toLocaleString(), "toLocaleString() = " + data.toLocaleString("pt-BR"));


// PASSANDO OBJETO DE CONFIGURAÇÃO
console.log(typeof data.toLocaleString(), "toLocaleString() = " + data.toLocaleString("pt-BR", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
}));
console.log(typeof data.toLocaleString(), "toLocaleString() = " + data.toLocaleString("pt-BR", {
    month: "short",
    weekday: "short",
    day: "numeric",
    year: "numeric",
}));

// COLOCANDO TEMPO 24H
console.log(typeof data.toLocaleString("en-US", {hour12: false}), "toLocaleString() 24h = " + data.toLocaleString("en-US", {hour12: false}));


// biblioteca = momentum.js ----- VERIFICAR

