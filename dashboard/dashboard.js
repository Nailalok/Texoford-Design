window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("tela-process").style.display = "none";
        document.getElementById("all").style.display = "flex";
    }, 2000);
});

document.querySelectorAll('#distribuicao .div-menor').forEach(div => {
    div.addEventListener('click', () => {
        document.querySelectorAll('#distribuicao .div-menor').forEach(otherDiv => {
            otherDiv.style.border = 'none';
        });
        div.style.border = 1.5+'px'+' '+'solid'+' '+'rgba(1, 1, 1, 0.2)';
        div.style.borderRadius = 10+'px';
    });
});