const loginForm = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {

        mensagem.textContent = "Preencha todos os campos.";

        return;
    }

    mensagem.textContent = "Login realizado com sucesso!";
});