class ball {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.09,
            friction:0.8,
            density:1.2
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        this.image=loadImage("paper.png");
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y); 
        fill(255,0,255);
        imageMode(CENTER);      
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}