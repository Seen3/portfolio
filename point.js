function Point(x,y){
    this.pos=createVector(x,y);
    this.vel=createVector(random(-1,1),random(-1,1));
    this.acc=createVector(0,0);
    this.maxSpeed=1;
    this.maxForce=0.4;
    this.move=()=>{
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.x=random(-1,1);
        this.acc.y=random(-1,1);
    }
    this.draw=()=>{
        point(this.pos.x,this.pos.y);
    }
    this.drawLines=(dots,mouseD)=>{
        for(let i=0;i<dots.length;i++)
        {
            let D=dist(this.pos.x,this.pos.y,dots[i].pos.x,dots[i].pos.y);
            if (D>1 && D<100 && mouseD<200){
                line(this.pos.x,this.pos.y,dots[i].pos.x,dots[i].pos.y);
            }
        }
    }
    this.checkBoundries=()=>{
        if (this.pos.x>windowWidth || this.pos.x<0)
        {
            this.vel.x=-this.vel.x;
        }
        if (this.pos.y>windowHeight || this.pos.y<0)
        {
            this.vel.y=-this.vel.y;
        }
    }
}