'use strict'

function show(n, n2, ok=false){

    if(!ok){
        console.log("Soy falsa!!");
    } else{
        document.write("Hola soy verdadera");
    }
}


show(1, 4);


var cajas= document.querySelectorAll(".cajas");


for (let i = 0; i < cajas.length; i++) {
    
    cajas[i].style.width = "100px";
    cajas[i].style.height = "75px";
    cajas[i].style.background = "blue";
    cajas[i].style.marginTop = "5px";
    cajas[i].style.marginRight = "5px";
    cajas[i].style.display = "inline-block";      

}


