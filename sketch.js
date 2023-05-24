//~Apreta el mouse para que cambie de color~ 

let r, g, b;

function setup() {
  createCanvas(400, 450);
}


function draw() {
  background(220, 230, 180);
   if(mouseX>200 && mouseY<225)
      background(247, 217, 64);
   if(mouseX<200 && mouseY>225)
     background(247, 171, 64);
   if(mouseX>200 && mouseY>225)
     background(171, 245, 61);
  
  
/* if(keyIsPressed) {
    if(key == "V" || key == "v") {
      console.log(frameRate(100));
      
     // beginShape();
      //---SOMBRA TRIANGULO 
      fill(190, 150, 0, 10);
      noStroke();
      triangle(230, 170, 420, 100, 600, 400)
      //---TRIANGULO
      fill(200, 250, 0, 10);
      noStroke();
      triangle(230, 170, 400, 80, 500, 300);
   //   endShape(CLOSE);
    }
  }
  */
  
  if(mouseIsPressed) {
    background(0);
 
  }
  
  
  //---CIRCULOS
  
  fill(200, 0, 0);
  noStroke();
  ellipse(156, 170, 200, 200);
  if(mouseIsPressed) {
    fill(200, 0, 0);
    noStroke();
    ellipse(156, 170, 200, 200);
  }
  
  fill(200, 90, 0);
  ellipse(183, 170, 140, 140);
  if(mouseIsPressed) {
    fill(200, 0, 90);
    ellipse(183, 170, 140, 140);
  }
  
  fill(200, 120, 0);
  ellipse(200, 170, 100, 100);
  if(mouseIsPressed) {
    fill(200, 0, 120);
    ellipse(200, 170, 100, 100);
  }
  
  fill(200, 170, 0);
  ellipse(220, 170, 70, 70);
  if(mouseIsPressed) {
    fill(200, 0, 170);
    ellipse(220, 170, 70, 70);
  }
  
  
  //---SOMBRA TRIANGULO 
  
  fill(190, 150, 0);
  noStroke()
  triangle(230, 170, 420, 100, 600, 400);
  if(mouseIsPressed) {
    fill(190, 0, 150);
    triangle(230, 170, 420, 100, 600, 400);
  }
  
  
  //---TRIANGULO
  
  fill(200, 250, 0);
  noStroke();
  triangle(230, 170, 400, 80, 500, 300);
  if(mouseIsPressed) {
    fill(200, 0, 250);
    triangle(230, 170, 400, 80, 500, 300);
  }
  
  
  //---TRIANGULO CHIQUITO
  
  fill(0, 200, 0);
  stroke(0);
  triangle(290, 390, 190, 390, 290, 290);
  if(mouseIsPressed) {
    fill(0, 0, 200);
    triangle(290, 390, 190, 390, 290, 290);
  }
  
  
  //---TRIANGULOS BBS LOQUITOS
  
  if(mouseIsPressed) {
    fill(r, g, b);
    triangle(43, 23, 23, 36, 41, 50);
    triangle(286, 50, 293, 76, 309, 58);
    triangle(142, 34, 163, 11, 170, 29);
    triangle(17, 153, 35, 163, 19, 172);
    triangle(47, 268, 63, 284, 38, 286);
    triangle(21, 413, 24, 384, 37, 398);
    triangle(110, 341, 122, 370, 130, 343);
    triangle(241, 293, 221, 285, 242, 272);
    triangle(181, 417, 205, 412, 193, 436);
    triangle(333, 326, 359, 316, 355, 340);
    triangle(356, 420, 344, 434, 368, 433);
  
    r = random(200);
    g = random(200);
    b = random(200);
  }
  

  //console.log("x:" + mouseX + "y:" + mouseY);

    document.oncontextmenu = function () {
    return false;
  }
  
}
