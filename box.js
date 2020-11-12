class Box{
    constructor(x, y, width, height){
var options = {
    restitution: 0.4,
}
this.body = Bodies.rectangle (x, y, width, height);
this.w = width;
this.h = height;
World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.w, this.h);
    pop();
    }
}