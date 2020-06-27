class Personagem extends Animacao {
  
    constructor(matriz, 
      imagem, 
      x, variacaoY, 
      largura, altura,  
      larguraSprite, alturaSprite){ 
      
      super(matriz, imagem,
          x, variacaoY, largura, altura, 
          larguraSprite, alturaSprite);
      
      this.variacaoY = variacaoY; 
      this.yInicial = height - this.altura - this.variacaoY; 
      this.y = this.yInicial; 
      
      this.velocidadeDoPulo = 0; 
      this.alturaDoPulo = -50; 
      this.gravidade = 5
      
      this.pulo1 = false; 
      this.pulo2 = false; 
      
      this.invencivel = false; 
  }
  
  pula(){
    if(this.y == this.yInicial || this.pulo2 == false){
      somDoPulo.play(); 
      this.velocidadeDoPulo = this.alturaDoPulo;
      if(this.pulo1 == true) {
        this.pulo2 = true; 
      }else{
        this.pulo1 = true; 
      }
    }
  }
  
  tornarInvencivel() {
    this.invencivel = true
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }
  
  //Faz o personagem sempre cair; 
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo; 
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade; 
    
    if(this.y > this.yInicial){
       this.y = this.yInicial;
       this.pulo1 = false; 
       this.pulo2 = false; 
    }
  }
  
  //https://github.com/bmoren/p5.collide2D#colliderectrect
  estaColidindo(inimigo){
    
    //Este teste é necessário para não fazer com que o personagem perca várias vidas com o mesmo inimigo; 
    if(this.invencivel) {
      return false
    }
    
    const precisao = .7; 
    
    const colisao = collideRectRect(
       this.x, 
       this.y, 
       this.largura * precisao, 
       this.altura * precisao, 
       inimigo.x, 
       inimigo.y, 
       inimigo.largura * precisao,
       inimigo.altura * precisao
      ); 
    
    return colisao; 
  }
  
}; 