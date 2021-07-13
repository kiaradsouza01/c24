class Box {
    constructor(x,y,width,height){
        var box_options={
            restitution: 3,
            friction: 4,
            density:6
        }
        this.body=Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        stroke("red")
        strokeWeight(3);
        fill("pink");
        rectMode(CENTER)
        rect(0,0,width,height);
        pop();
        
    }
    
}