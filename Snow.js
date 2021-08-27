class Snow{

    constructor(x, y) {

        var option={
            restitution : 0.1,
            friction : 0.001,
            isStatic : false
        }
        this.body= Bodies.circle(x,y,50,option);
        this.radius = 5;
        var ran = Math.round(random(1,2))
        var img 
        if(ran === 1){
            img = "snow4.webp"
        }
        else{
            img = "snow5.webp"
        }
        
        this.image = loadImage(img);
        World.add(world,this.body);
       
        
    }

    updateY(){
        if(this.body.position.y > height ){
            Matter.Body.setPosition(this.body,{x: random(0,800) , y : random(0,800)})
        }
    }

    display()
    {
       fill("blue");
       imageMode(CENTER);
       image(this.image,this.body.position.x, this.body.position.y,10,10);

    }
}