// 상민
import TownCanvas from "./ui/0townCanvas.js";
import RestaurantCanvas from "./ui/0restaurantCanvas.js";
import User from "./items/0user.js";
// // 세영
// import Main from './ui/3quizMain.js';
// import Rule from './ui/3quizRule.js';
// import Game from './ui/3quizGame.js';
// // 예진
// import BattleStartCanvas from "./ui/4battleStartCanvas.js";
// import BattleGameCanvas from "./ui/4battleGameCanvas.js";
// // 현준
// import SlotMainCanvas from  "./1slotUi/1slotMainCanvas.js";
// // 현채
import KioskCanvas0 from "./2kioskui/2kioskCanvas0.js";
import KioskCanvas1 from "./2kioskui/2kioskCanvas1.js";
import KioskCanvas2 from "./2kioskui/2kioskCanvas2.js";
import KioskResult from "./2kioskitem/2kioskResult.js";


window.onload = () => {
  const townCanvas = new TownCanvas();
  const rstrntCanvas = new RestaurantCanvas();
  // const battleStartCanvas = new BattleStartCanvas();
  // const battleGameCanvas = new BattleGameCanvas();
  // 인트로 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

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

  // // GAME_0 : 슬롯머신 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // // GAME_1 : 키오스크 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  const lastBtn = document.getElementById('last-btn');

  const clicksound0 = document.getElementById('clicksound');
  const clicksound1 = document.getElementById('clicksound');
  const winsound = document.getElementById('winsound');
  const failsound = document.getElementById('failsound');

  clicksound.load();
  winsound.load();
  failsound.load();

  //첫번째 캔버스
  const kioskCanvas0 = new KioskCanvas0();
  kioskCanvas0.draw();

  document.getElementById('start-btn').style.display = "block";

  const kioskCanvas1 = new KioskCanvas1();
  startBtn.addEventListener('click', (e) => {
      clicksound0.play();
      //두번째 캔버스
      kioskCanvas0.canvas.remove();
      kioskCanvas1.draw();
      document.getElementById('start-btn').style.display = "none";
      document.getElementById('next-btn').style.display = "block";
  });
  
  const kioskCanvas2 = new KioskCanvas2();
  nextBtn.addEventListener('click', (e) => {
      // clicksound0.pause();
      clicksound1.play();
      //세번째 캔버스
      kioskCanvas1.canvas.remove();
      kioskCanvas2.run();
      document.getElementById('next-btn').style.display = "none";
      document.getElementById('submit-btn').style.display = "block";
      document.getElementById('ingredient-list').style.display = "block";

  })

  const kioskResult = new KioskResult();
  submitBtn.addEventListener('click', (e) => {
      kioskCanvas2.canvas.remove();
      document.getElementById('submit-btn').style.display = "none";
      document.getElementById('ingredient-list').style.display = "none";

      document.getElementById('last-btn').style.display = "block";
  })

  // // GAME_2 : 음식맞추기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

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
