import SlotResult from "../1slotItem/1slotResult.js";
import SlotReel from "../1slotItem/1slotReel.js";
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
    #reels;
    #stopBtn1;
    #stopBtn2;
    #stopBtn3;
    #slotRsult;
    #spinBtn;
    #passImg;
    #failImg;
    #stopBtn3Click;
    #removeCanvas;//
    #ch;
    #strGauge;
    #spinBtnClick
    

    // canvas ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    constructor() { // 생성자영역 >> 클래스의 속성들이 위치 // this , #
        this.#canvas = document.createElement("canvas"); // 캔버스 스스로 생성
        document.body.append(this.#canvas); // html body영역의 제일 마지막에 요소를 insert한다
        this.#ctx = this.#canvas.getContext('2d'); // 그리기위한 컨텍스트 만듬

        this.#canvas.width = 1150; // 캔버스 사이즈 설정
        this.#canvas.height = 820;


        // backgrouund ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        this.#tid = null;
        this.#slotBG = new SlotBG(); // BG객체 생성
        this.#slotFrame = new SlotFrame();
        this.#slotGauge = new SlotGauge();


        // Reels ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        // 캔버스에서 인스턴스를 여러 개 만들어야한다
        this.#reels = [
            new SlotReel(170),
            new SlotReel(419),
            new SlotReel(669)
        ];  // 배열에 3개의 객체 생성 (3개의 릴 인스턴스 생성)
        
        // console.log(this.#reels.length);
        // this.#canvas.style.backgroundImage = document.getElementById("BG");
        
 
//test ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

        this.#slotRsult = new SlotResult()
        this.#passImg = document.getElementById("pass");
        this.#failImg = document.getElementById("fail");


        // spinButton ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

        this.#spinBtnClick = false;
        
        this.#spinBtn = document.getElementById("spinBtn");
        this.#spinBtn.addEventListener("click", ()=> {this.spinClick()})

        
        // stopButton ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

        this.#stopBtn3Click = false;

        this.#stopBtn1 = document.getElementById("stop1");
        this.#stopBtn1.addEventListener("click", ()=> {this.stopClick1()});

        this.#stopBtn2 = document.getElementById("stop2");
        this.#stopBtn2.addEventListener("click", ()=> {this.stopClick2()});

        this.#stopBtn3 = document.getElementById("stop3");
        this.#stopBtn3.addEventListener("click", ()=> {this.stopClick3()});
          



        this.#slotGauge.disappear = this.onDisappear.bind(this); // 5

        
        // this.#ch =false;
        // this.#slotGameover = new SlotGameoverCanvas();

    } // constrctor
    




    // 콜백
    onDisappear() // 4
    {

        this.#canvas.remove(); 
        console.log("remove");

        document.getElementById("spinBtn").style.display = "none";
        document.getElementById("stop1").style.display = "none";
        document.getElementById("stop2").style.display = "none";
        document.getElementById("stop3").style.display = "none";

        // this.#ch = true;

    }//.bind(this)

    get ch(){
        return this.#ch;
    }

    // 이하 함수영역 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 
    run() {  // 실행영역.  반복해서 호출하기 위함. 1초에 60번 64 frame과 비슷하다
        this.#tid = setInterval(() => {

            this.update();
            this.paint();

        }, 17);
    }

    update() { // 변할 때
        if(this.#spinBtnClick){
            this.#slotGauge.update();
        }
        // 속성에있는 객체의 함수를 호출 할 때 this.#slotGauge() / this,#을 활용
    }
    
    paint() {
        this.#slotBG.draw(this.#ctx); // BG객체의 draw함수 호출
        this.#slotFrame.draw(this.#ctx);
        this.#slotGauge.draw(this.#ctx);

        for (let reel of this.#reels) {// 3개의 릴을 담고 reel의 spin 호출
            reel.spin(this.#ctx);
        }

        for(let reel of this.#reels){
            reel.stop(this.#ctx)
        }

        if(this.#stopBtn3Click){
            this.sameIndex();
        }

    }// print



    spinClick(){
        console.log("x")
        for (let reel of this.#reels) {
            reel.spinCk();
            this.#stopBtn3Click = false;
        }
        this.#spinBtnClick = true;
    }


    stopClick1(){
        // spinReelsbtn();
        this.#reels[0].stopCk();
        this.#reels[0].stop(this.#ctx);

        console.log(this.#reels[0].index);
    }
    
    stopClick2(){
        this.#reels[1].stopCk();
        this.#reels[1].stop(this.#ctx);
        
        console.log(this.#reels[1].index);
    }
    
    stopClick3(){
        this.#reels[2].stopCk();
        this.#reels[2].stop(this.#ctx);

        this.#stopBtn3Click = true;
        console.log(this.#reels[2].index);
        
    }


    sameIndex() {
        if(this.#reels[0].index == this.#reels[1].index && this.#reels[1].index == this.#reels[2].index){
                this.#ctx.drawImage(this.#passImg, 400, 200, 300, 100);
                    // 잭팟시 게임오버
            } else {
                this.#ctx.drawImage(this.#failImg, 400, 200, 300, 100);
                
        }
    };
    





}// class