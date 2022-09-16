(function(){
    
    // const username = null;
    const username = "Angelina";


    if(username){
        const topBarElement = document.createElement("div");
        topBarElement.className = "top-bar";
        topBarElement.innerHTML = `<p> Olá, <b> ${username} </b></p>`;

        //elementoPai.insertBefore(novoElemento, elementoReferencia);

        const elementMae = document.querySelector(".hero");
        console.log(elementMae.firstChild);
        console.log(elementMae.firstElementChild);

        elementMae.insertBefore(topBarElement, elementMae.firstElementChild);

    }
    
})()