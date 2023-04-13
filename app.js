import Data from "./items/data.js";
// 상민
import IntroCanvas from "./ui/introCanvas.js";
import TownCanvas from "./ui/0townCanvas.js";
import RestaurantCanvas from "./ui/0restaurantCanvas.js";
// 세영
// import Main from './ui/3quizMain.js';
// import Rule from './ui/3quizRule.js';
// import Game from './ui/3quizGame.js';
// // 예진
// import BattleStartCanvas from "./ui/4battleStartCanvas.js";
// import BattleGameCanvas from "./ui/4battleGameCanvas.js";
// // 현준
// import SlotMainCanvas from  "./1slotUi/1slotMainCanvas.js";
// // 현채

window.onload = () => {
  // callback : intro -> townCanvas
  let introToTown = function(canvas){
    canvas.remove();
    townCanvas.canvas.style.display = "block";
  }
  // callback : townCanvas -> rstrntCanvas
  let townToRstrant = function(canvas){
    canvas.remove();
    rstrntCanvas.canvas.style.display = "block";
  }

  // 캔버스 인스턴스 ------------------------------------------
  const introCanvas = new IntroCanvas(introToTown);
  const townCanvas = new TownCanvas(townToRstrant);
  const rstrntCanvas = new RestaurantCanvas();
  // const battleStartCanvas = new BattleStartCanvas();
  // const battleGameCanvas = new BattleGameCanvas();

  // 인트로 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  introCanvas.firstScene();

  // 맵 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  townCanvas.run();

  // 식당 입장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  rstrntCanvas.welcome();

  // GAME_0 : 슬롯머신 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // GAME_1 : 키오스크 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // GAME_2 : 음식맞추기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // GAME_3 : 사장과대결 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  // // Main
  // battleStartCanvas.run();
  // // Game
  // let checkIndex = setInterval(() => {
  //   let index = battleStartCanvas.scenIndex;
  //   if (index == 5) {
  //     battleStartCanvas.startCanvas.remove();
  //     battleGameCanvas.run();
  //     clearInterval(checkIndex);
  //   }
  // }, 100);


}; // window.onload
