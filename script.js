const criarConta = document.getElementById("criar-conta");
const login = document.getElementById("logar");
const txt = document.getElementById("txt");
const txt0 = document.getElementById("txt0");
const process = document.getElementById("process");
const process2 = document.getElementById("process2");

window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("tela-process").style.display = "none";
        document.getElementById("all").style.display = "flex";
    }, 2000);
});

criarConta.addEventListener("click", () => {
    txt.style.display = "none";
    process.style.display = "flex";
    document.body.style.pointerEvents = 'none';
    setTimeout(function() {
        window.location = "./cadastro/cadastro.html";
    }, 4000);
});

window.addEventListener('pageshow', function(event) {
    if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
        process.style.display = 'none';
        process2.style.display = 'none';
        txt.style.display = 'flex';
        txt0.style.display = 'flex';
        document.body.style.pointerEvents = 'all';
    }
});

login.addEventListener("click", () => {
    txt0.style.display = "none";
    process2.style.display = "flex";
    document.body.style.pointerEvents = 'none';
    setTimeout(function() {
        window.location = "./login/login.html";
    }, 4000);
});