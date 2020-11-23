class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
       
        //stiffness : 0.04

        var option = { 
            
            bodyA : body1,
             bodyB : body2, 
             pointB : {x : offsetX, y : offsetY} }
            
            
       
        this.rope=Constraint.create(option);
        World.add(myWorld,this.rope);
        }
     

display(){ 
    var pointA = this.rope.bodyA.position; 
    var pointB = this.rope.bodyB.position;
     var pocX = pointB.x + this.offsetX; 
     var pocY = pointB.y + this.offsetY; 
     strokeWeight(2    );
      stroke("black"); 
     line (pointA.x, pointA.y,pocX,pocY); }
     

}   


