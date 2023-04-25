class Obstacle {
  constructor(gameScreen, type) {
    this.gameScreen = gameScreen;
    this.type = type;
    this.left = Math.floor(Math.random() * 250);
    this.top = 60;
    this.width = 100;
    this.height = 150;

    this.element = document.createElement("img");

    if(this.type === "obstacle1") {
     this.element.src = "./images/frog.png"; 
    } else if( this.type === "obstacle2") {
      this.element.src = "./images/Sparkle Crown.gif";
    } else if( this.type === "obstacle3") {
      this.element.src = "./images/slipper.jpg.gif";
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
  }
  
  move() {
    // Move the obstacle down by 3px
    this.top += 5;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}