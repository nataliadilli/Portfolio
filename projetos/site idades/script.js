function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')
    let img = window.document.getElementById("foto")

    if (fano.value <= 1900 || Number(fano.value) > ano) {
        window.alert('[ERRO] Informe um ano válido.')
    } else {
        let fsex = window.document.getElementsByName('radsex');

        let idade = ano - Number(fano.value)
        let genero = ""
        if (fsex[0].checked) {
            genero = "homem"
            img.style.display = 'block';
            if (idade >= 0 && idade < 10) {
                img.src = './fotos/homemcrianca.jpg'
            }
            else if (idade < 21) {
                img.src = './fotos/homemjovem.jpg'

            }
            else if (idade < 60) {
                img.src = './fotos/homemadulto.jpg'

            }
            else {
                img.src = './fotos/homemidoso.jpg'

            }

        } else if (fsex[1].checked) {
            genero = "mulher"
            img.style.display = 'block';

            if (idade >= 0 && idade < 10) {
                img.src = './fotos/mulhercrianca.jpg'
            }
            else if (idade < 21) {
                img.src = './fotos/mulherjovem.jpg'

            }
            else if (idade < 60) {
                img.src = './fotos/mulheradulta.jpg'

            }
            else {
                img.src = './fotos/mulheridosa.jpg'

            }
        }

        if(fsex[0].checked || fsex[1].checked) {
            res.style.textAlign = "center"
            res.innerHTML = "Detectamos: " + genero + " com " + idade + " anos!";
        } else {
            window.alert('[ERRO] Favor informar o sexo.')
        }
       
    }
}