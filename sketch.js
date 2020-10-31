const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies,object;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(200,200,50,50);
  World.add(world,object);




  
}

function draw() {
  background(0);  
  rectMode(CENTER);
  rect(200,200,50,50);
  Engine.update(engine);
  rect(this.object.position.x,this.object.position.y,50,50);



  drawSprites();
}