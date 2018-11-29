
var num = parseInt(prompt("Mete un numero", 1));

for (let i = 1; i <= num; i++) {
    if (num%i == 0) {
        console.log(i);
    }
}