import TownCanvas from "./ui/0townCanvas.js";
import RestaurantCanvas from "./ui/0restaurantCanvas.js";
import User from "./items/0user.js";

//Jin
import BattleStartCanvas from "./ui/4battleStartCanvas.js";
import BattleGameCanvas from "./ui/4battleGameCanvas.js";

window.onload = () => {
  // 첫 번째 캔버스
  const townCanvas = new TownCanvas();
  townCanvas.run();

  // 두 번째 캔버스
  townCanvas.canvas.addEventListener("click", (e) => {
    // 예진 도착 여부 확인
    let checkPosition = setInterval(() => {
      // 예진 -> 식당에 도착하면
      if (User.arrived) {
        townCanvas.canvas.remove();
        clearInterval(checkPosition);
        const rstrntCanvas = new RestaurantCanvas();
      } // 도착하면
    }, 100); // set interval
  });
};

// 4 예진 게임
window.onload = function () {
  // scenario
  let battleStartCanvas = new BattleStartCanvas();
  battleStartCanvas.run();

  let checkIndex = setInterval(() => {
    let index = battleStartCanvas.scenIndex;
    if (index == 5) {
      battleStartCanvas.startCanvas.remove();
      let battleGameCanvas = new BattleGameCanvas();
      battleGameCanvas.run();
      clearInterval(checkIndex);
    }
  }, 100);
};
