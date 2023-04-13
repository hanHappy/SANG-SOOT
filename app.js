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
// 예진
import BattleStartCanvas from "./ui/4battleStartCanvas.js";
import BattleGameCanvas from "./ui/4battleGameCanvas.js";
// // 현준
import SlotMainCanvas from "./ui/1slotMainCanvas.js";
import SlotRuleCanvas from "./ui/1slotRuleCanvas.js";
import SlotGameCanvas from "./ui/1slotGameCanvas.js";
import SlotGameoverCanvas from "./ui/1slotGameover.js";

// 현채
import KioskCanvas0 from "./2kioskui/2kioskCanvas0.js";
import KioskCanvas1 from "./2kioskui/2kioskCanvas1.js";
import KioskCanvas2 from "./2kioskui/2kioskCanvas2.js";
import KioskResult from "./2kioskitem/2kioskResult.js";


window.onload = () => {
  // callback : intro -> townCanvas
  let introToTown = function (canvas) {
    canvas.remove();
    townCanvas.canvas.style.display = "block";
  }
  // callback : townCanvas -> rstrntCanvas
  let townToRstrant = function (canvas) {
    canvas.remove();
    rstrntCanvas.canvas.style.display = "block";
  }
  // callback : rstrntCanvas -> slot
  let rstrntToSlot = function (canvas) {
    canvas.remove();
    toSlot();
  }
  // callback : rstrntCanvas -> game
  let rstrntToGame = function (canvas) {
    canvas.remove();
    toGame();
  }

  // 캔버스 인스턴스 ------------------------------------------
  const introCanvas = new IntroCanvas(introToTown);
  const townCanvas = new TownCanvas(townToRstrant);
  const rstrntCanvas = new RestaurantCanvas(rstrntToSlot, rstrntToGame);
  const battleStartCanvas = new BattleStartCanvas();
  const battleGameCanvas = new BattleGameCanvas();
  const afterGameCanvas = new AfterGameCanvas();

  // 인트로 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  introCanvas.firstScene();

  // 맵 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  townCanvas.run();

  // 식당 입장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  rstrntCanvas.welcome();

  // 높은 평가 시 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  // GAME_0 : 슬롯게임 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  let toSlot = function () {
    // 문서에서 버튼을 받아온다
    const strBtn = document.getElementById("strBtn");
    const conBtn = document.getElementById("conBtn");
    const spinBtn = document.getElementById("spinBtn");
    const stop1 = document.getElementById("stop1");
    const stop2 = document.getElementById("stop2");
    const stop3 = document.getElementById("stop3");
    const toOverBtn = document.getElementById("toOverBtn");
    const strBtn0 = document.getElementById("stopSE");
    const endingSE = document.getElementById("endingSE");

    // 1. 슬롯 메인 캔버스 실행
    const slotMain = new SlotMainCanvas();
    document.getElementById("mainSE");
    mainSE.play();
    slotMain.run();

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
    conBtn.addEventListener("click", (e) => {
      document.getElementById("clickSE");
      clickSE.play();
      slotRule.canvas.remove();
      slotGame.run();
      conBtn.style.display = "none";
      spinBtn.style.display = "block";
      stop1.style.display = "block";
      stop2.style.display = "block";
      stop3.style.display = "block";
    }, { once: true });


    // 4. 시간초과, 잭팟일 경우 게임오버 클래스로 이동
    const slotGameover = new SlotGameoverCanvas();
    function handleSlotCanvas() {
      slotGame.canvas.remove();

      // slotGame가 null일 경우, handleSlotCanvas메서드를 리턴으로 끝낸다
      if (!slotGame) {
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

    // 5. 엔딩크레딧
    toOverBtn.addEventListener("click", (e) => {
      document.getElementById("stopSE");
      stopSE.play();
      slotGameover.canvas.remove();
      toOverBtn.style.display = "none";

      const ending = document.getElementById("ending");
      ending.style.display = "block";
      ending.play();
      endingSE.play();
    })
  }

  // 낮은 평가 시 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  let toGame = function () {
    // GAME_3 : 사장과대결 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    // // Main
    battleStartCanvas.run();
    // Game
    let checkIndex = setInterval(() => {
      let index = battleStartCanvas.scenIndex;
      if (index == 4) {
        battleGameCanvas.battleCanvas.style.display = "block";
        battleStartCanvas.startCanvas.remove();
        battleGameCanvas.run();
        clearInterval(checkIndex);
      }
    }, 100);
    // // GAME_1 : 키오스크 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    // const startBtn = document.getElementById('start-btn');
    // const nextBtn = document.getElementById('next-btn');
    // const submitBtn = document.getElementById('submit-btn');
    // const lastBtn = document.getElementById('last-btn');
    // const clicksound = document.getElementById('clicksound');
    // const winsound = document.getElementById('winsound');
    // const failsound = document.getElementById('failsound');

    // clicksound.load();
    // winsound.load();
    // failsound.load();

    // //첫번째 캔버스
    // const kioskCanvas0 = new KioskCanvas0();
    // kioskCanvas0.draw();

    // document.getElementById('start-btn').style.display = "block";

    // const kioskCanvas1 = new KioskCanvas1();
    // startBtn.addEventListener('click', (e) => {
    //   clicksound.play();
    //   //두번째 캔버스
    //   kioskCanvas0.canvas.remove();
    //   kioskCanvas1.draw();
    //   document.getElementById('start-btn').style.display = "none";
    //   document.getElementById('next-btn').style.display = "block";
    // });

    // const kioskCanvas2 = new KioskCanvas2();
    // nextBtn.addEventListener('click', (e) => {
    //   // clicksound0.pause();
    //   clicksound.play();
    //   //세번째 캔버스
    //   kioskCanvas1.canvas.remove();
    //   kioskCanvas2.run();
    //   document.getElementById('next-btn').style.display = "none";
    //   document.getElementById('submit-btn').style.display = "block";
    //   document.getElementById('ingredient-list').style.display = "block";

    // })

    // const kioskResult = new KioskResult();
    // submitBtn.addEventListener('click', (e) => {
    //   kioskCanvas2.canvas.remove();
    //   document.getElementById('submit-btn').style.display = "none";
    //   document.getElementById('ingredient-list').style.display = "none";

    //   document.getElementById('last-btn').style.display = "block";
    // })
  }


  // GAME_2 : 음식맞추기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


}; // window.onload