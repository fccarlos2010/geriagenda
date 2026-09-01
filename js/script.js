const cadastroForm = document.getElementById("cadastroForm");
const mensagem = document.getElementById("mensagem");

cadastroForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const nascimento = document.getElementById("nascimento").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (
        nome === "" ||
        cpf === "" ||
        nascimento === "" ||
        telefone === "" ||
        email === "" ||
        senha === "" ||
        confirmarSenha === ""
    ) {

        mensagem.textContent = "Preencha todos os campos.";

        return;
    }

    if (senha !== confirmarSenha) {

        mensagem.textContent = "As senhas não são iguais.";

        return;
    }

    const dataNascimento = new Date(nascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    const mes = hoje.getMonth() - dataNascimento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoje.getDate() < dataNascimento.getDate())
    ) {
        idade--;
    }

    if (idade < 60) {

        mensagem.textContent =
            "O GeriAgenda é destinado a pacientes com 60 anos ou mais.";

        return;
    }

    mensagem.textContent =
        "Cadastro realizado com sucesso!";
});