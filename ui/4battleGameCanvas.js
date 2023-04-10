import BattleBackground from "../background/4battleBackground.js";
import BattleGauge from "../item/4battleGauge.js";
import BattleNpc from "../item/4battleNpc.js";
import battleFood from "../item/4battleFood.js";

export default class BattleGameCanvas {
  #battleGameCanvas;
  #battleGameCtx;
  #background;
  #battleGauge;
  #battleNpc;
  #battleFood;

  #tid;

  constructor() {
    // canvas
    this.#battleGameCanvas = document.createElement("canvas");
    this.#battleGameCtx = this.#battleGameCanvas.getContext("2d");
    document.body.append(this.#battleGameCanvas);
    this.#battleGameCanvas.tabIndex = 0;
    this.#battleGameCanvas.focus();

    this.#battleGameCanvas.width = 1150;
    this.#battleGameCanvas.height = 820;

    // gauge
    this.#battleGauge = new BattleGauge();

    // background
    this.#background = new BattleBackground();

    // NPC
    this.#battleNpc = new BattleNpc();

    // food
    this.#battleFood = new battleFood();

    // keyboard event
    this.#battleGameCanvas.onkeydown = this.keyDownHandler.bind(this);
    this.#battleGameCanvas.onkeyup = this.keyUpHandler.bind(this);

    // NPC 얼굴 설정
    //
    battleNpc.onChangeNpc = battleNpc.onChangeNpcHandler.bind(this);
  }

  keyDownHandler(e) {
    //입력받은 키보드 코드가 32라면 게이지
    if (e.keyCode == 32) {
      this.#battleGauge.plus();
      this.#battleFood.press();
    } else alert("스페이스바를 입력하세요");
  }

  onChangeNpcHandler() {
    //게이지가 일정이상,이하가 됐을 때 기존이미지 지우고 새이미지 띄우기

    this.battleGauge.onChangeNpc = battleNpc.onChangeNpcHandler.bind(this);
  }

  //눌렀을때 인덱스 ++; 인덱스를 나머지 연산해서 나머지가 0일때 , 1일때

  keyUpHandler(e) {
    if (e.keyCode == 32) {
      this.#battleGauge.plus();
      this.#battleFood.press();
    } else alert("스페이스바를 입력하세요");
  }

  run() {
    this.#tid = setInterval(() => {
      this.update();
      this.paint();
    }, 17);
  }

  update() {
    this.#battleGauge.update();

    if (this.#battleGameCanvas) {
    }
  }

  paint() {
    // background
    this.#background.draw(this.#battleGameCtx);

    // gauge
    this.#battleGauge.draw(this.#battleGameCtx);

    // NPC
    this.#battleNpc.draw(this.#battleGameCtx);

    // food
    this.#battleFood.draw(this.#battleGameCtx);
    this.#battleFood.cut(this.#battleGameCtx);
  }
} //class
