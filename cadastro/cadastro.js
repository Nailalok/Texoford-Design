const card = document.getElementById("card");
const tipoDeConta = document.getElementById("tipo");
const nome = document.getElementById("nome");
const ddd = document.getElementById("ddd");
const numero = document.getElementById("numero");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const criarConta = document.getElementById("criar-conta");
const txt = document.getElementById("txt");
const process = document.getElementById("process");

window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("tela-process").style.display = "none";
    }, 2000);
})


card.addEventListener("submit", (e)=>{
    e.preventDefault();
    document.getElementById("tipo-content").textContent = tipoDeConta.value;
    document.getElementById("certeza").style.display = "flex";
    document.getElementById("sim").addEventListener("click", ()=>{
        document.getElementById("certeza").style.display = "none";
        txt.style.display = "none";
        process.style.display = "flex";
        document.body.style.pointerEvents = 'none';
        localStorage.setItem("tipo", tipoDeConta.value);
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("ddd", ddd.value);
        localStorage.setItem("numero", numero.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", senha.value);
        setTimeout(function() {
            window.location = "../dashboard/dashboard.html";
        }, 4000);
    });
    let n = 0;
    document.getElementById("mudar").addEventListener("click", ()=>{
        n =+ 1;
        const currentIndex = tipo.selectedIndex;
        if(n === tipo.options.length){
            n = 0;
        }
        tipo.selectedIndex = currentIndex + n;
        document.getElementById("certeza").style.display = "none";
    });
});
window.addEventListener('pageshow', function(event) {
    if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
        process.style.display = 'none';
        txt.style.display = 'flex';
        document.body.style.pointerEvents = 'all';
    }
});
tipoDeConta.addEventListener("change", (e)=>{
    if(e.target.value === "empresa"){
        nome.placeholder = "Nome Da Empresa";
        numero.placeholder = "Número Da Empresa";
        email.placeholder = "E-mail Da Empresa";
    } else{
        nome.placeholder = "Nome Completo";
        numero.placeholder = "Número";
        email.placeholder = "E-mail";
    }
});
ddd.addEventListener("change", function(){
    const selectedValue = this.value;
    this.options[this.selectedIndex].textContent = selectedValue;
});
numero.addEventListener("focus", ()=>{
    ddd.style.border = `2px solid #DCF3FF`;
    ddd.style.borderRight = "none";
});