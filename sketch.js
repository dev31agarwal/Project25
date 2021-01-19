
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, piece1, ground1, piece2, piece3, paperPush
var paperSprite, image1;

function preload()
{
	image1=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 400);
	
	engine = Engine.create();
	world = engine.world;

	paper1= new Paper(100, 50, 40);
	
	paperPush= createSprite(120, 50, 30);

	

	piece1= new Dustbin(675, 335, 135, 30);
	World.add(world, piece1);

	

	piece2= new Dustbin(620, 305, 30, 100);
	World.add(world, piece2);

	piece3= new Dustbin(760, 305, 30, 100);
	World.add(world, piece3);

	ground1= new Ground (width/2,370,width,30);
	World.add(world,ground1);

	
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("white");
  
  paper1.display();
  piece1.display();
 piece2.display();
  piece3.display();
  image(image1,600, 250, 180, 100);
  paper1.display();
  ground1.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:245, y:-285})
	}
}



