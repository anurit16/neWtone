
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var myWorld,myEngine;



var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
	ground = new Ground(500,600,1500,10);
    roof = new Roof(500,100,500,50);
	bob1 = new Bob(500,500,50);
	bob2 = new Bob(400,500,50);
	bob3 = new Bob(300,500,50);
	bob4 = new Bob(600,500,50);
	bob5 = new Bob(700,500,50);
	rope1 = new Rope(bob3.body,roof.body,-100*2,0);
	rope2 = new Rope(bob2.body,roof.body,-50*2,0);
	rope3 = new Rope(bob1.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,50*2,0);
	rope5 = new Rope(bob5.body,roof.body,100*2,0);
	//rope = new Rope(bob1.body,roof.body,0,0);
	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 // drawSprites();
 ground.display();
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.setPosition(bob3.body,{x:200,y:200});
}
}



