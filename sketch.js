//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
var bg,runani,boy;
function preload(){
bg=loadImage("1624.jpg")
runani=loadAnimation("run1.jpg","run2.jpg","run3.jpg","run4.jpg","run5.jpg","run6.jpg")


}

function setup(){
    var canvas = createCanvas(800,600);
    //engine = Engine.create();
    //world = engine.world;

  boy=createSprite(50,570)
  boy.addAnimation("anime",runani)
}

function draw(){
    background(bg);
    //Engine.update(engine);
    drawSprites();
}