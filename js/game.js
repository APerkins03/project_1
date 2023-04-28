class Game {
  constructor(){
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameScore = document.getElementById("score");
    this.gameLives = document.getElementById("lives");
    this.player = new Player( // gameScreen, left, top, width, height, imgSrc
      this.gameScreen,
      200,
      700,
      150,
      150,
      "./images/princess.png"
    );
    this.height = 800;
    this.width = 600;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.obstacleSpeed = 6;
    this.obstacleInterval = 1500;
  }

  start() {
    const name = prompt("Please enter your name:");
    const nameElement = document.getElementById("player-name");
    nameElement.innerText ="Princess " + name;
    
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
  
    // hide start screen
    this.startScreen.style.display = "none";
    // show game screen
    this.gameScreen.style.display = "block";

    this.gameLoop()
  }

  gameLoop() {
  
    if(this.gameIsOver){
      return;
    }
    this.update();

    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {

    this.player.move();

    for (let i = 0; i < this.obstacles.length; i++){
      const obstacle = this.obstacles[i];

      obstacle.move();

      if (obstacle.top > this.height){
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      } else if (this.player.didCollide(obstacle)){
        if (obstacle.type === "obstacle1") {
          this.lives--;
          this.gameLives.innerText = this.lives;
        }else if(obstacle.type === "obstacle2"){
          this.score += 10;
          this.gameScore.innerText = this.score;
        }else if(obstacle.type === "obstacle3"){
            this.score += 5;
            this.gameScore.innerText = this.score;
        }else if(obstacle.type === "obstacle4"){
          this.lives -= 3;
          this.gameLives.innerText = this.lives;
        }
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }
  

    if(this.lives <= 0){
      this.endGame();
    }

    if(Math.random() > 0.98 && this.obstacles.length < 1) {
      const type = Math.random() < 0.25 ? "obstacle1" : Math.random() < 0.5 ? "obstacle2" : Math.random() < 0.75 ? "obstacle3" : "obstacle4";
      this.obstacles.push(new Obstacle(this.gameScreen, type))
    }

    if (this.score > 20 && this.obstacleSpeed < 40) {
      this.obstacleSpeed = 40;
    }
    if (this.score > 40 && this.obstacleInterval > 50) {
      this.obstacleInterval = 50;
    }
    if (this.score > 60 && this.obstacleSpeed < 80) {
      this.obstacleSpeed = 80
    }
    if (this.score > 80 && this.obstacleInterval > 75) {
      this.obstacleInterval = 75;
    }
    }
  

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(obs => obs.element.remove());

    this.gameIsOver = true;
   

    // hide game screen
    this.gameScreen.style.display = "none";      
    // show end ga screen
    this.gameEndScreen.style.display = "block";
  }
}
