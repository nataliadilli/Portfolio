function carregar (){
let msg = window.document.getElementById("msg")
let img = window.document.getElementById("foto")
let data = new Date()
let hora = data.getHours()
msg.innerHTML = "agora sao " + hora +  " horas"

if (hora >= 5 && hora < 12){
    img.src="./fotos/fotomanha.jpg" 
    document.body.style.background = "rgb(201, 177, 147)"
}

else if (hora >=12 && hora <= 18){
    img.src="./fotos/fototarde.jpg" 
    document.body.style.background ="rgb(132, 173, 209)"
}
else {
    img.src="./fotos/fotonoite.jpg"
    document.body.style.background = "rgb(107, 88, 131)"
}
}