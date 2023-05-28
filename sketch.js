
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,leftSide,rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ballOption = {
	restitution:0.9
}
ball = Bodies.circle(100,50,20,ballOption);
World.add(world,ball)

ground = new Ground(width/2,680,width,20)
leftSide = new Ground(800,630,10,90)
rightSide = new Ground(1000,630,10,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0.01})
	}
}


