function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
edges=createEdgeSprites();
 player = createSprite(50,550,30,30);
 obs_1 = createSprite(50,400,80,30);
 obs_1.shapeColor="red"
 obs_2 = createSprite(550,200,80,30);
 obs_2.shapeColor='red'
 target = createSprite(550,50,30,30);
 target.shapeColor="blue"
 obs_1.velocityX=5
 obs_2.velocityX=-5

}

function draw() {
  background("black");  
  obs_2.bounceOff(edges[0])
  obs_2.bounceOff(edges[1])
  obs_1.bounceOff(edges[0])
  obs_1.bounceOff(edges[1])
  drawSprites();
  player.bounceOff(edges[0]);
 player.bounceOff(edges[1]);
 player.bounceOff(edges[2]);
 player.bounceOff(edges[3]);
 if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(player.isTouching(obs_1)){
  obs_1.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs_2)){
  obs_2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
}
