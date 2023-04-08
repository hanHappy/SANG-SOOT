/**  @type {HTMLCanvasElement}*/
import BattleStartCanvas from "./ui/4battleStartCanvas.js";
import BattleGameCanvas from "./ui/4battleGameCanvas.js";

window.onload = function () {
  //시나리오
  let battleStartCanvas = new BattleStartCanvas();
  battleStartCanvas.run();

  let playStop = battleStartCanvas.playStop;

  if (playStop == false) {
    //게임
    let battleGameCanvas = new BattleGameCanvas();
    battleGameCanvas.run();
  }
};
