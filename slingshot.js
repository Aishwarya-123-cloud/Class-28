class Slingshot {
    //a link between the objects
    constructor(objectA, objectB){
        var options = {
            bodyA:objectA,
            pointB:objectB,
            //its rigidity towards the other body
            stiffness: 0.04,
            //length of the constraint between two bodies
            length:10
        }
        //created property point.B to attach the bird with it
        this.pointB = objectB
        //creating a general chain from constraint class of matter
        this.slingshot = Constraint.create(options)
        //adding chain to the main world
        World.add(world,this.slingshot);

    }
    //making bodyA empty
    fly(){
        this.slingshot.bodyA = null
    }
    display(){
        if (this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position
        var pointB = this.pointB
        strokeWeight(6)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}
