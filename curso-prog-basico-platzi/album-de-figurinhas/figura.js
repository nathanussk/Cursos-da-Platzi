class Figura {

    constructor(nome, pais, posicao, urlImagem){
        this.nome = nome;
        this.pais = pais;
        this.posicao = posicao;
        
        this.imagen = new Image(320, 400)
        this.imagen.src = urlImagem;
    }

    falar(){
        alert("Meu nome é: " + this.nome)
    }
    
    exibir(){
        document.body.appendChild(this.imagen)
        document.write("<br />Nome: " + this.nome + "<br />");
        document.write("Pais: " + this.pais + "<br />");
        document.write("Posicao: " + this.posicao + "<br />");
    }
}