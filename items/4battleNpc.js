export default class BattleNpc {
  #img1;
  #img2;
  #img3;
  #img4;
  #ceoX;
  #ceoY;
  #userX;
  #userY;
  #ceoW;
  #ceoH;
  #userW;
  #userH;
  #onChangeNpc;

  constructor() {
    // ceo, user
    this.#img1 = document.getElementById("ceo");
    this.#img2 = document.getElementById("4user");
    this.#img3 = document.getElementById("ceowin");
    this.#img4 = document.getElementById("userwin");

    // location
    this.#ceoX = 110;
    this.#ceoY = 200;

    this.#userX = 680;
    this.#userY = 0;

    // size
    this.#ceoW = 380;
    this.#ceoH = 400;

    this.#userW = 300;
    this.#userH = 400;

    //call back
    this.#onChangeNpc = null;
  }

  // set onChangeNpc(Callback) {
  //   this.#onChangeNpc = Callback;
  // }

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

  newDraw(ctx) {
    let img3 = this.#img3;
    let img4 = this.#img4;

    let ceoX = this.#ceoX;
    let ceoY = this.#ceoY;

    let userX = this.#userX;
    let userY = this.#userY;

    let ceoW = this.#ceoW;
    let ceoH = this.#ceoH;

    let userW = this.#userW;
    let userH = this.#userH;

    // ceo
    ctx.drawImage(img3, 0, 0, ceoW, ceoH);

    // user
    ctx.drawImage(img4, userX, userY, userW, userH);
  }
}
