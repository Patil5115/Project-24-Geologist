
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,hammer,rubber,ground;


function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;
    //Create the Bodies Here.
    
	hammer = new Hammer(100,100,150,300);
	ground = new Ground(450,650,1200,50);
	stone  = new Stone (300,450,130,130);
	rubber = new Rubber(400,500,25);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();

}



