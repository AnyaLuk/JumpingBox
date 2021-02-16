var music;
var edges
var surface1,surface2,surface3,surface4,box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);
    surface1 = createSprite(60, 580, 150, 20);
    surface1.shapeColor="salmon"
    surface2 = createSprite(220, 580, 150, 20);
    surface2.shapeColor="lavender"
    surface3 = createSprite(380, 580, 150, 20);
    surface3.shapeColor="pink"
    surface4 = createSprite(540, 580, 150, 20);
    surface4.shapeColor="teal"
   
    //create box sprite and give velocity
    box = createSprite(random(20,750),40,30,30);
    box.shapeColor="white"
    box.velocityX = 5;
    box.velocityY = 5;

    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
 
    //add condition to check if box touching surface and make it box
    if(isTouching(box,surface4)){
          box.shapeColor="teal"
          box.velocityX=0
          box.velocityY=0
      }
     
    drawSprites();
}