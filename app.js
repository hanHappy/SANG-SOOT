import Data from "./items/data.js";
// 상민
import IntroCanvas from "./ui/introCanvas.js";
import TownCanvas from "./ui/0townCanvas.js";
import RestaurantCanvas from "./ui/0restaurantCanvas.js";
import AfterGameCanvas from "./ui/afterGameCanvas.js";
// 세영
// import Main from './ui/3quizMain.js';
// import Rule from './ui/3quizRule.js';
// import Game from './ui/3quizGame.js';
// // 예진
// import BattleStartCanvas from "./ui/4battleStartCanvas.js";
// import BattleGameCanvas from "./ui/4battleGameCanvas.js";
// // 현준
import SlotMainCanvas from  "./ui/1slotMainCanvas.js";
import SlotRuleCanvas from "./ui/1slotRuleCanvas.js";
import SlotGameCanvas from "./ui/1slotGameCanvas.js";
import SlotGameoverCanvas from "./ui/1slotGameover.js";
import SlotEndingCanvas from "./ui/1slotEndingCanvas.js";
// import SlotGauge from "./ui/1slotGauge.js";
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
  // callback : rstrntCanvas -> slot || game
  let rstrntToGame = function(canvas){
    canvas.remove();
  }

  // 캔버스 인스턴스 ------------------------------------------
  const introCanvas = new IntroCanvas(introToTown);
  const townCanvas = new TownCanvas(townToRstrant);
  const rstrntCanvas = new RestaurantCanvas(rstrntToGame);
  // const battleStartCanvas = new BattleStartCanvas();
  // const battleGameCanvas = new BattleGameCanvas();
  const afterGameCanvas = new AfterGameCanvas();

  // 인트로 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  introCanvas.firstScene();

  // 맵 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  townCanvas.run();

  // 식당 입장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  rstrntCanvas.welcome();

  // 높은 평가 시
  if(Data.highRating)
  {
    // GAME_0 : 슬롯머신 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    
  } 

  // 낮은 평가 시
  else
  {
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

  }

}; // window.onload
