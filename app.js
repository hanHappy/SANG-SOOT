// 상민
import TownCanvas from "./ui/0townCanvas.js";
import RestaurantCanvas from "./ui/0restaurantCanvas.js";
import User from "./items/0user.js";
// // 세영
<<<<<<< HEAD
// import Main from "./ui/3quizMain.js";
// import Rule from "./ui/3quizRule.js";
// import Game from "./ui/3quizGame.js";
// // 예진
// import BattleStartCanvas from "./ui/4battleStartCanvas.js";
// import BattleGameCanvas from "./ui/4battleGameCanvas.js";
// import MatchPage from "./items/4battleMatch.js";
// // 현준
// import SlotMainCanvas from "./1slotUi/1slotMainCanvas.js";
=======
// import Main from './ui/3quizMain.js';
// import Rule from './ui/3quizRule.js';
// import Game from './ui/3quizGame.js';
// // 예진
// import BattleStartCanvas from "./ui/4battleStartCanvas.js";
// import BattleGameCanvas from "./ui/4battleGameCanvas.js";
// // 현준
// import SlotMainCanvas from  "./1slotUi/1slotMainCanvas.js";
>>>>>>> aab0dab5a2aa0c6a21a745770e5033cdb5972634
// // 현채

window.onload = () => {
  const townCanvas = new TownCanvas();
<<<<<<< HEAD
  // const battleStartCanvas = new BattleStartCanvas();
  // const battleGameCanvas = new BattleGameCanvas();
  // // 인트로 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
=======
  const rstrntCanvas = new RestaurantCanvas();
  // const battleStartCanvas = new BattleStartCanvas();
  // const battleGameCanvas = new BattleGameCanvas();
  // 인트로 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
>>>>>>> aab0dab5a2aa0c6a21a745770e5033cdb5972634

  // // 맵 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  townCanvas.run();

  // 식당 입장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  townCanvas.canvas.addEventListener("click", (e) => {
    // 예진 도착 여부 확인
    let checkPosition = setInterval(() => {
      // 예진 -> 식당에 도착하면
      if (User.arrived) {
        townCanvas.canvas.remove();
        clearInterval(checkPosition);
        rstrntCanvas.welcome();
      } // 도착하면
    }, 100); // set interval
  }); // click listener

  // // 식당 입장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

<<<<<<< HEAD
  // GAME_0 : 슬롯머신 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
=======
  
  // // GAME_0 : 슬롯머신 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
>>>>>>> aab0dab5a2aa0c6a21a745770e5033cdb5972634

  // // GAME_1 : 키오스크 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // // GAME_2 : 음식맞추기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

<<<<<<< HEAD
  // GAME_3 : 사장과대결 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  // Main
  // battleStartCanvas.run();
  // Game
=======
  // // GAME_3 : 사장과대결 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  // // Main
  // battleStartCanvas.run();
  // // Game
>>>>>>> aab0dab5a2aa0c6a21a745770e5033cdb5972634
  // let checkIndex = setInterval(() => {
  //   let index = battleStartCanvas.scenIndex;
  //   if (index == 5) {
  //     battleStartCanvas.startCanvas.remove();
  //     battleGameCanvas.run();
  //     clearInterval(checkIndex);
  //   }
  // }, 100);
<<<<<<< HEAD
}; // window.onload
=======
  

}; // window.onload
>>>>>>> aab0dab5a2aa0c6a21a745770e5033cdb5972634
