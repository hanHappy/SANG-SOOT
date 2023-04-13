import BattleBackground from "../background/4battleBackground.js";
import BattleGauge from "../items/4battleGauge.js";
import BattleNpc from "..//items/4battleNpc.js";
import MatchPage from "../items/4battleMatch.js";

export default class BattleGameCanvas {
  #battleGameCanvas;
  #battleGameCtx;
  #background;
  #battleGauge;
  #battleNpc;
  #matchPage;
  #battleBgm;
  #battleKeyup;
  #tid;

  constructor() {
    // canvas
    this.#battleGameCanvas = document.createElement("canvas");
    this.#battleGameCtx = this.#battleGameCanvas.getContext("2d");
    document.body.append(this.#battleGameCanvas);
    this.#battleGameCanvas.style.display = "none";
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

    // MatchPage
    this.#matchPage = new MatchPage();

    // keyboard event
    //this.#battleGameCanvas.onkeydown = this.keyDownHandler.bind(this);
    this.#battleGameCanvas.onkeyup = this.keyUpHandler.bind(this);

    // NPC 얼굴 설정
    this.#battleGauge.onChangeNpc = this.onChangeNpcHandler.bind(this);

    // Sound
    this.#battleBgm = document.getElementById("battleBgm");
    this.#battleKeyup = document.getElementById("battleKeyup");
  }

  onChangeNpcHandler() {
    //게이지가 일정이상,이하가 됐을 때 기존이미지 지우고 새이미지 띄우기
    //게이지 낮을때 (손님우세) 사장이미지 변경
    this.#battleNpc.newDraw(this.#battleGameCtx);
  }

  //눌렀을때 인덱스 ++; 인덱스를 나머지 연산해서 나머지가 0일때 , 1일때

  keyUpHandler(e) {
    if (e.keyCode == 32) {
      document.getElementById("#battleKeyup");
      this.#battleKeyup.play();
      this.#battleGauge.plus();
    } else alert("스페이스바를 입력하세요");
  }

  run() {
    //위에 함수 끝나면 실행
    document.getElementById("#battleBgm");
    this.#battleBgm.play();

    this.#tid = setInterval(() => {
      this.update();
      this.paint();
    }, 17);
  }

  update() {
    this.#battleGauge.update();

    // if (this.#battleGameCanvas) {
    //   this.battleGauge.onChangeNpc =
    //     this.#battleNpc.onChangeNpcHandler.bind(this);
    // }
  }

  paint() {
    // background
    this.#background.draw(this.#battleGameCtx);

    // gauge
    this.#battleGauge.draw(this.#battleGameCtx);

    // NPC
    this.#battleNpc.draw(this.#battleGameCtx);
  }

  get battleCanvas() {
    return this.#battleGameCanvas;
  }
} //class
