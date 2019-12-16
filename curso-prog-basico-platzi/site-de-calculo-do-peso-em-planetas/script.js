var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;

//var massa = 64;//

var peso = prompt("Digite o peso do objeto na terra");

//var pesoFinal = (peso / gTerra) * gMarte;//

var planeta = prompt("Qual planeta deseja saber o peso (Escolha entre marte ou jupter)?")
var pesoFinal;

if(planeta == "marte"){
    var pesoFinal = (peso / gTerra) * gMarte;

    document.write("O peso desse objeto em marte é: " + pesoFinal);

}else if(planeta == "jupter"){
    pesoFinal = (peso / gTerra) * gJupter;

    document.write("O peso desse objeto em jupter é: " + pesoFinal);
} else{
    document.write("Não posso calcular o peso neste planeta");
}

