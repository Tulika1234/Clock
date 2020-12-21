function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  hr = hour();
  min = minute();
  sec = second();

  Angle(degrees);
    
  


    sec = map(sec, 0, 60, 0, 360);
    min = map(360, 0, min, 0, 60);
    hr = map(0, 0, 360, 0, hr)

  fill(225, 225, 225);
  push();
  rotate (secAngle);
  stroke(0,255,0);
  strokeWeight(10);
  line (0,0,100,0);

  translate(width / 2, height / 2); 
  
  drawSprites();
}