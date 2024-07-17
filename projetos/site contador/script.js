function verificar() {

    let inicio = Number(document.getElementById('inicio').value);
    let final = Number(document.getElementById('final').value);
    let contador = Number(document.getElementById('contador').value);
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = "";
    if (contador <= 0) {
        window.alert("O valor informado é inválido, será considerado o valor 1.")
        contador = 1
    }

    if (inicio >= 1 && final > inicio && final > contador) {
        resultado.innerHTML += inicio + " , "
        
        for (inicio; inicio < final; contador) {
            inicio += contador

            if (inicio <= final) {
                resultado.innerHTML += inicio

                if (inicio == final) {
                    resultado.innerHTML += " ! "
                } else {
                    resultado.innerHTML += " , "

                }
            } else {
                resultado.innerHTML += " ! "
            }

        }
    } else {
        resultado.innerHTML = "Valores informados inválidos!"
    }



}