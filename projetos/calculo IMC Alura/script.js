function verificar() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value)
    let resultado = document.getElementById("resultado")
    let botaores = (peso / (altura * altura)).toFixed(2);
    let imc = document.getElementById("imc")

    resultado.innerHTML = ""
    imc.innerHTML = ""

    resultado.innerHTML = ("Seu IMC é " + botaores + "!")
    if (botaores <= 19) {
        imc.innerHTML += ("Você está abaixo do peso")
    }
    else if (botaores > 19 && botaores < 26) {
        imc.innerHTML += ("Você está no seu peso ideal")
    }
    else if (botaores > 25 && botaores < 30) {
        imc.innerHTML += ("Você está acima do peso")
    }
    else {
        imc.innerHTML += ("Você está obeso")
    }
}