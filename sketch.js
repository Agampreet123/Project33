var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions = []
var particle,turn = 0
var gameState = Play 
var Play = 1,End = 0
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(30);
 text("500",10,550)
 textSize(30);
 text("500",90,550)
 textSize(30);
 text("500",170,550)
 textSize(30);
 text("500",250,550)
 textSize(30);
 text("100",330,550)
 textSize(30);
 text("100",410,550)
 textSize(30);
 text("100",490,550)
 textSize(30);
 text("200",570,550)
 textSize(30);
 text("200",650,550)
 textSize(30);
 text("200",730,550)
  Engine.update(engine);
 if(particle!==null){
   particle.display();
   if(particle.body.position.y>760){
     if(particle.body.position.x<300){
       score = score+500
       particle = null
       if(turn>=5){
         gameState = End;
       }
     }
   }
 }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!==End){
    turn++;
    particle = new Particle(mouseX,10,10);
  }
}