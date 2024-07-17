function registrar() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirma_senha = document.getElementById("confirma_senha").value
    let regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (this.isNullString(nome)) {
        return alert("Por favor preencha o campo Nome")
    }

    if (this.isNullString(email)) {
        return alert("Por favor preencha o campo E-mail")
    }

    if (this.isNullString(senha)) {
        return alert("Por favor preencha o campo Senha")
    }

    if (this.isNullString(confirma_senha)) {
        return alert("Por favor preencha o campo Confirmar senha")
    }

    if (senha != confirma_senha) {
        return alert("As senhas não correspondem")
    }

    if (!regex_email.test(email)) {
        return alert("Por favor digite um e-mail valido!")
    }

    let objetoCadastro = {
        nome: nome,
        email: email,
        senha: senha
    }

    alert("Seja bem vindo " + objetoCadastro.nome);
}

function isNullString(valor) {
    return valor == null || valor == '';
}