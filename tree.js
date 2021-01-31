class Tree {
    constructor(x,y){

        this.x=x;
        this.y=y;
        this.width=450;
        this.height=600;
        this.thickness=10;


        this.image=loadImage("tree.png");
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width,this.thickness,{isStatic:true});
        this.leftwallBody=Bodies.rectangle(0,this.y-this.height/2,this.thickness,this.height,{isStatic:false});
        this.rightwallBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{osStatic:false});

        World.add(world,this.bottomBody);
        World.add(world,this.leftwallBody);
        World.add(world,this.rightwallBody);
    } 

    display() {
        var pos=this.bottomBody.position;
        push();
        translate(pos.x,pos.y+10);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.height);
        pop();
    }
 }