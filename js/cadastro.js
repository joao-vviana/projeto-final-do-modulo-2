// criar conta

const formCadastro = document.getElementById("form_cadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirme_senha").value;

    if(usuario.length < 5) {
        alert("Seu usuário deve ter no mínimo 5 digitos.");
        return;
    }

    if(senha.length < 4) {
        alert("Preencha a senha com no mínimo 4 digitos.");
        return;
    }

    if(confirmarSenha != senha) {
        alert("As senhas devem ser iguais.");
        return;
    }

    salvarConta({
        login: usuario,
        password: senha,
        confirmPassword: confirmarSenha,
        transactions: []
    });

    alert("Conta criada com sucesso!");
});

function salvarConta(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
    location.href = "/index.html"
}

function pegarConta(key) {
    const conta = localStorage.getItem(key);

    if(conta) {
        return JSON.parse(conta)
    }

    return "";
}