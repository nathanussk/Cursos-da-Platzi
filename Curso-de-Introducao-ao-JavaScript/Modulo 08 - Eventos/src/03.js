console.log(`
## Propagação de eventos

`);

const vermelha = document.getElementById('vermelha');
const azul = document.getElementById('azul');
const verde = document.getElementById('verde');

vermelha.addEventListener('click', () => {
  console.log('click:vermelha');
});

azul.addEventListener('click', (evento) => {
  evento.stopPropagation();
  console.log('click:azul');
});

verde.addEventListener('click', (evento) => {
  evento.stopPropagation();
  console.log('click:verde');
});