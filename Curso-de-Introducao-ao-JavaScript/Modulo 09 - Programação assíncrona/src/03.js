console.log(`
## async e await

`);

const operacaoDemorada = () => {
  console.log('começando operação');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('finalizando operação');
      //resolve({ nome: 'Luís' });
      reject(new Error('ops'));  
    }, 1500);
  });
};

const rodeApp = async () => {
  try {
    const pessoa = await operacaoDemorada();
    const pessoa2 = await operacaoDemorada();
    console.log(pessoa);
  } catch (erro) {
    console.log(erro.message);
  }
};

rodeApp();
