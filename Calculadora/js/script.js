
// PROPIEDADES DE LA CALCULADORA

var propiedades = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    borrar: document.querySelector("#borrar"),
    cantidadDecimal: false,
    resultado: false
}


// MÉTODOS DE LA CALCULADORA

var metodo = {


    inicio: function () {

        for (let i = 0; i < propiedades.teclas.length; i++) {
            propiedades.teclas[i].addEventListener("click", metodo.clickTecla)

        }

        propiedades.borrar.addEventListener("click", metodo.borrarCaja);


    },

    teclado: function () {

        document.addEventListener("keydown", metodo.pushTecla);

    },

    pushTecla: function (tecla) {

        if (tecla.keyCode == 48 || tecla.keyCode == 96) {

            propiedades.accion = "numero";
            propiedades.digito = 0;
        }

        else if (tecla.keyCode == 49 || tecla.keyCode == 97) {

            propiedades.accion = "numero";
            propiedades.digito = 1;
        }

        else if (tecla.keyCode == 50 || tecla.keyCode == 98) {

            propiedades.accion = "numero";
            propiedades.digito = 2;
        }

        else if (tecla.keyCode == 51 || tecla.keyCode == 99) {

            propiedades.accion = "numero";
            propiedades.digito = 3;
        }

        else if (tecla.keyCode == 52 || tecla.keyCode == 100) {

            propiedades.accion = "numero";
            propiedades.digito = 4;
        }

        else if (tecla.keyCode == 53 || tecla.keyCode == 101) {

            propiedades.accion = "numero";
            propiedades.digito = 5;
        }

        else if (tecla.keyCode == 54 || tecla.keyCode == 102) {

            propiedades.accion = "numero";
            propiedades.digito = 6;
        }

        else if (tecla.keyCode == 55 || tecla.keyCode == 103) {

            propiedades.accion = "numero";
            propiedades.digito = 7;
        }

        else if (tecla.keyCode == 56 || tecla.keyCode == 104) {

            propiedades.accion = "numero";
            propiedades.digito = 8;
        }

        else if (tecla.keyCode == 57 || tecla.keyCode == 105) {

            propiedades.accion = "numero";
            propiedades.digito = 9;
        }

        else if (tecla.keyCode == 187 || tecla.keyCode == 107) {

            propiedades.accion = "signo";
            propiedades.digito = "+";
        }

        else if (tecla.keyCode == 189 || tecla.keyCode == 109) {

            propiedades.accion = "signo";
            propiedades.digito = "-";
        }

        else if (tecla.keyCode == 88 || tecla.keyCode == 106) {

            propiedades.accion = "signo";
            propiedades.digito = "*";
        }

        else if (tecla.keyCode == 111) {

            propiedades.accion = "signo";
            propiedades.digito = "/";
        }

        else if (tecla.keyCode == 190 || tecla.keyCode == 110) {

            propiedades.accion = "decimal";
            propiedades.digito = ".";
        }

        else if (tecla.keyCode == 13) {

            propiedades.accion = "igual";
        }

        else if (tecla.keyCode == 8) {

            propiedades.accion = "";
            metodo.borrarCaja();
        }

        else {
            propiedades.accion = "";
            propiedades.digito = "";

        }

        metodo.calculadora(propiedades.accion, propiedades.digito);


    },


    clickTecla: function (event) {

        propiedades.accion = event.target.getAttribute("class");
        propiedades.digito = event.target.innerHTML;

        metodo.calculadora(propiedades.accion, propiedades.digito);

    },

    calculadora: function (accion, digito) {
        switch (accion) {
            case "numero":
                propiedades.cantidadSignos = 0;
                if (propiedades.operaciones.innerHTML == 0) {
                    propiedades.operaciones.innerHTML = digito;
                } else {
                    if (propiedades.resultado) {
                        propiedades.resultado = false;
                        propiedades.operaciones.innerHTML = digito;
                    } else {
                        propiedades.operaciones.innerHTML += digito;
                    }
                }
                break;
            case "signo":
                propiedades.cantidadSignos++;

                if (propiedades.cantidadSignos == "1") {

                    if (propiedades.operaciones.innerHTML == "0") {
                        propiedades.operaciones.innerHTML = 0

                    } else {
                        propiedades.operaciones.innerHTML += digito;
                        propiedades.cantidadDecimal = false;
                        propiedades.resultado = false;

                    }
                }
                break;
            case "decimal":
                if (!propiedades.cantidadDecimal && propiedades.cantidadSignos != 1) {
                    propiedades.operaciones.innerHTML += digito;
                    propiedades.cantidadDecimal = true;
                    propiedades.resultado = false;
                }

                break;
            case "igual":

                propiedades.operaciones.innerHTML = eval(propiedades.operaciones.innerHTML);

                let expresion = /./g;

                if (!expresion.test(propiedades.operaciones.innerHTML)) {
                    propiedades.cantidadDecimal = true;
                }

                propiedades.resultado = true;
                break;
            default:

                break;
        }
    },

    borrarCaja: function () {
        propiedades.resultado = false;
        propiedades.operaciones.innerHTML = 0;
    },

}

metodo.inicio();
metodo.teclado();