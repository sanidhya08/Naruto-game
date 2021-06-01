var naruto

function setup() {
  createCanvas(1098,400);

  var maze=createGroup();
  maze.add(createSprite(20,200,10,360));
  maze.add(createSprite(1078,200,10,360));
  maze.add(createSprite(195,20,360,10));
  maze.add(createSprite(195,380,360,10));
  maze.add(createSprite(903,20,360,10));


  maze.add(createSprite(903,380,360,10));

  

  naruto = createSprite(549,200,20,20);
  
  
}

function draw() {
  background("black");  
  text(mouseX+" "+ mouseY,100,100);
  narutoMovement();
  drawSprites();
}


function narutoMovement()
{
  if(keyDown("UP_ARROW")){
    naruto.y = naruto.y-5;
  }
  if(keyDown("DOWN_ARROW")){
    naruto.y = naruto.y+5;
  }
  if(keyDown("LEFT_ARROW")){
    naruto.x = naruto.x-5;
  }
  if(keyDown("RIGHT_ARROW")){
    naruto.x = naruto.x+5;
  }
}