function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12) {
    // BOM DIA!
    img.src = 'manha.png'
    document.body.style.background ='#FDD0A7'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.background ='#BC6321'
} else {
    // BOA NOITE!
    img.src = 'noite.png'
    document.body.style.background ='#69425A'
}


}