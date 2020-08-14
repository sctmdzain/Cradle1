class Bob{
    constructor(x, y, radius){
        var options ={
            restitution:0.3,
            isStatic:false,
            friction: 0.5,
            density:5.0
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.x = x;
        this.y = y;
        this.radius = radius;        

       World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        stroke("black")
        strokeWeight(5);
        fill("brown");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}