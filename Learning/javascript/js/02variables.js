'use strict'
//  Variables

var cadena;
cadena = "Mi nombre es Erik";
console.log("cadena", cadena);

var numero = 5;
console.log("Numero", numero);

var booleana = true;
console.log("Boolean", booleana);

var array = ["rojo", "amarillo", cadena, numero, booleana];
console.log(array);

let test = "hola";

//Variable Objeto, se utiliza con llaves { propiedad: valor,masValores}
var jugo = { ingrediente1 : "fresa",
             ingrediente2 : "mandarina" }
console.log("jugo", jugo);


//Variables DOM
var caja = document.querySelector( "#caja" );
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "gray";

var cajas = document.querySelectorAll( ".cajas" );
console.log("caja", cajas);

//alert("Cuidado Leonel!");