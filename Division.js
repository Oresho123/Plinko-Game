class Divisions{
    contructor(x,y,w,h){
        var options={
            isStatic=true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        AudioWorkletNode.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.ythis.w,this.h);
    }
};