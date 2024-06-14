function dividirNumeros(){
let numero1=960
let numero2=60
let resultado=numero1/numero2;
console.log(resultado); 
texto= 'O resultado dessa divisão é: ' + resultado;  
textSize(25) 
fill("green")
text(texto, 20,150,350,250);
}

function setup() {
createCanvas(400, 400);

}

function draw() {
background(0);
dividirNumeros()
}
