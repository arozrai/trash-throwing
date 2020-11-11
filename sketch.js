
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(610,650,200,30)
	box2 = new Box(695,600,30,100)
	box3 = new Box(525,680,30,100)

	ground1 = new Ground(400,675,800,30)
	
	ball1 = new Ball(100,100,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display()
  box2.display()
  box3.display()

  ground1.display()
 
  ball1.display()

  keyPressed()
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1,y:-6.712})
	}
}

