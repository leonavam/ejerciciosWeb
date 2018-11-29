
var suma = 0;
var contador = 0;

do {
    
    var num = parseInt(prompt("Introduce valores, con negativo termina la ejecución"));

    if (isNaN(num)) {
        num = 0;
    } else if( num > 0 ){
        suma += num;
        contador++;
    }
    console.log(suma);
    console.log(contador);

} while (num >= 0);

alert("La suma es " + suma + "\nLa media es " + (suma/contador));