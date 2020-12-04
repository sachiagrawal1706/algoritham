var fixedRect, movingRect;
var o1,o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(50,100,20,50);
   o2=createSprite(100,100,50,40);
    o3=createSprite(400,200,40,10);
    o4=createSprite (700,200,30,40);
    o1.shapeColor="blue";
o3.velocityX=2
o4.velocityX=-1
}

function draw() {
  background(100,20,30);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(touching(o4,movingRect)){
  movingRect.shapeColor = "red";
    o4.shapeColor = "red";
   
}
else{
  movingRect.shapeColor = "green";
    o4.shapeColor = "green";
  }
bounce(o3,o4)
  drawSprites();
}

