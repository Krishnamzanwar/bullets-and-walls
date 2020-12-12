var bullet, wall;
var speed,weight;
var thickness;



function setup(){
 createCanvas(1600,400);   
speed = random(55,90);
weight = random(400,1500);
thickness = random(22,83)
 bullet = createSprite(50,200,50,50);
 wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = "grey"

bullet.velocityX = speed;
bullet.shapeColor = "white";
}
function draw(){
background(0,0,0);  
if(hasCollided(bullet,wall) ){
    bullet.veloctiyX = 0;
    var damage = 0.5 * weight * speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
        wall.shapeColor = color(255,0,0);
    }
if(damage<180&& damage>100)
{
    bullet.shapeColor = color(230,230,0);
}
if(damage<100)
{
    wall.shapeColor = color(0,255,0);
}






}

drawSprites();    
}

function hasCollided(Lbullet,Lwall){
    bulletRightEdge = Lbullet.x +Lbullet.width;
    wallLeftEdge = Lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
        return true
    }
    return false;
}


































