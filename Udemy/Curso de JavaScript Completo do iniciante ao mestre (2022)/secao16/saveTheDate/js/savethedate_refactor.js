(function(){
    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText;
    const dateEvent = getDate(dateEventDOM);
    const ONE_SECOND = 1000;
    const ONE_MINUTE = 60 * ONE_SECOND;
    const ONE_HOUR = 60 * ONE_MINUTE;
    const ONE_DAY = 24 * ONE_HOUR;
    const p = document.createElement("p");
    document.querySelector(".hero-content").appendChild(p);



    function updateDate(){
        const today = new Date();
        let left = dateEvent.getTime() - today.getTime();
        const daysLeft = parseInt(left / ONE_DAY);
        left = left - (daysLeft * ONE_DAY);
        const hoursleft = parseInt(left / ONE_HOUR);
        left = left - (hoursleft * ONE_HOUR);
        const minutesLeft = parseInt(left / ONE_MINUTE);
        left = left - (minutesLeft * ONE_MINUTE);
        const secondsLeft = parseInt(left / ONE_SECOND);
        addleftTime(daysLeft, hoursleft, minutesLeft, secondsLeft);

    }
    updateDate();

    function getDate(string){
        const [date, hours] = string.split(" ");
        const [day, month, year] = date.split("/");
        const [hour, minutes] = hours.split("H");

        return new Date(year, month - 1, day, hour, minutes);
    }

    function addleftTime(d,h,m,s){
        p.textContent = `Contagem Regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos `;
    }

    setInterval(updateDate, 1000);


})()