var fixedRect,movingRect



function setup() {
  createCanvas(1200,600);
  fixedRect =createSprite(600, 200, 80, 80);
  fixedRect.shapeColor="red"
  fixedRect.debug=true

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="red"
  movingRect.debug=true
}

function draw() {
  background("yellow");  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  fixedRect.shapeColor="blue"
  movingRect.shapeColor="blue"
  }else{
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  }
  drawSprites();
}