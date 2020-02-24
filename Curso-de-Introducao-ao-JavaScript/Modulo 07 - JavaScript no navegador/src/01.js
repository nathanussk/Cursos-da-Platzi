console.log(`
## Interagindo com o DOM

`);

const divAula = document.getElementById('01');
divAula.classList.remove('hide');

const caixa = document.getElementById('caixaDeTexto');
console.log(caixa.value);

const textos = document.getElementsByClassName('texto');
console.log(textos.length);

const paragrafos = document.getElementsByTagName('p');
console.log(paragrafos.length);