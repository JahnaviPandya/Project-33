const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var snow = [];
var snow1Img, snow2Img;

function preload(){

  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  if( frameCount % 400 === 0){
    for(var i =0 ; i < 100 ; i++){
      snow.push(new Snow (random(0,500), random(0,500)))
    }
  }

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  for(var i = 0 ; i < 100 ; i++){
    snow[i].display();
    snow[i].updateY();
  }



  drawSprites();
}