// logar conta
const pagCadastro = document.getElementById("btn_cadastro").addEventListener("click", function (entrarCadastro) {
entrarCadastro.preventDefault()

    location.href = "cadastro.html"
})

document.getElementById("form_login").addEventListener("submit", function (e) {
    e.preventDefault()

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const conta = pegarConta(usuario);

    if(!conta) {
        alert("Usuário não encontrado.");
        return;
    }

    if(conta) {
        if(conta.password !== senha) {
            alert("Usuário não encontrado")
            return;
        }

        location.href = "/lista-recados.html";
    }
});

function pegarConta(key) {
    const conta = localStorage.getItem(key);

    if(conta) {
        return JSON.parse(conta)
    }

    return "";
}