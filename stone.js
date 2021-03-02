class Stone{
    constructor(x, y,width,height) {
      var options = {
          'restitution':1.0,
          'friction':2.0,
          'density':1.5,
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke('green');
        strokeWeight(4);
        fill('green');
        rect(0, 0, this.width, this.height);
        pop();
      }
  };
  