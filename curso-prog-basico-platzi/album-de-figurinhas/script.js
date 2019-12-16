
var ronaldinho = new Figura("Ronaldinho Gaucho", "Brasil", "Atacante", "./imgs/ronaldinho.jpg");
var messi = new Figura("Lionel Messi", "Argentina", "Atacante", "./imgs/messi.jpg");
var cristiano = new Figura("Cristiano Ronaldo", "Portugal", "Atacante", "./imgs/cristiano.jpg");

var colecaoFiguras = [];

colecaoFiguras.push(ronaldinho);
colecaoFiguras.push(messi);
colecaoFiguras.push(cristiano);

for(var i = 0; i<colecaoFiguras.length; i++){
    
    colecaoFiguras[i].exibir();
}
