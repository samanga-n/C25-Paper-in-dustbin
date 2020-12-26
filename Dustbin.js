class Dustbin {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
        this.image=loadImage("dustbingreen.png");
        this.Bbody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,options);
        this.Lbody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);
        this.Rbody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.dustbinHeight,options);
        World.add(world,this.Bbody);
        World.add(world,this.Lbody);
        World.add(world,this.Rbody);
    }

    display(){
        var posB=this.Bbody.position;
        var posL=this.Lbody.position;
        var posR=this.Lbody.position;

        push();
			translate(posL.x, posL.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			rotate(this.angle);
        pop();
        
        push();
			translate(posR.x, posR.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			rotate(-1*this.angle);
		pop();
       
        push();
			translate(posB.x, posB.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
		pop();
        
       
    }
}