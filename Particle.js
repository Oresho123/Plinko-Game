class Particles{
    contructor(x,y,w,h){
        var options={
            isStatic=true
        }
        this.w=w;
        this.h=h;
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.ythis.w,this.h);
    }
};