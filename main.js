img = "";
function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#f5672f");
    text("Dog",65,50);
    noFill();
    stroke("#f5672f");
    rect(60, 60, 300, 350);
}