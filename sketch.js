var Tim,Harry
function setup() {
  createCanvas(800,400);
  Tim=createSprite(200,300,80,50)
   Harry=createSprite(400, 200, 50, 80);
Tim.shapeColor= "red"
Harry.shapeColor="red"
}

function draw() {
  background(54,105,93);  
  Tim.x=mouseX;
  Tim.y=mouseY;
  if(Tim.x-Harry.x<Tim.width/2+Harry.width/2 && Harry.x-Tim.x<Tim.width/2+Harry.width/2 && Tim.y-Harry.y<Tim.height/2+Harry.height/2 && Harry.y-Tim.y<Tim.height/2+Harry.height/2){
    Tim.shapeColor= "green"
    Harry.shapeColor="green"  
  }
  else{
    Tim.shapeColor= "red"
Harry.shapeColor="red"
  }
  drawSprites();

}