/* eslint-disable import/prefer-default-export */
const boardDisplay = (gameboard) => {
  const computerBoard = document.createElement('div');
  gameboard.board.forEach((row) => {
    const boardRow = document.createElement('div');
    boardRow.classList.add('board-row');
    row.forEach((field) => {
      const boardField = document.createElement('div');
      boardField.classList.add('field');
      boardField.dataset.shot = field.shot;
      boardField.dataset.coords = field.coordinates;
      boardRow.appendChild(boardField);
    });
    computerBoard.appendChild(boardRow);
  });

  return computerBoard;
};

const addShips = (gameboard, ships) => {
  ships.forEach((ship) => {
    const coordinates = ship.pos;
    coordinates.forEach((coords) => {
      console.log(coords);
      const strCoords = coords.join(',');
      const shipField = gameboard.querySelector(`[data-coords="${strCoords}"]`);
      shipField.dataset.ship = true;
    });
  });
};

export const displayGame = (player1, computer, container) => {
  const computerGameboard = boardDisplay(computer.gameboard);
  computerGameboard.classList.add('computer-board');

  const playerGameboard = boardDisplay(player1.gameboard);
  addShips(playerGameboard, player1.gameboard.ships);
  playerGameboard.classList.add('player-board');

  container.appendChild(computerGameboard);
  container.appendChild(playerGameboard);
};
