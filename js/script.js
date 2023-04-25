window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;
  
    startButton.addEventListener("click", function () {
      startGame();
    });
  
    restartButton.addEventListener("click", function () {
      restartGame();
    })
  
    function restartGame() {
      location.reload();
    }
  
    function startGame() {
      console.log("start game");
  
      game = new Game();
      game.start();
    }
  // Function that handles keydown event
    function handleKeydown(event) {
      const key = event.key;
  
      // console.log("key: ", key);
  
      const possibleKeystrokes = ["ArrowLeft", "ArrowRight"];
      // Check if the pressed key is in the possibleKeystrokes array
      if(possibleKeystrokes.includes(key)){
        event.preventDefault();
  // Update player's directionX and directionY based on the key pressed
        switch(key){
          case "ArrowLeft":
            game.player.directionX = -3;
            break;
          case "ArrowRight":
            game.player.directionX = 3;
            break;
          }
      }
    }
  
  // Add the handleKeydown function as an event listener for the keydown event
    window.addEventListener("keydown", handleKeydown);
  };