(function(){

    const menu = document.querySelector("nav");
    const links = menu.querySelectorAll("li a"); // nodeList

    function pegaUltimoElementoVisto(_positionsLinks){
        let positions = _positionsLinks.filter(p => p < innerHeight / 2); // array de numeros menores que zero
        // console.log(positions.pop());
        return links[positions.length - 1];
    }
    
    // [2]
    function destacaMenu(){
        let positionsLinks = [...links].map(link => {
            let href = link.getAttribute("href"); // #s1
            let h2 = document.querySelector(href); // <h2 id="s1">Secao 1</h2>

            // console.log(h2.getBoundingClientRect().top) // posição de h2
            return h2.getBoundingClientRect().top;
        });
        // console.log(positionsLinks); // [3]

        let linkAtivo = pegaUltimoElementoVisto(positionsLinks);
        let menuActived = menu.querySelector(".actived");
        if(menuActived){
            menuActived.classList.remove("actived");
        }        

        if(linkAtivo){
            return linkAtivo.classList.add("actived");
        }
        return links[0].classList.add("actived");
        console.log(positionsLinks);
    }
    destacaMenu();

    [1]
    window.addEventListener("scroll", destacaMenu);


})()

/**

[1]
Criando evento para escutar o scroll na tela, vamos criar a função que será chamada pelo EventListener Ou seja, não vamos criar uma função anonima pois queremos que assim que executar o javascript essa função seja executada, ja marcando o link ativo assim que a pagina for aberta

    window.addEventListener("scroll", destacaMenu);

[2]
Na nossa função [destacaMenu()] queremos saber a posição do elemento:
    document.querySelector(link.getAttribute("href")) = // <h2 id=​"s1">​Secao 1​</h2>​

Na nossa VIEWPORT.

function destacaMenu(){
    let positionsLinks = [...links].map(link => {
        // <a href="#s2">Link 2</a>
        console.log(link); 
        // http://localhost:5500/mark_scroll/#s1
        console.log(link.href); 
        // #s1
        console.log(link.getAttribute("href")); 
        // <h2 id=​"s1">​Secao 1​</h2>​
        console.log(document.querySelector(link.getAttribute("href")));
    });
}


[3]
Observe que agora nossa varivel [positionsLinks], quarda os valores de [h2.getBoundingClinetRect().top]
- Se scrollarmos a tela, esses valores irão alterar.

function destacaMenu(){
    let positionsLinks = [...links].map(link => {
        let href = link.getAttribute("href"); // #s1
        let h2 = document.querySelector(href); // <h2 id="s1">Secao 1</h2>

        console.log(h2.getBoundingClientRect().top)
        return h2.getBoundingClientRect().top;
    });
    console.log(positionsLinks); // [3]
}
destacaMenu();


[4]
Vamos mudar o numero magico usando uma logica para que o valor seja no meio da viewport

function pegaUltimoElementoVisto(_positionsLinks){
    let positions = _positionsLinks.filter(p => p < 0); // array de numeros menores que zero
    // console.log(positions.pop());
    return links[positions.length - 1];
}

function pegaUltimoElementoVisto(_positionsLinks){
    let positions = _positionsLinks.filter(p => p < innerHeight / 2); // array de numeros menores que zero
    // console.log(positions.pop());
    return links[positions.length - 1];
}

*/