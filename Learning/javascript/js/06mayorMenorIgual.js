
var num1 = parseInt(prompt("Introduce primer número: ", 0));
var num2 = parseInt(prompt("Introduce segundo número: ", 0));

while (isNaN(num1) || isNaN(num2)) {
    alert("Inserte números")
    num1 = parseInt(prompt("Introduce primer número: ", 0));
    num2 = parseInt(prompt("Introduce segundo número: ", 0));
}

    alert("La suma de " + num1 + "+" + num2 + "=" + (num1 + num2));

    if (num1 == num2) {
        alert(num1 + " es igual a " + num2);
    } else if (num1 < num2) {
        alert(num1 + " es menor que " + num2);
    } else {
        alert(num1 + " es mayor a " + num2);
    }
