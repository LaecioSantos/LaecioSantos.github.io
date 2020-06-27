class TelaInicial {
  constructor(){
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(50);
    text('As aventuras de', width / 2, height / 3);
    textSize(150);
    text('Hipsta', width / 2, height / 3 + 120)
    textSize(20); 
    text(versao, width / 2 + 150, height / 3 + 110)
    textAlign(RIGHT)
    textSize(20);
    textFont("Arial");
    text('Laécio Softwares, 2020', width - 100, height -20);
    
  }
  
  _botao(){
    botaoGerenciador.y = height / 3 + 150;
    botaoGerenciador.draw();
  }
}