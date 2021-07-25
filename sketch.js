var bananaImg, obstacleImg, obstacleGroup, backImg, score, monkey, foodGroup, scene, Iground;

function preload() {
  backImg = loadImage("jungle.jpg");
  monkey = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backImg);
  scene.scale = 1.1;
  scene.x = scene.width/2;
  
  Iground = createSprite(400,350,400,20);
  Iground.x = Iground.width/2;
     
}

function draw() {
  background(220); //background needs to be here

  scene.velocityX = -6;
  Iground.velocityX = -6;
  
  if(scene.x < 0){
     scene.x = 200
  }
  
  if(Iground.x < 0){
     Iground.x = 200
  }
  
  drawSprites();
}
