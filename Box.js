class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("polygon.png");
      World.add(world, this.body);
    }

    score () {
      if(this.visibility<0){
        score++;
      }
    }

    display(){
   console.log(this.body.speed);
   if(this.body.speed > 3){
   
    World.remove(world,this.body);
     push();
     this.Visiblity = this.Visiblity - 1;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   
   
      }
  else{
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  }
      }
     }

    
  

  