import BattleGameCanvas from "./4battleGameCanvas.js";

export default class BattleStartCanvas {
  #tid;
  #battleStartCanvas;
  #battleStartCtx;
  #scenIndex;
  #img1;
  #img2;
  #images;
  #imgX;
  #imgY;
  #imgW;
  #imgH;

  constructor() {
    //canvas
    this.#battleStartCanvas = document.createElement("canvas");
    this.#battleStartCtx = this.#battleStartCanvas.getContext("2d");
    document.body.append(this.#battleStartCanvas);

    // size
    this.#battleStartCanvas.width = 1150;
    this.#battleStartCanvas.height = 820;

    this.#imgX = 0;
    this.#imgY = 0;
    this.#imgW = 1150;
    this.#imgH = 820;

    // click event
    this.#battleStartCanvas.onclick = this.clickHandler.bind(this);

    // index
    this.#scenIndex = 0;

    // img
    this.#images = new Array(5);

    for (let i = 0; i < this.#images.length; i++) {
      this.#images[i] = document.getElementById(`talk${i}`);
    }
  }

  clickHandler(e) {
    this.#scenIndex++;
    if (this.#scenIndex < 5) this.paint();
  }

  run() {
    // first img
    setTimeout(() => {
      let img1 = document.getElementById("talk00");
      this.#battleStartCtx.drawImage(
        img1,
        this.#imgX,
        this.#imgY,
        this.#imgW,
        this.#imgH
      );
      setTimeout(() => {
        let img2 = document.getElementById("talk01");
        this.#battleStartCtx.drawImage(
          img2,
          this.#imgX,
          this.#imgY,
          this.#imgW,
          this.#imgH
        );
      }, 1000);
    }, 10);

    this.paint();
  }

  paint() {
    let imgX = this.#imgX;
    let imgY = this.#imgY;
    let imgW = this.#imgW;
    let imgH = this.#imgH;

    this.#battleStartCtx.drawImage(
      this.#images[this.#scenIndex],
      imgX,
      imgY,
      imgW,
      imgH
    );
  }

  get startCanvas() {
    return this.#battleStartCanvas;
  }

  get scenIndex() {
    return this.#scenIndex;
  }
}
