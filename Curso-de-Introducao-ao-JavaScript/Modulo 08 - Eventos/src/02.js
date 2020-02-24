console.log(`
## Reagindo a eventos

`);

const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
  console.log('botão clicado');
});

const texto = document.getElementById('texto');
texto.addEventListener('keyup', (evento) => {
  console.log(evento.target.value);
});