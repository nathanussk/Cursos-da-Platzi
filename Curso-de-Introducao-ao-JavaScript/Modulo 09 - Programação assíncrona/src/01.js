console.log(`
## Callbacks

`);

const operacaoDemorada = (callback) => {
  console.log('começando operação');
  setTimeout(() => {
    console.log('finalizando operação');
    callback({ nome: 'Luís' });
  }, 1500);
};

operacaoDemorada((pessoa) => {
  console.log(pessoa);
});