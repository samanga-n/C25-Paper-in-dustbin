
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	// DBleft=new Dustbin(524,609,10,85);
  DBbase=new Dustbin(910,655,100,10);
	// DBright=new Dustbin(635,609,10,85);
	
	myGround= new Ground(400,660,1200,10);
	myBall=new ball(94,500,70);
  
}

function draw() {
  
  background(255);
  Engine.update(engine);
  
  // DBright.display();
  DBbase.display();
  // DBleft.display();
  myGround.display();
  myBall.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(myBall.body,myBall.body.position,{x:112,y:-138});
  
  }
}




