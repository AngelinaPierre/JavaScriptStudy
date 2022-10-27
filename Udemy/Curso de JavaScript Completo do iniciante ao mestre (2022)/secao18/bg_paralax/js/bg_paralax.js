(function(){

    // [3]
    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")]; // [...nodelist] = array.
    console.log(dataParalaxContainer);

    // [5]
    function isGettingOut(containerElement){
        return containerElement.getBoundingClientRect().top <= 0;
    }
    // [7]
    function getNewPosition(containerElement){
       // pegando o parametro passado para o [data-p-velocity] e colocando um valor default caso não haja
       const dataPVelocity = parseFloat(containerElement.getAttribute("data-p-velocity")) || .5; 
       return containerElement.getBoundingClientRect().top * (dataPVelocity * -1);
    }
    
    // [2]
    function positionImage(){

        dataParalaxContainer.forEach(container => {
            console.log(container);
            let origPositionY = getComputedStyle(container).backgroundPositionY;
            let origPositionX = getComputedStyle(container).backgroundPositionX;
            console.log(origPositionX, origPositionY); // 100% 50%
            //[4]
            if(isGettingOut(container)){
                // saindo da pagina o elemento guardado dentro do container
                // [6]
                container.style.backgroundPosition = `
                    ${origPositionX} ${getNewPosition(container)}px
                `
            }else{
                //[8]
                container.style.backgroundPosition = `
                    ${origPositionX} 0px
                `
            }
        });

    }
    positionImage();
    

    // [1]
    window.addEventListener("scroll", positionImage);
})()

/**

[1]
Vamos acrescentar um listener no scroll do window

[2]
função executada sempre que à o scroll

[3]
selecionando elementos que possuem a classe [data-paralax].

[8]
Zerando o backgroundPositionY para que a animação do scroll do [header] extra que colocamos funcione.
*/