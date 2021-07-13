class Bird {
    constructor(x,y){
        var box_options={
            restitution: 3,
            friction: 4,
            density:6
        }
        this.body=Bodies.rectangle(x,y,50,50,box_options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        pos.x= mouseX;
        pos.y= mouseY;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        stroke("red")
        strokeWeight(3);
        fill("red");
        rectMode(CENTER)
        rect(0,0,width,height);
        pop();
        
    }
    
}