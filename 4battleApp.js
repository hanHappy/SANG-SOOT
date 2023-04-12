/**  @type {HTMLCanvasElement}*/
import BattleStartCanvas from "./ui/4battleStartCanvas.js";
import BattleGameCanvas from "./ui/4battleGameCanvas.js";

window.onload = function () {
  // scenario
  let battleStartCanvas = new BattleStartCanvas();
  battleStartCanvas.run();

  let checkIndex = setInterval(() => {
    let index = battleStartCanvas.scenIndex;
    if (index == 6) {
      battleStartCanvas.startCanvas.remove();
      let battleGameCanvas = new BattleGameCanvas();
      battleGameCanvas.run();
      clearInterval(checkIndex);
    }
  }, 100);
};
