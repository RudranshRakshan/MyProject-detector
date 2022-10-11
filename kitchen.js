img = "";
Status = "";
object = [];

function preload() {
    img = loadImage("kitchen.jpg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

   
}

function modelLoaded() {
    console.log("model is loaded");
    Status = true;
    Detect.detect(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        object = result;

    }
}

function start(){
 Detect = ml5.objectDetector("cocossd", modelLoaded);
}

function draw() {
    image(img, 0, 0, 600, 500);
    if (Status) {
        document.getElementById("status").innerHTML = "Status: Object Detected";

        for (i = 0; i < object.length; i++) {
            fill("green")
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            str("green");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }

}

function back(){
    window.location="index.html"
}