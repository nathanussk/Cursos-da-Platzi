/*
  Crie uma classe chamada Retangulo que recebe dois
  parâmetros no construtor (altura, largura).
  Crie um método chamado imprimeArea que, ao ser chamado,
  vai imprimir na tela a área do retângulo
*/

//correto
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  imprimeArea() {
    console.log(this.altura * this.largura);
  }
}

new Retangulo(3, 4).imprimeArea();
//correto

//errada 1
Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  imprimeArea() {
    console.log(this.altura * this.largura);
  }
}

new Retangulo(3, 4).imprimeArea();
//errada 1

//errada 2
class Retangulo {
  constructor(altura, largura) {
    altura = altura;
    largura = largura;
  }

  imprimeArea() {
    console.log(altura * largura);
  }
}

new Retangulo(3, 4).imprimeArea();
//errada 2

//errada 3
class Retangulo(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  
  imprimeArea() {
    console.log(this.altura * this.largura);
  }
}

new Retangulo(3, 4).imprimeArea();
//errada 3