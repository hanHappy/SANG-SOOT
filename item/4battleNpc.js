export default class BattleNpc {
  #img1;
  #img2;
  #ceoX;
  #ceoY;
  #userX;
  #userY;
  #ceoW;
  #ceoH;
  #userW;
  #userH;

  constructor() {
    // ceo, user
    this.#img1 = document.getElementById("ceo");
    this.#img2 = document.getElementById("user");

    // location
    this.#ceoX = 10;
    this.#ceoY = 100;

    this.#userX = 700;
    this.#userY = 100;

    // size
    this.#ceoW = 400;
    this.#ceoH = 500;

    this.#userW = 400;
    this.#userH = 500;
  }

  draw(ctx) {
    let img1 = this.#img1;
    let img2 = this.#img2;

    let ceoX = this.#ceoX;
    let ceoY = this.#ceoY;

    let userX = this.#userX;
    let userY = this.#userY;

    let ceoW = this.#ceoW;
    let ceoH = this.#ceoH;

    let userW = this.#userW;
    let userH = this.#userH;

    // ceo
    ctx.drawImage(img1, ceoX, ceoY, ceoW, ceoH);

    // user
    ctx.drawImage(img2, userX, userY, userW, userH);
  }
}
