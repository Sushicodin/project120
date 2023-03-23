function preload(){
    
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
    }
    
function draw(){
        image(webcam,0,0,600,500);
}

