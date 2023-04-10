export default class BattleBackground {
  #img;

  constructor() {
    // Create IMG
    this.#img = document.getElementById("background");
  }

  draw(ctx) {
    ctx.drawImage(this.#img, 0, 0, 1150, 820);
  }
}
