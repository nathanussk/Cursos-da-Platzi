var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

//puxa a imagem//
var fundo = {
    url: "./imgs/fundo.png"
}

var vaca = {
    url: "./imgs/vaca.png"
}

var porco = {
    url: "./imgs/porco.png"
}

var frango = {
    url: "./imgs/frango.png"
}

//add a imagem//
fundo.imagen =  new Image();
fundo.imagen.src = fundo.url;

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;

porco.imagen = new Image();
porco.imagen.src = porco.url;

frango.imagen = new Image();
frango.imagen.src = frango.url;

//carregar as imagem//
fundo.imagen.addEventListener("load", carregaFundo);
vaca.imagen.addEventListener("load", carregaVaca);
frango.imagen.addEventListener("load", carregaFrango);
porco.imagen.addEventListener("load", carregaPorco);



function carregaFundo(){
    papel.drawImage(fundo.imagen, 0, 0);
}

function carregaVaca(){
    var numeroVacas = numeroAleatorio(2, 10);

    for(var i=0; i<numeroVacas; i++){
        
        var xA = numeroAleatorio(100, 400);
        var yA = numeroAleatorio(100, 400);
        papel.drawImage(vaca.imagen, xA, yA);
    }
}

function carregaPorco(){
    var numeroPorcos = numeroAleatorio(8, 30);

    for(var i=0; i<numeroPorcos; i++){
        
        var xA = numeroAleatorio(150, 250);
        var yA = numeroAleatorio(150, 250);
        papel.drawImage(porco.imagen, xA, yA);
    }
}

function carregaFrango(){
    var numeroFrangos = numeroAleatorio(4, 20);

    for(var i=0; i<numeroFrangos; i++){
        
        var xA = numeroAleatorio(400, 200);
        var yA = numeroAleatorio(400, 200);
        papel.drawImage(frango.imagen, xA, yA);
    }
}

//funcao que retorna um numero aleatorio//
function numeroAleatorio(x, y){
    return Math.floor(Math.random()*(y-x)+1) + x;
}

var z = 10;

for(var i=0; i<z; i++){
    console.log(numeroAleatorio(100, 200))
}