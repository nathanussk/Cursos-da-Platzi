console.log(`
## Promises

`);

const operacaoDemorada = () => {
  console.log('começando operação');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('finalizando operação');
      resolve({ nome: 'Luís' });
    }, 1500);
  });
};

operacaoDemorada().then((pessoa) => {
  console.log(pessoa);
})
.catch((erro) => {
  console.log(erro.message);
});
