// eslint-disable-next-line import/prefer-default-export
export class Ship {
  #length;

  #hits = 0;

  #sunk = false;

  constructor(length) {
    this.#length = length;
  }

  get length() {
    return this.#length;
  }

  get sunk() {
    return this.#sunk;
  }

  hit() {
    this.#hits += 1;
    this.#sunk = this.isSunk();
  }

  isSunk() {
    return this.#length <= this.#hits;
  }
}
