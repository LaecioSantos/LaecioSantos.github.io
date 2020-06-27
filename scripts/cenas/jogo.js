class Jogo {

  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa; 
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial); 
    
    personagem = new Personagem(matrizPersonagem,
      imagemPersonagem,
      0, 30, 110, 135, 220, 270);

    inimigo = new Inimigo(matrizInimigo,
      imagemInimigo,
      width - 52, 30, 52, 52, 104, 104, 10);

    inimigoGrande = new Inimigo(matrizInimigoGrande,
      imagemInimigoGrande,
      width, 0, 200, 200, 400, 400, 15);

    inimigoVoador = new Inimigo(matrizInimigoVoador,
      imagemInimigoVoador,
      width - 52, 200, 100, 75, 200, 150, 10);

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
    }
  }

  draw() {
    if(inicioJogo){
      this.ativarVisualizacaoPainelVelocidade(); 
      inicioJogo = 0; 
    }

    cenario.exibe();
    cenario.move();

    vida.draw(); 
    
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice]; 
    const inimigo = inimigos[linhaAtual.inimigo];
    inimigo.velocidade = linhaAtual.velocidade * multiplicadorVelocidade;

    const inimigoVisivel = inimigo.x < -inimigo.largura;  

    if(mostrarPainelVelocidade){
      this.mostrarVelocidade(); 
    }

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece(); 

      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
        
        multiplicadorVelocidade+= 0.5; 
        this.ativarVisualizacaoPainelVelocidade(); 

      }
    }

    if (personagem.estaColidindo(inimigo)) {
      somCrash.play();
      vida.perdeVida(); 
      personagem.tornarInvencivel(); 
      if (vida.vidas == 0) {
        terminoJogo = 1; 
        image(imagemGameOver, width / 2 - 200, height / 3); 
        somDoJogo.stop();
        noLoop(); 
      }
    }

  }

  mostrarVelocidade(){
    textAlign(CENTER)
    textSize(50);
    text('Velocidade ' + multiplicadorVelocidade , width / 2, height / 3);
  }

  ativarVisualizacaoPainelVelocidade(){
    mostrarPainelVelocidade = 1; 
    setTimeout(() => {
      mostrarPainelVelocidade = 0
    }, 2000)
  }
}