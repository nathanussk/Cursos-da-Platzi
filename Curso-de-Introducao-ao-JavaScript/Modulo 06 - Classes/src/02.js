/*
  Utilizando herança, crie uma classe chamada Quadrado
  que herda de Retangulo. A classe quadrado deve receber
  um só parâmetro no construtor (tamanho) e deve imprimir
  a área corretamente
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

class Quadrado extends Retangulo {
  constructor(tamanho) {
    super(tamanho, tamanho);
  }
}
new Quadrado(5).imprimeArea();
//correto

//errada 1
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  imprimeArea() {
    console.log(this.altura * this.largura);
  }
}

class Quadrado inherits Retangulo {
  constructor(tamanho) {
    super(tamanho, tamanho);
  }
}
new Quadrado(5).imprimeArea();
//errada 1

//errada 2
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  imprimeArea() {
    console.log(this.altura * this.largura);
  }
}

class Quadrado : Retangulo {
  constructor(tamanho) {
    super(tamanho, tamanho);
  }
}
new Quadrado(5).imprimeArea();
//errada 2

//errada 3
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  imprimeArea() {
    console.log(this.altura * this.largura);
  }
}

class Quadrado extends Retangulo {
  constructor(tamanho) {
    this.tamanho = tamanho;
  }
}
new Quadrado(5).imprimeArea();
//errada 3