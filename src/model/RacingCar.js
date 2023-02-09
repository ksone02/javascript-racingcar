class RacingCar {
  #carName;

  #moveCount;

  constructor(carName) {
    this.#carName = carName;
    this.#moveCount = 1;
  }

  move() {
    this.#moveCount += 1;
  }

  getCarName() {
    return this.#carName;
  }

  getMoveCount() {
    return this.#moveCount;
  }
}

module.exports = RacingCar;
