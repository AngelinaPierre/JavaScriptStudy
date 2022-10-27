(function(){
    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax")];

    function isGettingOut(element){
        let bounding = element.getBoundingClientRect();

        return (
            bounding.top * -1 < bounding.height && bounding.top <=0
        );
    }

    function getNewPositionY(element){
        const velocity = parseFloat(element.getAttribute("data-p-velocity")) || .5;

        return element.getBoundingClientRect().top * (velocity * -1);
    }

    function positionImage(evt){
        dataParalaxContainer.forEach(containerEl => {
            let originalYPositionX = getComputedStyle(containerEl).backgroundPositionX;
            let originalYPositionY = getComputedStyle(containerEl).backgroundPositionY;

            let newPositionY = parseInt(originalYPositionY);

            if(isGettingOut(containerEl)){
                containerEl.style.backgroundPosition = `
                    ${originalYPositionX} ${getNewPositionY(containerEl)}px
                `
            }

        });
    }

    window.addEventListener("scroll", positionImage);
    positionImage()
})()