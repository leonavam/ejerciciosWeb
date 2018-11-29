//OBJETOS

var objetoTest = {

    name: "Leonel",
    edad: 23,

    descripcion: function(){
        console.log("Su nombre es " + objetoTest.name + " y tiene " + objetoTest.edad + " años.");   
    },

    saluda: function(saludo){
        console.log(saludo + " " + objetoTest.name);
        
    }

}

console.log(objetoTest.name);
console.log(objetoTest.edad);

objetoTest.descripcion();
objetoTest.saluda("Hola");


//OBJETOS PRIMITIVOS
var d = new Date();
console.log("Dia: ", d);

var v = d.getFullYear();
console.log(v);


