(function(){
    'use-strict';

    // =================================== [VARIABLES] =================================== //
    const txtTitulo = document.getElementById("txtTitulo"); // titulo
    const btn = document.getElementById("btn"); //  adicionar
    const formCadastro = document.querySelector(".formCadastro"); // formulario
    const txtDescricao = document.getElementById("txtDescricao"); // descrição
    const contadorContainer = document.getElementById("contador"); // contador pai
    const restaContador = contadorContainer.getElementsByTagName("span")[0]; // contador filho
    const maxima = txtDescricao.maxLength; // getting attribute from html element and its value.
    const chkAceito = formCadastro.querySelector("#chkAceito"); // reference to checkbox
    const feedbackMesssage = document.getElementById("feedbackMessage");
    const closeBtnFeedbackMessage = feedbackMesssage.getElementsByTagName("button")[0];


    // =================================== [CODE START] =================================== //


    btn.disabled = true; //  desabilitando o uso do botão
    btn.addEventListener("click", function(evt){}); //  evento de click do botão, trocado pelo evento no formulario

    mostrarNumero(maxima); // counter shows the maxLength att in html

    
    contadorContainer.style.display = "block";

                            // ============== [EVENTS] ============== //
    // forms event
    formCadastro.addEventListener("submit", function(evt){
        if(!txtTitulo.value){
            showErrorMessage("Preencha todos os campos!", function(){
                txtTitulo.focus();
            });
            evt.preventDefault();
        }
    });

    // description event
    txtDescricao.addEventListener("input",checkLength);

    // checkbox event change
    chkAceito.addEventListener("change", function(){ 
        btn.disabled = !this.checked;
        // btn.focus();
    });

    

    // =================================== [CODE END] =================================== //
    // =================================== [FUNCTIONS] =================================== // 
    function mostrarNumero(num){
        restaContador.textContent = num;
    }

    function checkLength(){
        // function to check the qtd of caracters already typed and subtrack from counter
        let numLetrasDigitadas = this.value.length; // qtd typed
        let caracteresRestantes = parseInt(maxima) - parseInt(numLetrasDigitadas);
        mostrarNumero(caracteresRestantes);
    }


    function showErrorMessage(msg,cb){
        // alert(msg);
        feedbackMesssage.classList.add("show");
        feedbackMesssage.getElementsByTagName("p")[0].textContent = msg;  
        closeBtnFeedbackMessage.focus();

        
        // event to hide feedback
        closeBtnFeedbackMessage.addEventListener("click", hideErrorMessage);

        // event for closing on esc
        feedbackMesssage.addEventListener("keyup", pressedKeyboardOnBtn);

        // functions
        function pressedKeyboardOnBtn(evt){
            if(evt.keyCode === 27){
                hideErrorMessage();
            }
        }

        function hideErrorMessage(){
            //console.log("clicado close");
            feedbackMesssage.classList.remove("show");
            chkAceito.checked = false;
            closeBtnFeedbackMessage.removeEventListener("click",hideErrorMessage);
            feedbackMesssage.removeEventListener("keyup", pressedKeyboardOnBtn);
            if(typeof cb === "function"){
                cb();
            }
        }
    }
})();


// =================================== [ATERNATIVE CODING] =================================== //

// removing the style attribute from an element in html 
// contadorContainer.removeAttribute("style");

// checkbox event click
// chkAceito.addEventListener("click", function(){ 
//     if(btn.disabled == true){
//         btn.disabled = false;
//     }else{
//         btn.disabled = true;
//     }
// });

// function with some bugs
// function showErrorMessage(msg){
//     // alert(msg);
//     // feedbackMesssage.setAttribute("class", "show");
//     // feedbackMesssage.textContent = msg; // removes the X that closes the feedback
//     feedbackMesssage.querySelector("p").textContent = msg;  
// }

// ways of duing 
// feedbackMesssage.querySelector("p").textContent = msg;  
// feedbackMesssage.getElementsByTagName("p")[0].textContent = msg;  