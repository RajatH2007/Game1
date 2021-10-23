
var bg_Img;
var knight, kngt_Walk, kngt_Jump;
var invis_grnd;

function preload(){
  bg_Img = loadImage("./Assets/Background_01.png");
  kngt_Walk = loadAnimation("./Knight/walk1.png", "./Knight/walk2.png", "./Knight/walk3.png", "./Knight/walk4.png", "./Knight/walk5.png", 
  "./Knight/walk6.png");
  kngt_Jump = loadAnimation("./Knight/jump1.png", "./Knight/jump2.png", "./Knight/jump3.png", "./Knight/jump4.png", "./Knight/jump5.png", 
  "./Knight/jump6.png","./Knight/jump7.png")
}

function setup() {
  createCanvas(windowWidth*3,windowHeight);
  invis_grnd = createSprite(windowWidth/2, height-70, windowWidth*3, 10);
  invis_grnd.visible = false;
  
  knight = createSprite(100, height-80, 50, 50);
  knight.addAnimation("walk", kngt_Walk);
}

function draw() {
  background(bg_Img); 
   
  if(keyDown(RIGHT_ARROW)){
    knight.x +=5;
  }
  if(keyDown(LEFT_ARROW)){
    knight.x -=5;
  }
  if(keyDown(UP_ARROW)){
    knight.addAnimation("jump", kngt_Jump);
    knight.velocityY -=5;
  }
  knight.velocityY= knight.velocityY+0.8;

  knight.collide(invis_grnd);
  drawSprites();
}