const card = document.getElementById("card");
const tipoDeConta = document.getElementById("tipo");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const login = document.getElementById("login");
const txt = document.getElementById("txt");
const process = document.getElementById("process");

window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("tela-process").style.display = "none";
    }, 2000);
})

card.addEventListener("submit", (e)=>{
    e.preventDefault();
    txt.style.display = "none";
    process.style.display = "flex";
    document.body.style.pointerEvents = 'none';
    const tipoStorage = localStorage.getItem("tipo");
    const emailStorage = localStorage.getItem("email");
    const senhaStorage = localStorage.getItem("senha");
    if(email.value === emailStorage && tipoDeConta.value === tipoStorage && senha.value == senhaStorage){
        document.getElementById("falha").style.display = "none";
        card.style.marginBottom = 0+"px";
            card.style.height = 220+"px";
        setTimeout(function() {
            window.location = "../dashboard/dashboard.html";
        }, 4000);
    } else{
        setTimeout(function() {
            card.style.marginBottom = 6+"px";
            card.style.height = 240+"px";
            document.getElementById("falha").style.display = "flex";
            process.style.display = 'none';
            txt.style.display = 'flex';
            document.body.style.pointerEvents = 'all';
        }, 2500);
    }
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
        email.placeholder = "E-mail Da Empresa";
    } else{
        email.placeholder = "E-mail";
    }
});