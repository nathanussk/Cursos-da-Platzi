var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var x = 50;
var y = 50;

//add botao web//
var botao = document.getElementById("botao");
botao.addEventListener("click", desenhaLinhaVermelha);

function desenhaLinhaVermelha(){
    desenha("red", x, y, 200, 200);
}

desenha("black", x+150, y, 200, 200)

function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath(); //desenho//
    papel.strokeStyle = cor; //cor//
    papel.lineWidth = 3; //tamanho//
    papel.moveTo(xInicial, yInicial); //mover//
    papel.lineTo(xFinal, yFinal); //ponto//
    papel.stroke(); //definido//
    papel.closePath(); //para//
}








//papel.beginPath(); //desenho//
//papel.strokeStyle = "red"; //cor//
//papel.lineWidth = 3; //tamanho//
//papel.moveTo(x+150, y); //mover//
//papel.lineTo(200, 200); //ponto//
//papel.stroke(); //definido//
//papel.closePath(); //para//