console.log(`
## Tratamento de erros

- try / catch
- try / finally
- try / catch / finally

`);
/*
const gerarErro = () => {
  throw new Error("Ops, algo deu errado");
};

const erroComTratamento = () => {
  try {
    gerarErro();
  } catch (error) {
    console.log(`Um erro aconteceu: ${error.message}`);
  } finally {
    console.log("`finally` é executado sempre (com ou sem erro)");
  }
};
erroComTratamento();
console.log('depois do erro com tratamento');

const erroSemTratamento = () => {
  gerarErro();
};
erroSemTratamento();
console.log('depois do erro sem tratamento');

*/
