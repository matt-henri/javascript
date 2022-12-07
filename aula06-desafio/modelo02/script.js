function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
      window.alert('[ERRO] Verificar os dados e tente novamente!')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
         gênero = 'Homem'
         if  (idade >= 0 && idade < 17) {
            // criança
            img.setAttribute('src', './imagens/menino.png')
         } else if (idade >= 18 && idade < 28) {
            //  jovem
            img.setAttribute('src', './imagens/jovemh.png')
         } else if (idade < 50){
            // adulto
            img.setAttribute('src', './imagens/adulto.png')
         } else {
            // idoso
            img.setAttribute('src', './imagens/idoso.png')
         }
      } else if (fsex[1].checked) {
         gênero = 'Mulher'
         if  (idade >= 0 && idade < 17) {
            // criança
            img.setAttribute('src', './imagens/menina.png')
         } else if (idade >= 18 && idade < 28) {
            //  jovem
            img.setAttribute('src', './imagens/jovemm.png')
         } else if (idade < 50){
            // adulto
            img.setAttribute('src', './imagens/adulta.png')
         } else {
            // idoso
            img.setAttribute('src', './imagens/idosa.png')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
   }
}