class Inimigo extends Animacao{
  
  constructor(matriz, 
      imagem, 
      x, variacaoY, 
      largura, altura,  
      larguraSprite, alturaSprite, velocidade){ 
    super(matriz, imagem,
          x, variacaoY, largura, altura, 
          larguraSprite, alturaSprite);
    
    this.velocidade = velocidade; 
    this.x = width;  
  }
  
  move(){
    this.x = this.x - this.velocidade
    
    if(this.x < - this.largura - this.delay){
      this.x = width; 
    }
  }
  
  /* Inimigo aparece no final da tela */ 
  aparece() {
    this.x = width; 
  }

}