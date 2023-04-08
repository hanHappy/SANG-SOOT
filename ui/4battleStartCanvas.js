import BattleScenario from "../item/4battleScenario.js";

export default class BattleStartCanvas {
  #tid; //timeId
  #battleStartCanvas;
  #battleStartCtx;
  #battleScenario;

  constructor() {
    //canvas
    this.#battleStartCanvas = document.createElement("canvas");
    this.#battleStartCtx = this.#battleStartCanvas.getContext("2d");
    document.body.append(this.#battleStartCanvas);

    this.#battleStartCanvas.width = 1150;
    this.#battleStartCanvas.height = 820;

    // obj -> scenario
    this.#battleScenario = new BattleScenario();

    //click event
    this.#battleStartCanvas.onclick = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.#battleScenario.scenario();
  }

  run() {
    this.paint();
  }

  paint() {
    this.#battleScenario.draw(this.#battleStartCtx, 0);
  }
}
