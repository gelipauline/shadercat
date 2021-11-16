
let modelPath = "cat.obj";
let cat;

let rVal = 0;
let inc = 0.01;
let angle = 20;
let numCats=20;
let closer = 10;
let closerInc=20;
let theta = 0;

function preload() {
     cat = loadModel(modelPath);
}

function setup() {
    
    createCanvas(400,400,WEBGL);
    // angleMode(DEGREES);
  stroke(190,80,190)
}

function draw() {
    background(255);
     
  push()
    rotateX(PI);
    translate(0,-200,400);
    push()
    rotateY(theta);
    fill(200, 200, 120);
    model(cat);
    // translate(0,-200,0);
    // model(cat);
    pop()
  
  
  
  pop();  
  
  theta+=0.01;
}