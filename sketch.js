
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint=Matter.Constraint;
var tree, ground, stone, boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9; 
var launcher;
var world;
var force=100;

function preload(){
	boy=loadImage("boy.png");
}


function setup() {
	createCanvas(1300, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	tree= new Tree(1050,580);
	ground=new Ground(width/2,600,width,20);
	stone= new Stone(235,420,30);
	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1100,230,30);
	mango7=new Mango(900,230,30);
	mango8= new Mango(1100,150,30);
	mango9=new Mango(900,160,30);
	launcher=new Launcher(stone.body,{x:235,y:420});

	

	var render= Render.create({
		element:document.body,
		engine: engine,
		options: {
			width:1200,
			height:700,
			wireframes: false
		}
	});
  
	Engine.run(engine);

}


function draw() {
	Engine.update(engine);

	background(230);
	
	noStroke();
	textSize(25);
	fill("5");
	text("Press space to get second chance",100,50);
	image(boy,200,340,200,300);
	rectMode(CENTER);

	ground.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	launcher.display();
	stone.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);

    drawSprites();
	   
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function detectCollision(lstone,lmango){
	mangobodypos=lmango.body.position;
	stonebodypos=lstone.body.position;
	var distance= dist(stonebodypos.x,stonebodypos.y,mangobodypos.x,mangobodypos.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:155,y:440})
		launcher.attach(stone.body);
	}
}