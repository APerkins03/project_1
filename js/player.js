class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;

    this.element = document.createElement("img");
    this.element.src = imgSrc;

    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    // Update player's position based on directionX and directionY
    this.left += this.directionX;
    this.top += this.directionY;
    

    // sets boundary to left hand side
    if(this.left < 20){
      this.left = 20;
    }


    // sets boundary to right hand side
    if(this.left + this.width > this.gameScreen.offsetWidth - 50){
      this.left = this.gameScreen.offsetWidth - this.width - 50;
    }
  

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if(
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left && 
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ){
      console.log("");
      return true
    } else {
      return false;
    }
    
}
}



