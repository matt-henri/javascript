// selecionar elemento

var title = document.querySelector("#title") // tag id

// innerHTML
title.innerHTML = "testando o texto alterado!"


// textContent - mais utilizado e mais recomendado
var subtitle = document.querySelector(".subtitle") // tag class

console.log(subtitle)

subtitle.textContent = "testando o textContent"