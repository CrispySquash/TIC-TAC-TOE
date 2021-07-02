const playerObject = (name, sign) => {
  return { name, sign };
};

const gameBoard = (() => {
  let boardArray = ['', '', '', '', '', '', '', '', '']

  let square = document.getElementsByClassName('.square');
  let boardContainer = document.getElementById('#game-board-container');

  square.addEventListener('click', function(e){
    if(e.innerHTML == '' && turn % 2 !== 0){

    }
  })

  //code to allow players to mark spots on board (we'll need to update the boardArray with their choices)
  //need to set code that check for what div the player has selected inside the game-board-container id and mark that square
  //with their sign. plus update the array

  //code to restart game/gameboard when selecting reset button
  //


})();

const gameLogic = (() => {
  //create players
  const player1 = playerObject('player 1', 'X');
  const player2 = playerObject('Player 2', 'O');
  //set initial turn
  let turn = 1;
  //set win to false
  let win = false;
  //set taking turns logic/symbol switching

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
  //set check for tie logic
})();

