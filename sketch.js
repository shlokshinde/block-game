var a,b ;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 80);
  a.shapeColor = "green";
  b = createSprite(100,200,80,50);
  b.shapeColor = "green";
}

function draw() {
  background(0); 
  
  a.x = World.mouseX;
  a.y = World.mouseY;
  if (b.x-a.x < a.width/2+b.width/2 && a.x-b.x < a.width/2+b.width/2 && a.y-b.y < a.height/2+b.height/2 && b.y-a.y < a.height/2+b.height/2){
    a.shapeColor = "blue";
    b.shapeColor = "blue";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }

  drawSprites();
}