// import SlotBtn from "/../1slotItem/1SlotGameBtn.js";
import SlotReels from "../1slotItem/1SlotReels.js";
import SlotGauge from "../1slotItem/1slotGauge.js";
import SlotFrame from "../1slotItem/1slotFrame.js";
import SlotBG from "../1slotItem/1slotBG.js";
export default class SlotCanvas {
    #tid; // 은닉화 영역
    #slotBG;
    #canvas;
    #ctx;
    #slotFrame;
    #slotGauge;
    #SlotReels;
    #reelsImgs
    #img;
    #reels;
    #spinBtn;
    #spinBtn1;
    #slotBtn;
    #stopBtn1;
    #stopBtn2;
    #stopBtn3;
    #reelsStopped;
    

    // canvas ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    constructor() { // 생성자영역 >> 클래스의 속성들이 위치 // this , #
        this.#canvas = document.createElement("canvas"); // 캔버스 스스로 생성
        document.body.append(this.#canvas); // html body영역의 제일 마지막에 요소를 insert한다
        this.#ctx = this.#canvas.getContext('2d'); // 그리기위한 컨텍스트 만듬

        this.#canvas.width = 1150; // 캔버스 사이즈 설정
        this.#canvas.height = 820;

        // this.#spinBtn = document.getElementById("spinBtn"); // spin버튼 가져오기
        // this.#spinBtn.addEventListener("click", () => {
        //     // for (let reels of this.#reels) {
        //     //     reels.update();
        //     // }
        // });


        // backgrouund ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        this.#tid = null;
        this.#slotBG = new SlotBG(); // BG객체 생성
        this.#slotFrame = new SlotFrame();
        this.#slotGauge = new SlotGauge();


        // Reels ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        // 캔버스에서 인스턴스를 여러 개 만들어야한다
        this.#reels = [
            new SlotReels(170),
            new SlotReels(419),
            new SlotReels(669)
        ];  // 배열에 3개의 객체 생성 (3개의 릴 인스턴스 생성)
        
        
        // console.log("위");
        // this.#reels = new SlotReels(3);
        // console.log("아래");
        console.log(this.#reels[0]);
        // console.log(this.#reels);

 
//test ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

        // this.#reelsStopped = [false, false, false];
        // console.log(this.#reelsStopped[0]);


















        // spinButton ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        this.#spinBtn = false;
        
        this.#spinBtn = document.getElementById("spinBtn");
        this.#spinBtn.addEventListener("click", () => {
            this.#spinBtn = true;
            // spinReelsbtn();
        });
        
        
        // stopButton ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        this.#stopBtn1 = false;
        this.#stopBtn2 = false;
        this.#stopBtn3 = false;

        this.#stopBtn1 = document.getElementById("stop1");
        this.#stopBtn1.addEventListener("click", () => {
            this.#stopBtn1 = true;
        });

        this.#stopBtn2 = document.getElementById("stop2");
        this.#stopBtn2.addEventListener("click", () => {
            this.#stopBtn2 = true;
        });

        this.#stopBtn3 = document.getElementById("stop3");
        this.#stopBtn3.addEventListener("click", () => {
            this.#stopBtn3 = true;
        });


    }




    // 이하 함수영역 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 
    run() {  // 실행영역.  반복해서 호출하기 위함. 1초에 60번 64 frame과 비슷하다
        this.#tid = setInterval(() => {
            // console.log("run");

            this.update();
            this.paint();

        }, 17);
    }


    update() { // 변할 때
        if (this.#spinBtn == true) {
            this.#slotGauge.update();
        // 속성에있는 객체의 함수를 호출 할 때 this.#slotGauge() / this,#을 활용
        // this.#SlotReels.update();
        }
    }

    paint() {
        this.#slotBG.draw(this.#ctx); // BG객체의 draw함수 호출
        this.#slotFrame.draw(this.#ctx);

        //스핀버튼 클릭하면 게임이 실행된다
        // if (this.#spinBtn == true) {
        if (this.#spinBtn == true) {
        for (let reels of this.#reels) { // 3개의 릴을 만들고 reels에 보낸다
                reels.spin(this.#ctx);
                this.#slotGauge.draw(this.#ctx);
            }
        }


        if(this.#stopBtn1 == true){
            this.#reels[0].stop1(this.#ctx);
            // this.#spinBtn = false;
        }

        if(this.#stopBtn2 == true){
            this.#reels[1].stop2(this.#ctx);
            // this.#spinBtn = false;
        }

        if(this.#stopBtn3 == true){
            this.#reels[2].stop3(this.#ctx);
            // this.#spinBtn = false;
    

            // for (let reels of this.#reels) {
            //     reels.stop1(this.#ctx);
            // }
        }
        
        // this.#reels = ["", "", ""];

    }

}