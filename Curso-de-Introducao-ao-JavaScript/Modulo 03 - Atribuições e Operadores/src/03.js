console.log(`
## Comparação de valores

- igualdade
- diferença
- maior / menor
`);

console.log("igualdade");
console.log(3 == "3");
console.log(3 === "3");
console.log("a" == "A");
console.log("a" === "A");

console.log("diferença");
console.log(3 != "3");
console.log(3 !== "3");
console.log("a" !== "A");

console.log("maior");
console.log(3 > 1);
console.log(3 > 4);
console.log(3 > 3);
console.log(3 >= 3);

console.log("menor");
console.log(3 < 1);
console.log(3 < 4);
console.log(3 < 3);
console.log(3 <= 3);


const numeroMaximoDeAlunos = 5;
const numeroDeAlunos = 6;
if (numeroDeAlunos > numeroMaximoDeAlunos) {
  console.log('Número máximo de alunos extrapolado');
} else {
  console.log('Número de alunos está OK');
}