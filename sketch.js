let xb = 300;
let yb = 200;
let diametro = 25;
let xvb = 6;
let yvb = 6;
let raio = diametro/2
let xr = 0;
let yr = 150;
let lr = 7;
let ar = 80;
let xri = 590;
let yri = 150;
let colidiu = false;
let meuspontos = 0;
let pontosinimigo = 0;
let POC;
let PONTO;
let LADY;

function preload(){
  bolinha = loadImage("cora.png");
  PONTO = loadSound("PONTO.wav");
  POC = loadSound("POC.wav");
  FUNDO = loadSound("LADY.mp3");
}
function setup() {
  createCanvas(600, 400);
  FUNDO.loop();
}

function draw() {
  background(0);
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr,color("#E91E63"));
  mostraraquete(xri,yri,color("rgb(223,13,223)"));
  quicabolaraquetes(xri,yri);
  quicabolaraquetes(xr,yr);
  mexeraquete(); 
  mexeraqueteinimiga(); 
  placar();
  pontos();
  letras();
  fill("grey")
  rect(300,0,1,400);
  
  
}

function mostrabola() {
    image(bolinha, xb, yb, diametro, diametro);
}

function mexebola(){
 xb += xvb;
  yb += yvb; 
}

function quicabola(){
   if (xb + raio > width || xb < 0){
    xvb *= -1;
  }
  
  if (yb + raio > height || yb - raio < 0){
    yvb *= -1;
  }
}

function mostraraquete(x,y,color) {
  fill(color);
  rect(x,y,lr,ar);
}

function mexeraquete() {
  if (keyIsDown(UP_ARROW))
  yr -= 10;
  
  if (keyIsDown(DOWN_ARROW))
  yr += 10;
}

function mexeraqueteinimiga() {
  if (keyIsDown(87))//s
  yri -= 10;
  
  if (keyIsDown(83))//w
  yri += 10;
}

function quicabolaraquetes(x,y) {
  colidiu = collideRectCircle(x, y, lr, ar, xb, yb, diametro);
    if (colidiu){
        xvb *= -1;
      POC.play();
  }
  
}

function placar(){
   stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill("#E91E63");
    rect(150, 10, 40, 20);
    fill(255);
    text(meuspontos, 170, 15);
    fill("rgb(226,0,226)");
    rect(430, 10, 40, 20);
    fill(255);
    text(pontosinimigo, 450, 15);
}

function pontos(){
    if (xb > 585) {
    meuspontos += 1;
      PONTO.play();
  }
  if (xb < -2) {
    pontosinimigo += 1;
      PONTO.play();
  }
}

function letras(){
  let frase = "MEUS PONTOS";
  let xf = 90; 
  let yf = 40; 
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white"); 
  text(frase, xf, yf);
  
  let frase2 = "PONTOS DO OPONENTE";
  let xf2 = 330; 
  let yf2 = 40; 
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white"); 
  text(frase2, xf2, yf2);
}