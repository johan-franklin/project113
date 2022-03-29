function preload(){
}

function setup(){
canvas =  createCanvas(500,400);
canvas. position(70,200);
video = createCapture(VIDEO);
video.hide();

}

function draw() {
    image(video,100, 80, 300, 250);
    fill(168,10,10);
    stroke(168,10,10);
    
    
    }
    
    
    function take_snapshot(){
        save('myFilterImage.png');
    }
