/**  @type {HTMLCanvasElement}*/
import BattleStartCanvas from "./ui/4battleStartCanvas.js";
import BattleGameCanvas from "./ui/4battleGameCanvas.js";

window.onload = function () {
  // 실행 컨트롤
  //if()

  //시나리오
  let battleStartCanvas = new BattleStartCanvas();
  battleStartCanvas.run();

  // //게임
  // let battleGameCanvas = new BattleGameCanvas();
  // battleGameCanvas.run();
};
