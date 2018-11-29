//Se inician con mayúscula

var string = new String("Esto es un string!");
console.log(string);


var num = new Number(20);
console.log(num);


var boolean = new Boolean(false);
console.log(boolean);


var array = new Array("rojo", "verde", "azul");
console.log(array);


var object = new Object({
    nombre: "Pedro",
    edad: 30
});
console.log(object);


//Para crear Clases
//Se crea primero el Prototipo

function Persona() {

    //Propiedades públicas
    this.nombre;
    this.edad;

}

var test = new Persona();
test.nombre = "Erik";
test.edad = 23;
console.log(test);

//Clases con parámetros

function Animales(name, peso){
    this.nombre = name;
    this.peso = peso;
}
var mascota = new Animales("perro", 4.3);
console.log(mascota);

