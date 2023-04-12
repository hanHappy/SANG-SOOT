import SlotMainCanvas from  "./1slotUi/1slotMainCanvas.js";
import SlotRuleCanvas from "./1slotUi/1slotRuleCanvas.js";
import SlotGameCanvas from "./1slotUi/1slotGameCanvas.js";
import SlotGameoverCanvas from "./1slotUi/1slotGameover.js";
import SlotEndingCanvas from "./1slotUi/1slotEndingCanvas.js"
import SlotGauge from "./1slotItem/1slotGauge.js";


window.onload = function() {
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
    

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    // // 5. 엔딩크레딧
    // const ending = new SlotEndingCanvas();
    // toOverBtn.addEventListener("click", (e) => {
    //     slotGameover.canvas.remove();
    //     ending.run();

    //     toOverBtn.style.display = "none";
    //     toMainBtn.style.display = "none";
    // })


    // // 5-1. 메인으로
    // toMainBtn.addEventListener("click", (e) => {
    //     slotGameover.canvas.remove();
    //     // slotMain.run();
    //     // document.getElementById("toMainBtn").style.display = "none";
    //     // document.getElementById("toOverBtn").style.display = "none";


    // })










} // window.onload
