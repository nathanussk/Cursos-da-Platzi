console.log(`
## async e await - fetch

`);

const busqueUsuario = async () => {
  const result = await fetch('https://reqres.in/api/users/2');
  const dados = await result.json();
  console.log(dados);
};

busqueUsuario();