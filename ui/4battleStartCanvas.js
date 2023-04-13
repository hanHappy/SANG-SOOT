import MatchPage from "../items/4battleMatch.js";
import BattleBackground from "../background/4battleBackground.js";

export default class BattleStartCanvas {
  #battleStartCanvas;
  #battleGameCanvas;
  #battleStartCtx;
  #scenIndex;
  #images;
  #imgX;
  #imgY;
  #imgW;
  #imgH;
  #matchPage;
  #background;
  #battleClick;
  #battleStartBtn;

  constructor() {
    //canvas
    this.#battleStartCanvas = document.createElement("canvas");
    this.#battleStartCtx = this.#battleStartCanvas.getContext("2d");
    document.body.append(this.#battleStartCanvas);
    this.#battleStartCanvas.style.display = "none";

    this.#battleClick = document.getElementById("battleClick");
    this.#battleStartBtn = document.getElementById("battleStartBtn");

    // size
    this.#battleStartCanvas.width = 1150;
    this.#battleStartCanvas.height = 820;

    this.#imgX = 0;
    this.#imgY = 0;
    this.#imgW = 1150;
    this.#imgH = 820;

    // click event
    this.#battleStartCanvas.onclick = this.clickHandler.bind(this);
    // this.#battleClick.onplay = this.playHandler.bind(this);

    // Match Page
    this.#matchPage = new MatchPage();

    //background
    this.#background = new BattleBackground();

    // index
    this.#scenIndex = 0;

    // img
    this.#images = new Array(3);

    for (let i = 0; i < this.#images.length; i++) {
      this.#images[i] = document.getElementById(`talk${i}`);
    }
  }

  clickHandler(e) {
    this.#scenIndex++;
    document.getElementById("battleClick");
    this.#battleClick.play();
    if (this.#scenIndex < 4) {
      this.paint();
    }
  }

  run() {
    this.paint();
  }

  paint() {
    let imgX = this.#imgX;
    let imgY = this.#imgY;
    let imgW = this.#imgW;
    let imgH = this.#imgH;

    //인덱스==3 -> 매치화면
    if (this.#scenIndex == 3) {
      //sound
      this.#battleClick.pause();
      document.getElementById("battleStartBtn");
      this.#battleStartBtn.play();

      // background
      this.#background.draw(this.#battleStartCtx);

      // match Page
      this.#battleStartCtx.clearRect(0, 0, 1150, 820);
      this.#matchPage.run(this.#battleStartCtx);
    } else {
      console.log("#scenIndex");
      this.#battleStartCtx.drawImage(
        this.#images[this.#scenIndex],
        imgX,
        imgY,
        imgW,
        imgH
      );
    }
  }

  get startCanvas() {
    return this.#battleStartCanvas;
  }

  get scenIndex() {
    return this.#scenIndex;
  }
}
