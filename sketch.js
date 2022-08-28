var shotoImg,fireballImg,zombieImg,pathImg;
var gameState="START";
// A DOUBT "my text of gameState=start is disappearing 
//very fast"
//press ENTER TO START ,,PRESS SPACE TO SHOOT,,ArrowKey for movement

function preload(){
 shotoImg = loadImage("Todoroki Shoto 1.png")
 fireballImg=loadImage("Fireball.png") 
 zombieImg=loadImage("Zombie1.png")
 pathImg=loadImage("Path1.png")
}

function setup(){
  
//create the canvas and adjust the window sizes to suit the device 
createCanvas(800,600)
path=createSprite(200,200);
path.addImage("path1",pathImg);



//creating boy running
shoto = createSprite(100,300,30,30);
shoto.addImage("Todoroki1",shotoImg);
shoto.scale=0.35
 
}
function draw (){
  background("white")
  
  if(gameState==="START"){
    fill("black")
    textSize(40)
    text("press ENTER to start",350,100)
    fill("red")
    text("press Space to shoot",250,250)
    if(keyDown("enter")){
      gameState==="PLAY"
     }
  }
  
 

if(gameState="PLAY"){
  if(keyDown("up")){
    shoto.y=shoto.y-10
  }
  if(keyDown("down")){
    shoto.y=shoto.y+10
  }
  if(keyDown("right")){
    shoto.x=shoto.x+10
  }
  if(keyDown("left")){
    shoto.x=shoto.x-10
  }
  if(keyDown("enter")){
    
    zombie80()
  }

  
  if(keyDown("space")){
    fire();
  }
  
  }
  

  drawSprites()
}



function zombie80(){
   var zombie6 = createSprite(700,Math.round(random(100,500),20,20))
  zombie6.addImage("zomdie123",zombieImg)
   zombie6.scale=0.25 
   zombie6.velocityX=-5
   zombie6.lifetime=150
  

}
function fire(){
  var fireball=createSprite(400,100,20,20)
   fireball.addImage("anvesh",fireballImg)
   
   fireball.y=shoto.y
   fireball.velocityX=5
   fireball.lifetime=150
   fireball.scale=0.1
   if(fireball.isTouching(zombie6)){
    zombie6.destroy();
    fireball.destroy();
  }
  }