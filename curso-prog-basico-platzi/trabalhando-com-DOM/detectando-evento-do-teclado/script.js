var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var teclas = {
    Up: 38,
    Right: 39,
    Down: 40,
    Left: 37,
}

var x = 50;
var y = 50;
var movimento = 10;

document.addEventListener("keydown", desenhaLinha);

function desenhaLinha(event){
    switch(event.keyCode){
        case teclas.Down:
            desenha("red", x, y, x, y+movimento);
            y = y + movimento;
        break;              //finalizar o codigo//
        case teclas.Up:
            desenha("red", x, y, x, y-movimento);
            y = y - movimento;
        break;
        case teclas.Right:
            desenha("red", x, y, x+movimento, y);
            x = x + movimento;
        break;
        case teclas.Left:
            desenha("red", x, y, x-movimento, y);
            x = x - movimento;
        break;  
    }
}

function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath(); //desenho//
    papel.strokeStyle = cor; //cor//
    papel.lineWidth = 3; //tamanho//
    papel.moveTo(xInicial, yInicial); //mover//
    papel.lineTo(xFinal, yFinal); //ponto//
    papel.stroke(); //definido//
    papel.closePath(); //para//
}