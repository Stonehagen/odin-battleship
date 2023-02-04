// eslint-disable-next-line import/prefer-default-export
export class Ship {
  #length;

  #hits = 0;

  #sunk = false;

  constructor(length) {
    this.length = length;
  }

  get length() {
    return this.#length;
  }

  set length(length) {
    this.#length = length;
  }

  get hits() {
    return this.#hits;
  }

  get sunk() {
    return this.#sunk;
  }
}
