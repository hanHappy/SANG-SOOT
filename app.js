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
import SlotMainCanvas from  "./ui/1slotMainCanvas.js";
import SlotRuleCanvas from "./ui/1slotRuleCanvas.js";
import SlotGameCanvas from "./ui/1slotGameCanvas.js";
import SlotGameoverCanvas from "./ui/1slotGameover.js";
import SlotEndingCanvas from "./ui/1slotEndingCanvas.js";
// import SlotGauge from "./ui/1slotGauge.js";
// // 현채

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
  
  
  // window.onload = function() {
      // 문서에서 버튼을 받아온다
      const strBtn = document.getElementById("strBtn");
      const conBtn = document.getElementById("conBtn");
      const spinBtn = document.getElementById("spinBtn");
      const stop1 = document.getElementById("stop1");
      const stop2 = document.getElementById("stop2");
      const stop3 = document.getElementById("stop3");
      const toOverBtn = document.getElementById("toOverBtn");
      // const toMainBtn = document.getElementById("toMainBtn");
  
      
      // 1. 슬롯 메인 캔버스 실행
      const slotMain = new SlotMainCanvas();
      slotMain.run();
      // this.#strBtn.style.display = 'block';
  
  
      
      // 2. start버튼 클릭시 슬롯 규칙 캔버스로 이동
      const slotRule = new SlotRuleCanvas();
  
  
      strBtn.addEventListener("click", (e) => {
          document.getElementById("ruleSE");
          ruleSE.play();
          slotMain.canvas.remove();
          slotRule.run();
          strBtn.style.display = "none";
          conBtn.style.display = "block";
      })
      
      
      // 슬롯 게임 캔버스에 콜백함수 인자로 전달
      let slotGame = new SlotGameCanvas(handleSlotCanvas);
  
      
      // 3. 확인 버튼 클릭시 슬롯 게임 캔버스로 이동
      conBtn.addEventListener("click", (e) =>{
          document.getElementById("clickSE");
          clickSE.play();
          slotRule.canvas.remove();
          slotGame.run();
          conBtn.style.display = "none";
          spinBtn.style.display = "block";
          stop1.style.display = "block";
          stop2.style.display = "block";
          stop3.style.display = "block";
      })
  
  
      // 4. 시간초과, 잭팟일 경우 게임오버 클래스로 이동
      const slotGameover = new SlotGameoverCanvas();
      function handleSlotCanvas()
      {
          // slotGame가 null일 경우, handleSlotCanvas메서드를 리턴으로 끝낸다
          if(!slotGame){
              return;
          }
          // slotGame 문서를 삭제한다
          slotGame.canvas.remove();
          slotGame = null;
          slotGameover.run();
  
  
  
          // spinBtn, stop버튼 종료
          spinBtn.style.display = "none";
          stop1.style.display = "none";
          stop2.style.display = "none";
          stop3.style.display = "none";
          
          // to메인, to종료 버튼 생성
          // toMainBtn.style.display = "block";
          toOverBtn.style.display = "block";
      }//.bind(this)
  
  // } // window.onload
  
  // // GAME_1 : 키오스크 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

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
