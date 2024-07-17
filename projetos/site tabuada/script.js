function verificar() {

    let numero = Number(document.getElementById("numero").value)
    let resultado = document.getElementById("resultado");

    if (numero != '' && numero > 0) {

        resultado.innerHTML = '';

        resultado.innerHTML += "A tabuada do número " + numero + " é: <br><br> "

        if (numero >= 1) {

            for (let x = 1; x <= 10; x++) {
                resultado.innerHTML += numero + " X " + x + " = " + numero * x + "<br>"
            }

            resultado.classList.add("resultado");

        }

        document.getElementById("numero").value = null;
    }
}