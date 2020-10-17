var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
for(var k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}


function setup() {
  createCanvas(480,800);
 ground= createSprite(100, 780, 900, 10);
}

function draw() {
  background(255,240,53);  
  drawSprites();
}