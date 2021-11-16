let modelPath = "cat.obj";
let img, mod;
let gradient;
let myShader;

let rVal = 0;
let inc = 0.01;
let angle = 20;
let numCats=20;
let closer = 10;
let closerInc=20;
let theta = 0;

function preload() {
  mod = loadModel(modelPath);
  myShader=loadShader('basic.vert','basic.frag');
}

function setup() { 
    createCanvas(600,700,WEBGL);
    // angleMode(DEGREES);
  //stroke(190,80,190)

    gradient = createGraphics(400, 400, WEBGL);
   gradient.noStroke();
    gradient.push();
    gradient.translate(-200, -200, 0);
 //  gradient.image(img, 0 , 0, 400, 400);
   gradient.shader(myShader);
    gradient.rect(0,0,width, height);
    gradient.pop()
}

function draw() {
    background(255);
    ambientLight(220);
     
  push()
    rotateX(PI);
    translate(0,-200,400);
    push()
    rotateY(theta);

    texture(gradient);
    model(mod);
    // translate(0,-200,0);
    // model(cat);
    
  
  
  
  pop(); 
  
  theta+=0.01;
}