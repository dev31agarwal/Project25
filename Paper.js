class Paper{
    constructor(x, y, radius){

        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 9.5,
            density: 1.2
        }
        this.image=loadImage("project25_paper_image.png");
        this.body= Bodies.circle(x, y, radius, options);
        this.radius= radius;
        World.add( world, this.body);
            
        }

        display(){
            var pos= this.body.position
            
            fill("pink");
            image( this.image,pos.x, pos.y, this.radius*2, this.radius*2);
        }
    
    }
