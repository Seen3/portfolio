let points=[];
let npoints=1000
let bg;


function setup(){
    let canv=createCanvas(windowWidth, windowHeight);
    canv.parent('backG');
    stroke(0, 146, 94);
    background(255,255,255,0);
    for(let i=0;i<npoints;i++)
    {
        points.push(new Point(floor(random(windowWidth)),floor(random(windowHeight))));   
    }
}

function draw(){
    //background(255,255,255,0);
    //background(0);
    clear();
    //strokeWeight(10);
    for(let i=0;i<npoints;i++)
    {
        points[i].move();
        strokeWeight(1);
        let mouseD=dist(points[i].pos.x,points[i].pos.y,mouseX,mouseY);
        if (mouseD<200){
            
            points[i].draw();
            strokeWeight(0.3);
            points[i].drawLines(points,mouseD);
        }
        points[i].checkBoundries();
    }
}

