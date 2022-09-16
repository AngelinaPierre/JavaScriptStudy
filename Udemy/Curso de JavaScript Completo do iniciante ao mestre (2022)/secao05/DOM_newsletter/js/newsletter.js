
// recebendo valor do input em uma constante
const txtEmail = document.getElementById("txtEmail");
const msgFeedback = document.getElementById("newsletterFeedback"); // elemento onde vamos mostrar a mensagem
console.log("CL1:" + txtEmail.value);

function cadastrarEmail(){
    let email = txtEmail.value;
    console.log("CL3: " + email);
    msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso!`;

}

console.log(txtEmail.value);
