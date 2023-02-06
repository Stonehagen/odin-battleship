import { Player } from './Player';
import { displayGame } from './DomDisplay';
import { computerBoardEL } from './Events';
import './style.css';

const player1 = Player('Human');
player1.gameboard.placeShip(3, [
  [2, 2],
  [2, 3],
  [2, 4],
]);
player1.gameboard.placeShip(4, [
  [5, 1],
  [6, 1],
  [7, 1],
  [8, 1],
]);
player1.gameboard.placeShip(2, [
  [6, 4],
  [6, 5],
]);
const computer = Player('Computer');
computer.gameboard.placeShip(3, [
  [3, 2],
  [3, 3],
  [3, 4],
]);
computer.gameboard.placeShip(4, [
  [5, 2],
  [6, 2],
  [7, 2],
  [8, 2],
]);
computer.gameboard.placeShip(2, [
  [7, 4],
  [7, 5],
]);
computer.computer = true;

displayGame(player1, computer);
computerBoardEL(player1, computer);
