const horarios = document.querySelectorAll(".horario.disponivel");
const mensagem = document.getElementById("mensagem");

horarios.forEach(function (horario) {

    horario.addEventListener("click", function () {

        horarios.forEach(function (item) {
            item.classList.remove("selecionado");
        });

        horario.classList.add("selecionado");

        const hora = horario.getAttribute("data-horario");

        mensagem.textContent =
            "Horário selecionado: " + hora +
            ". Clique novamente para confirmar o agendamento.";

    });

});


const botoesAgendar = document.querySelectorAll(".btn-agendar");

botoesAgendar.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const data = botao
            .parentElement
            .querySelector("strong")
            .textContent;

        mensagem.textContent =
            "Data selecionada: " + data +
            ". Agora escolha um horário disponível.";

    });

});