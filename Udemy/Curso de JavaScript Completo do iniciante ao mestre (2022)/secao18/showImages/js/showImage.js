(function(){

    let elementsAddScroll = [...document.querySelectorAll("[data-addclass-on-scroll")]; // imagens 

    function isElementIntoView(el){
        let rect = el.getBoundingClientRect();

        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.top >= 0 && rect.bottom <= innerHeight)
        );
    }


    function addClassOnScroll(){

        if(elementsAddScroll.length === 0){
            window.removeEventListener("scroll", addClassOnScroll);
            console.log("funcionando removedor de event");
        }

        elementsAddScroll.forEach(el => {
            if(isElementIntoView(el)){
                let delay = parseInt(el.getAttribute("data-addclass-on-scroll-delay")) || 0;

                setTimeout(() => {
                    let _class = el.getAttribute("data-addclass-on-scroll");
                    el.classList.add(_class);
                    el.removeAttribute("data-addclass-on-scroll");
                    el.removeAttribute("data-addclass-on-scroll-delay");
                    elementsAddScroll = [...document.querySelectorAll("[data-addclass-on-scroll")]; // imagens 
                }, delay);
            }
        });

    }
    addClassOnScroll();



    window.addEventListener("scroll",addClassOnScroll);


})()