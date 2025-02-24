function setup() {
    createCanvas(400, 400);
  }
  //Função draw significa desenhar
  function draw() {
    background("gray"); //escolha um código para a cor
  
    // Desenhando a linha superior
    circle(50, 50, 100); // primeiro círculo
    circle(150, 50, 100); // segundo círculo
    circle(250, 50, 100); //Terceiro circulo
    circle(350, 50, 100); // Quarto círculo
  
    // Desenhando a linha inferior
    circle(50, 350, 100); //primeiro círculo
    circle(150, 350, 100); // Segundo círculo
    circle(250, 350, 100); //Terceiro círculo
    circle(350, 350, 100); //Quarto círculo
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  