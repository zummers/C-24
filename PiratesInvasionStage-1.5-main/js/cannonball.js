class CannonBall{
    constructor(x,y){
        
        var options= {
            restitution:0.5,
            friction:1,
            density:1,
            isStatic:true
        }
        this.r=15
        this.body=Bodies.circle(x,y,this.r,options)
        this.image=loadImage("assets/cannonball.png")

        World.add(world,this.body) 
    }
   display(){
       var pos=this.body.position
       var angle=this.body.angle
       push();
       translate(pos.x,pos.y)
       rotate(angle)
       image(this.image,0,0,this.r,this.r)
       pop();

   }
    shoot(){
        var velocity=p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }
    
}