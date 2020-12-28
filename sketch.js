const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var bird, slingshot;
var ground;
var ball;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,10)
    box1 = new BaseClass(100, 100, 50, 50, 0);
    box2 = new BaseClass(150,100,50,50,0);
    box3 = new BaseClass(200,100,50,50,0);
    box4 = new BaseClass(250,100,50,50,0);
    box5 = new BaseClass(250,100,50,50,0);
    box6 = new BaseClass(300,100,50,50,0);
    box7 = new BaseClass(350,100,50,50,0);
    box8 = new BaseClass(400,100,50,50,0);
    box9 = new BaseClass(450,100,50,50,0);
    box10 = new BaseClass(500, 100, 50, 50, 0);
    box21 = new BaseClass(550, 100, 50, 50, 0);


    box23 = new BaseClass(100, 100, 50, 50, 0);
    box24= new BaseClass(150,150,50,50,0);
    box25 = new BaseClass(200,200,50,50,0);
    box26 = new BaseClass(250,300,50,50,0);
    box27= new BaseClass(300,350,50,50,0);
    box28= new BaseClass(350,400,50,50,0);
    box29= new BaseClass(400,450,50,50,0);
    box30= new BaseClass(450,500,50,50,0);
    box31 = new BaseClass(500, 550, 50, 50, 0);
    box32 = new BaseClass(550, 600, 50, 50, 0);

    


    box11 = new BaseClass(100, 150, 50, 50, 0);
    box12 = new BaseClass(150,150,50,50,0);
    box13 = new BaseClass(200,150,50,50,0);
    box14 = new BaseClass(250,150,50,50,0);
    box15 = new BaseClass(250,150,50,50,0);
    box16 = new BaseClass(300,150,50,50,0);
    box17 = new BaseClass(350,150,50,50,0);
    box18 = new BaseClass(400,150,50,50,0);
    box19 = new BaseClass(450,150,50,50,0);
    box20 = new BaseClass(500,150,50,50,0);
    box22 = new BaseClass(550,150,50,50,0);


    ball = new Paper(700,300,40)

    slingshot = new Slingshot (ball.body , {x:700,y:100})


}

function draw() {
    background('white')


    Engine.update(engine)

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box31.display()
    box32.display()

    ball.display()

    slingshot.display()



    

    ground.display()


}

function mouseDragged(){
   Matter.Body.setPosition(ball.body , {x:mouseX , y: mouseY})
}


function mouseReleased(){
    
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

