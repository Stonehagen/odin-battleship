import { displayGame } from './DomDisplay';

/* eslint-disable import/prefer-default-export */
export const computerBoardEL = (player, computer) => {
  const computerBoard = document.querySelector('.computer-board');
  const computerFields = computerBoard.querySelectorAll('.field');

  computerFields.forEach((field) => {
    field.addEventListener('click', (e) => {
      const coords = e.target.dataset.coords.split(',');
      player.attack(computer, coords);
      if (computer.gameboard.fleetSunk()) {
        computerBoard.innerHTML = 'Player Wins';
      } else {
        displayGame(player, computer);
        computerBoardEL(player, computer);
      }
    });
  });
};
