function preload(){

  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png'); 
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png'); 
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');

  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  somDoJogo = loadSound('sons/trilha_jogo.mp3'); 

  somCrash = loadSound('sons/crash.mp3')

  fita = loadJSON('fita/fita.json'); 

}

//Executa uma vez antes do jogo começar 
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40); //padrao 
  // somDoJogo.loop(); 
  
  jogo = new Jogo(); 
  telaInicial = new TelaInicial(); 
  jogo.setup(); 
  cenas = {
    jogo, 
    telaInicial
  }
  
  botaoGerenciador = new BotaoGerenciador('Inicar', width/2, height/2); 
}

function keyPressed(){
  jogo.keyPressed(key); 
}

//Executa várias vezes 
function draw() {
  cenas[cenaAtual].draw();
}