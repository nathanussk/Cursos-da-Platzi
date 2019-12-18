function soma(a, b) {
    return a + b;
}

const subtraia = (a, b) => a - b;
const divida = (a, b) => a / b;
const multiplique = (a, b) => a * b;

const numero1 = 10;
const numero2 = 20;
const resultado = soma(numero1, numero2);

if (resultado > 20) {
    console.log("maior que 20");
} else {
    console.log("menor ou igual a 20");
}
