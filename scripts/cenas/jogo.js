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
      // somDoPulo.play();    -> Movido para o personagem 
    }
  }

  draw() {
    // background(imagemCenario);
    //posição na tela; tamanho total; numero da figura dentro do array de figuras, proporção da imagem original; 
    // image(imagemCenario, -50, 0, width, height);
    // image(imagemCenario, width -50, 0, width, height);
    cenario.exibe();
    cenario.move();

    vida.draw()
    
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    // inimigo.exibe(); 
    // inimigoGrande.exibe();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice]; 
    const inimigo = inimigos[linhaAtual.inimigo];

    const inimigoVisivel = inimigo.x < -inimigo.largura; //Verificar se já saiu da tela 
    
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece(); 

      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      somCrash.play();
      vida.perdeVida(); 
      personagem.tornarInvencivel(); 
      if (vida.vidas == 0) {
        image(imagemGameOver, width / 2 - 200, height / 3); 
        somDoJogo.stop();
        noLoop(); 
      }
      // noLoop()
    }

  }
}