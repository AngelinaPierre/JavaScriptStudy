(function(){

    const bodyFx = document.getElementsByClassName("fx");
    console.log(bodyFx);

    window.addEventListener("scroll", function(){
        // console.log(pageYOffset);
        if(pageYOffset > 40 && !bodyFx[0]){
            console.log("adiciona classe fx");
            document.body.classList.add("fx");
        }else if(pageYOffset <= 40 && bodyFx[0]){
            console.log("remove classe fx");
            document.body.classList.remove("fx");
        }
    });

})()