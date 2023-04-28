class Obstacle {
  constructor(gameScreen, type) {
    this.gameScreen = gameScreen;
    this.type = type;
    this.left = Math.floor(Math.random() * this.gameScreen.offsetWidth);
    this.top = 0;
    this.width = 90;
    this.height = 90;

    this.element = document.createElement("img");

    if(this.type === "obstacle1") {
     this.element.src = "./images/frog.png"; 
    } else if( this.type === "obstacle2") {
      this.element.src = "./images/Sparkle Crown.gif";
    } else if( this.type === "obstacle3") {
      this.element.src = "./images/slipper1.gif";
    } else if( this.type === "obstacle4") {
      this.element.src = "./images/ogre2.png";
    }
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
     // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.right = `${this.left + this.width}px`;
  }
  
  move() {
    // Move the obstacle down by 3px
    this.top += 7; 
        // sets boundary to left hand side
        if(this.left < 20){
          this.left = 20;
        }
    
    
        // sets boundary to right hand side
        if(this.left + this.width > this.gameScreen.offsetWidth - 20){
          this.left = this.gameScreen.offsetWidth - this.width - 20;
        }

    // Update the obstacle's position on the screen
    this.updatePosition();

   
  }


  spawnObstacle() {
    const randomIndex = Math.floor(Math.random() * this.obstacleTypes.length);
    const randomObstacle = this.obstacleTypes[randomIndex];
  
    let numObstaclesToDrop = 1;
    if (this.player.score >= 50) {
      numObstaclesToDrop = 4;
    }
    if (this.player.score >= 100) {
      numObstaclesToDrop = 6;
    }
    if (this.player.score >= 150) {
      numObstaclesToDrop = 8;
    }
  
    for (let i = 0; i < numObstaclesToDrop; i++) {
      const obstacle = new Obstacle(this.gameScreen, randomObstacle);
      this.obstacles.push(obstacle);
    }
  
    setTimeout(() => {
      this.spawnObstacle();
    }, this.obstacleInterval);
  }
}