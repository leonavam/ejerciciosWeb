

var num1 = parseInt(prompt("Insert number1 ", 0));
var num2 = parseInt(prompt("Insert number2 ", 0));

document.write("Numeros: <br/>")
for (let i = num1; i <= num2; i++) {
    document.write(i + "<br/>");
}