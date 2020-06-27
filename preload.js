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
  
    somCrash = loadSound('sons/crash_2.wav')
  
    fita = loadJSON('fita/fita.json'); 
  
  }
  