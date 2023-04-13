export default class afterGameCanvas {
  #canvas;
  #ctx;
  #x;
  #y;
  #w;
  #h;
  #scenes;
  #sceneIndex;

  constructor() {
    // canvas, constext -----------------------------------------------
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);
    this.#canvas.width = 1150;
    this.#canvas.height = 820;
    this.#ctx = this.#canvas.getContext("2d");

    // image
    this.#x = 0;
    this.#y = 0;
    this.#w = 1150;
    this.#h = 820;

    // click ---------------------------------------------------------
    this.#sceneIndex = 0;
    this.#canvas.onclick = this.clickHandler.bind(this);

    // image load
    for (let i = 0; i < this.#scenes.length; i++) {
      this.#scenes[i] = document.getElementById(`afterGame${i}`);
    }
  } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  clickHandler() {
    if (this.#sceneIndex == 0) {
      this.drawResult();
      return;
    }

    this.draw();
    this.#sceneIndex++;
  } // click handler

  // 게임 결과 화면 (트로피)
  drawResult() {}

  draw() {
    let scene = this.#scenes[this.#sceneIndex];
    let x = this.#x;
    let y = this.#y;
    let w = this.#w;
    let h = this.#h;
    this.#ctx.drawImage(scene, x, y, w, h);
  }
}
