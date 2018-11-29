var tiempo = document.querySelector("#tiempo");
var segundos = 0;

// Set Interval     (Intervalo de tiempo)
// setInterval(funcion, tiempo)

var intervalo = setInterval(function() {

    segundos++;

    tiempo.innerHTML = segundos;
    
}, 1000);


// SET TIMEOUT        (RETARDO DE TIEMPO)
// setTimeout(funcion, tiempo)

setTimeout( function() {

    clearInterval(intervalo);
    
}, 5000);
