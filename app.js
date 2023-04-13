import Data from "./items/data.js";
// 상민
import IntroCanvas from "./ui/introCanvas.js";
import TownCanvas from "./ui/0townCanvas.js";
import RestaurantCanvas from "./ui/0restaurantCanvas.js";
import AfterGameCanvas from "./ui/afterGameCanvas.js";
// 세영
import Main from "./ui/3quizMain.js";
import Rule from "./ui/3quizRule.js";
import Game from "./ui/3quizGame.js";
import Quiz from "./items/3quizGameQuiz.js";
// 예진
import BattleStartCanvas from "./ui/4battleStartCanvas.js";
import BattleGameCanvas from "./ui/4battleGameCanvas.js";
// // 현준
import SlotMainCanvas from "./ui/1slotMainCanvas.js";
import SlotRuleCanvas from "./ui/1slotRuleCanvas.js";
import SlotGameCanvas from "./ui/1slotGameCanvas.js";
import SlotGameoverCanvas from "./ui/1slotGameover.js";

// 현채
import KioskCanvas0 from "./ui/2kioskCanvas0.js";
import KioskCanvas1 from "./ui/2kioskCanvas1.js";
import KioskCanvas2 from "./ui/2kioskCanvas2.js";
import KioskResult from "./items/2kioskResult.js";


window.onload = () => {
  // callback : intro -> townCanvas
  let introToTown = function (canvas) {
    canvas.remove();
    townCanvas.canvas.style.display = "block";
  };
  // callback : townCanvas -> rstrntCanvas
  let townToRstrant = function (canvas) {
    canvas.remove();
    rstrntCanvas.canvas.style.display = "block";
  };
  // callback : rstrntCanvas -> slot
  let rstrntToSlot = function (canvas) {
    canvas.remove();
    toSlot();
  };
  // callback : rstrntCanvas -> game
  let rstrntToGame = function (canvas) {
    canvas.remove();
    toGame();
  }
  // callback : game -> ending
  let gameToEnding = function (canvas) {
    canvas.remove();
    afterGameCanvas.canvas.style.display = "block";
  }

  // 캔버스 인스턴스 ------------------------------------------

  // 0, 상민
  const introCanvas = new IntroCanvas(introToTown);
  const townCanvas = new TownCanvas(townToRstrant);
  const rstrntCanvas = new RestaurantCanvas(rstrntToSlot, rstrntToGame);

  // 3, 세영
  let foodToBattle = function (canvas) {
    canvas.remove();
    battleStartCanvas.run();
  };
  let main = new Main();
  let rule = new Rule();
  let game = new Game(foodToBattle);

  // 4, 예진
  const battleStartCanvas = new BattleStartCanvas();
  const battleGameCanvas = new BattleGameCanvas();
  const afterGameCanvas = new AfterGameCanvas();

  // 인트로 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  introCanvas.firstScene();

  // // 맵 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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
    });

    // 슬롯 게임 캔버스에 콜백함수 인자로 전달
    let slotGame = new SlotGameCanvas(handleSlotCanvas);
    // 3. 확인 버튼 클릭시 슬롯 게임 캔버스로 이동
    conBtn.addEventListener(
      "click",
      (e) => {
        document.getElementById("clickSE");
        clickSE.play();
        slotRule.canvas.remove();
        slotGame.run();
        conBtn.style.display = "none";
        spinBtn.style.display = "block";
        stop1.style.display = "block";
        stop2.style.display = "block";
        stop3.style.display = "block";
      },
      { once: true }
    );

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
    } //.bind(this)

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
    });
  };

  // 낮은 평가 시 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  let toGame = function () {

    Data.gameResult = 0;

    let mainToRule = function (canvas) {
      canvas.remove();
      kioskCanvas1.canvas.style.display = "block";
    }
    let ruleToGame = function (canvas) {
      canvas.remove();
      kioskCanvas2.canvas.style.display = "block";
    }
    let kioskToSecondGame = function (canvas) {
      canvas.remove();
      battleStartCanvas.startCanvas.style.display = "block";
    }

    // GAME_1 : 키오스크 --------------------------------------------------------------

    // 첫번째 캔버스
    // const kioskCanvas0 = new KioskCanvas0(mainToRule);
    // const kioskCanvas1 = new KioskCanvas1(ruleToGame);
    // const kioskCanvas2 = new KioskCanvas2(kioskToSecondGame);
    // kioskCanvas0.canvas.style.display = "block";

    // kioskCanvas0.draw();

    // kioskCanvas1.draw();

    // kioskCanvas2.run();

    // GAME_2 : 음식맞추기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    // main.obj.style.display = "none";
    main.obj.style.display = "block";
    main.run();

    main.obj.addEventListener("click", (e) => {
      const startX = e.offsetX;
      const startY = e.offsetY;

      // [Main] 시작하기 버튼 클릭 시 -> [Rule] 이동
      if (startX >= 372 && startX <= 772 && startY >= 610 && startY <= 731) {
        main.obj.remove();
        rule.obj.style.display = "block";
        main.mainPlay();
        const quizIntroBgm = document.getElementById("quizIntroBgm");
        quizIntroBgm.play();
        // let rule = new Rule();
        rule.run();
      } // main if
    }); // main click(e)

    rule.obj.addEventListener("click", (e) => {
      const startX = e.offsetX;
      const startY = e.offsetY;

      // [Rule] 다음 버튼 클릭 시 -> [Game] 게임 진행
      if (startX >= 778 && startX <= 1022 && startY >= 580 && startY <= 674) {
        rule.obj.remove();
        game.obj.style.display = "block";
        rule.rulePlay();
        quizIntroBgm.pause();
        // let game = new Game();
        game.run();
        setTimeout(() => {
          game.countPlay();
        }, 850);
      } // rule if
    }); // rule click(e)

    // GAME_3 : 사장과대결 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    // Game
    const nextBtn = document.getElementById("nextbtn");
    nextBtn.addEventListener("click", (e) => {
      game.obj.remove();
      nextBtn.style.display = "none";
      battleStartCanvas.startCanvas.style.display = "block";
      let checkIndex = setInterval(() => {
        let index = battleStartCanvas.scenIndex;
        if (index == 4) {
          battleStartCanvas.startCanvas.remove();
          battleGameCanvas.battleCanvas.style.display = "block";
          battleGameCanvas.run();
          clearInterval(checkIndex);
        }
      }, 100);
    });
  }


}; // window.onload
