// 상민
// import TownCanvas from "./ui/0townCanvas.js";
// import RestaurantCanvas from "./ui/0restaurantCanvas.js";
// import User from "./items/0user.js";
// // 세영
import Main from './ui/3quizMain.js';
import Rule from './ui/3quizRule.js';
import Game from './ui/3quizGame.js';
// // 예진
// import BattleStartCanvas from "./ui/4battleStartCanvas.js";
// import BattleGameCanvas from "./ui/4battleGameCanvas.js";
// // 현준
// import SlotMainCanvas from  "./1slotUi/1slotMainCanvas.js";
// // 현채

window.onload = () => {
  // const townCanvas = new TownCanvas();
  // const rstrntCanvas = new RestaurantCanvas();
  // // const battleStartCanvas = new BattleStartCanvas();
  // // const battleGameCanvas = new BattleGameCanvas();
  // // 인트로 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // // // 맵 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  // townCanvas.run();

  // // 식당 입장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  // townCanvas.canvas.addEventListener("click", (e) => {
  //   // 예진 도착 여부 확인
  //   let checkPosition = setInterval(() => {
  //     // 예진 -> 식당에 도착하면
  //     if (User.arrived) {
  //       townCanvas.canvas.remove();
  //       clearInterval(checkPosition);
  //       rstrntCanvas.welcome();
  //     } // 도착하면
  //   }, 100); // set interval
  // }); // click listener

  // // 식당 입장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // // GAME_0 : 슬롯머신 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // // GAME_1 : 키오스크 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // // GAME_2 : 음식맞추기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  let main = new Main();
  main.run();

  main.obj.addEventListener('click', (e) => {
    const startX = e.offsetX;
    const startY = e.offsetY;

    // [Main] 시작하기 버튼 클릭 시 -> [Rule] 이동
    if (startX >= 372 && startX <= 772 && startY >= 610 && startY <= 731) {
      main.obj.remove();
      main.mainPlay();
      const quizIntroBgm = document.getElementById("quizIntroBgm")
      quizIntroBgm.play();
      let rule = new Rule();
      rule.run();

      rule.obj.addEventListener('click', (e) => {
        const startX = e.offsetX;
        const startY = e.offsetY;

        // [Rule] 다음 버튼 클릭 시 -> [Game] 게임 진행
        if (startX >= 778 && startX <= 1022 && startY >= 580 && startY <= 674) {
          rule.obj.remove();
          rule.rulePlay();
          quizIntroBgm.pause();
          let game = new Game();
          game.run();
          setTimeout(() => {
            game.countPlay();
          }, 850);
        } // rule if
      }) // rule click(e)
    } // main if
  }); // main click(e)

  // // GAME_3 : 사장과대결 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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
