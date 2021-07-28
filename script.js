const playerObject = (name, sign) => {
  return { name, sign };
};

const gameBoard = (() => {
  let boardArray = ['', '', '', '', '', '', '', '', ''];

  let restartButton = document.getElementById('restartBtn');
  let square = document.getElementsByClassName('square');

  //adding event listeners to allow players to mark board
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function () {
      if (this.innerHTML == '' && gameLogic.turn % 2 !== 0) {
        this.innerHTML = 'X';
        boardArray[this.id] = 'X';
        gameLogic.turn++;
        if (gameLogic.checkForXWin()) {
          alert('X\'s Win')
          restart();
        }
        else if (gameLogic.turn == 10 && !gameLogic.checkForXWin()) {
          alert('Tie Game');
          restart();
        }
      }
      else if (this.innerHTML == '' && gameLogic.turn % 2 == 0) {
        this.innerHTML = 'O';
        boardArray[this.id] = 'O';
        gameLogic.turn++;
        if (gameLogic.checkForOWin()) {
          alert('O\'s Win')
          restart();
        }
        else if (gameLogic.turn == 10 && !gameLogic.checkForOWin()) {
          alert('Tie Game');
          restart();
        }
      }
    });
  }

  //code to restart game/gameboard when selecting reset button
  restartButton.addEventListener('click', function () {
    restart();
  })

  function restart() {
    turn = 1;
    for (var i = 0; i < square.length; i++) {
      square[i].innerHTML = '';
      boardArray[i] = '';
    }
  }

  return { boardArray };

})();

const gameLogic = (() => {
  //create players
  const player1 = playerObject('player 1', 'X');
  const player2 = playerObject('Player 2', 'O');

  //set turn counter
  let turn = 1;

  //set win conditions
  const winConditions =
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]

  //set check for win logic

  function checkForXWin() {
    return winConditions.some((combination) => {
      return combination.every((i) => {
        return gameBoard.boardArray[i] == "X";
      });
    });
  }

  function checkForOWin() {
    return winConditions.some((combination) => {
      return combination.every((i) => {
        return gameBoard.boardArray[i] == "O";
      });
    });
  }


  //set check for tie logic

  return { turn, checkForXWin, checkForOWin, winConditions };

})();

