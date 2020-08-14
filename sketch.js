const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof ;
var b1,b2,b3,b4,b5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
  createCanvas(1200,700);
  rectMode(CENTER);

	engine = Engine.create();

	world = engine.world;

	roof = new Roof(600,300,300,15)
	

	b1 = new Bob(500,500,25)
	b2 = new Bob(550,500,25)
	b3 = new Bob(600,500,25)
	b4 = new Bob(650,500,25)
	b5 = new Bob(700,500,25)

	rope1 = new Rope(b1.body,roof.body,-100, 10);
    rope2 = new Rope(b2.body,roof.body,-50, 10);
    rope3 = new Rope(b3.body,roof.body,0,10);
    rope4 = new Rope(b4.body,roof.body, 50,10);
    rope5 = new Rope(b5.body,roof.body,100,10);
  

	
	

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,224);
  Engine.update(engine)

  console.log("inthedraw");


  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
console.log(b1.body);
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-40});

  }

}



