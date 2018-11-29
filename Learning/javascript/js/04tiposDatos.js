"use strict"


console.log("hola");


//Operadores

var var1 = 7;
var var2 = 5;
var var3 = var1 * var2;
var txt = "Hola";
var test = "13";

console.log(var1, var2, var3, txt);

console.log( String(var1) + String (var3));

console.log( Number( test ) + 7 );

console.log(typeof(var1));
console.log(typeof(txt));
console.log(typeof(test));

for (let i = 0; i < var1; i++) {
    console.log(i);
}    
console.log("Do-While");

do {
    console.log(var1);
    
    var1--;
} while (var1>2);


