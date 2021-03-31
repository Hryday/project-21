var bullet, ball;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(150,100);
  weight=random(30,52);
  bullet=createSprite(50,200,50,5);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);
  bullet.velocityX=speed;
  bullet.shapeColor="black";
}

function draw() {
  background(255,255,255);  
 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10){
     wall.shapeColor=color(255,0,0);
   }
   if(damage<10){
     wall.shapeColor=color(0,255,0);
   }
 }
  drawSprites();
}
function hasCollided(lbullet, lwall) { bulletRightEdge=lbullet.x +lbullet.width; wallLeftEdge=lwall.x; if (bulletRightEdge>=wallLeftEdge) { return true } return false; }