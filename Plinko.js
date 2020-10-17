class Plinko {
    constructor(x,y,w,h){
        var options={
            isStatic=true
        }
this.Body=Bodies.circle(x,y,this.r,options);
this.w=w;
this.h=h;
this.radius=10
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        FileList("white");
        rect(pos.x,po.y,this.w,this.h);
    }
};