import { Gameboard } from './Gameboard';

/* eslint-disable import/prefer-default-export */
export const Player = (name) => {
  const player = {};
  player.name = name;
  player.computer = false;
  player.gameboard = Gameboard();
  player.attack = (opponent, coords = null) => {
    if (player.computer === true) {
      let hitOrMiss = false;
      while (!hitOrMiss) {
        const compCoords = [
          Math.floor(Math.random() * 10) + 1,
          Math.floor(Math.random() * 10) + 1,
        ];
        hitOrMiss = opponent.gameboard.receiveAttack(compCoords);
      }
      return true;
    }
    return opponent.gameboard.receiveAttack(coords);
  };

  return player;
};
