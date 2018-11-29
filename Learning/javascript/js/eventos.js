var cuadro = document.querySelector("#cuadro");

// Eventos desde DOM

function cambiarColor(){
    cuadro.style.background = "orange";
    cuadro.style.transition = "1s background ease"
}


// Eventos desde Javascript
var boton = document.querySelector("#boton");

boton.addEventListener("click", moverCAja);


function moverCAja(){
    cuadro.style.width = "100%";
    cuadro.style.transition = "1s width ease"
}