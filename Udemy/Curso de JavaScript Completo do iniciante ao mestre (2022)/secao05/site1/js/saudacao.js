(function(){
    // const userName = "Angelina(Daniel)";
    // document.querySelector(".top-bar p").textContent = "Bem-vinda(o), " + userName;
    // const element = document.querySelector(".top-bar p")
    // element.textContent = "Bem-vinda(o), " + userName;
    // element.textContent = element.textContent + userName
    // element.textContent += userName;
    
    // concatenação com tag
    // element.textContent += "<br>" + userName + "</b>";
    
    // utilizando inner html
    // element.innerHTML += "<b>" + userName + "</b>";
    
    
    // checagem para ver se esta logado.
    // const username = "Angelina";
    const username = null;
    const element = document.querySelector(".top-bar p");
    if(username){
        console.log(element.textContent)
        element.innerHTML += "<b>" + username + "</b>";
    }else{
        // escondedo tag p especifica
        // element.style.display = "none";
        // escondendo todo o elemento pai
        // element.parentElement.style.display = "none";

        // removendo elemento em vez de display=none
        // element.remove();

        const elementForRemove = element.parentElement; // elemento mae do [top-bar p] = [hero]
        elementForRemove.parentElement.removeChild(elementForRemove);
    }
})()