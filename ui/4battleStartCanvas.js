import BattleScenario from "../item/4battleScenario.js";

export default class BattleStartCanvas {
  #tid; //timeId
  #battleStartCanvas;
  #battleStartCtx;
  #battleScenario;
  #playStop;

  constructor() {
    //canvas
    this.#battleStartCanvas = document.createElement("canvas");
    this.#battleStartCtx = this.#battleStartCanvas.getContext("2d");
    document.body.append(this.#battleStartCanvas);

    this.#battleStartCanvas.width = 1150;
    this.#battleStartCanvas.height = 820;

    // obj -> scenario
    this.#battleScenario = new BattleScenario(this.#battleStartCanvas);

    // click event
    this.#battleStartCanvas.onclick = this.clickHandler.bind(this);

    // play
    this.#playStop = this.#battleScenario.scenIndex;
  }

  clickHandler(e) {
    this.#battleScenario.scenario(
      this.#battleStartCtx,
      this.#battleStartCanvas
    );
  }

  run() {
    this.paint();
  }

  paint() {
    this.#battleScenario.draw(this.#battleStartCtx);
  }
}
