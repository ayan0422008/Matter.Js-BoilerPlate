var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
 var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,density:1.2
 }
	engine = Engine.create();     
	world = engine.world;

		
	groundObj=new Ground(width/2,670,width,20);
    leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);
	//Create the Bodies Here.
    ball = Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)
	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  groundObj.display();
  rightSide.display();
  leftSide.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  
 //write code here to applyForce on ball body
 Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
 
}              
}


