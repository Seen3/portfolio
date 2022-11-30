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


function viewWork(){
    let elements=document.getElementById('hello');
    let aboutmePage=document.getElementById('aboutme');
    let listitem=document.getElementById('aboutpage');
    listitem.style.color='crimson';
    let contactItem=document.getElementById('contactpage');
    contactItem.style.color='white';
    elements.style.display='none';
    let contacts=document.getElementById('contact');
    contacts.style.display='none';
    aboutmePage.style.display='flex';
    about.style.display='block';
    let projectsList=document.getElementById('lookProjects');
    projectsList.style.display='none';
}
function gotocontact(){
    let listitem=document.getElementById('aboutpage');
    listitem.style.color='white';
    let contactItem=document.getElementById('contactpage');
    contactItem.style.color='crimson';
    let elements=document.getElementById('aboutme');
    let contacts=document.getElementById('contact');
    let projectsList=document.getElementById('lookProjects');
    projectsList.style.display='none';
    elements.style.display='none';
    contacts.style.display='flex';
}
function getprojects(){
    let listitem=document.getElementById('aboutpage');
    listitem.style.color='white';
    let contactItem=document.getElementById('contactpage');
    contactItem.style.color='white';
    let projectitem=document.getElementById('projects');
    projectitem.style.color='crimson';
    let contacts=document.getElementById('contact');
    contacts.style.display='none';
    let elements=document.getElementById('aboutme');
    elements.style.display='none';
    let projectsList=document.getElementById('lookProjects');
    projectsList.style.display='block';

}