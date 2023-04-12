// import SlotResult from "../1slotItem/1slotResult.js";
import SlotReel from "../items/1slotReel.js";
import SlotGauge from "../items/1slotGauge.js";
import SlotFrame from "../items/1slotFrame.js";
import SlotBG from "../items/1slotBG.js";
export default class SlotGameCanvas {
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
    #jackpotImg;
    #failImg;
    #stopBtn3Click;
    #removeCanvas;//
    #strGauge;
    #spinBtnClick;
    #jackpot;
    #jackSE;
    #failSE;
    
    #onJackpot;
    #onFail;

    // canvas ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    constructor(onGameOver) { // 생성자영역 >> 클래스의 속성들이 위치 // this , #
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

        // this.#slotRsult = new SlotResult()
        this.#jackpotImg = document.getElementById("jackpot");
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
          
        //콜백함수 호출
        this.#slotGauge.disappear = onGameOver; // 5     onDisappear().bind(this)
        this.#jackpot = onGameOver;


        // S.E.
        this.#jackSE = document.getElementById("jackSE");
        this.#failSE = document.getElementById("failSE");

        // this.#onFail = false;
        this.#onFail = false;
        this.#onJackpot = false;

        
    } // constrctor


    remove(){
        this.#canvas.remove();
    }

    get canvas(){
        return this.#canvas;
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

        // if(!onFail){
        //     return;
        // }

    }// print
    
    
    
    spinClick(){
        console.log("x")
        document.getElementById("spinSE");
        spinSE.play();
        for (let reel of this.#reels) {
            reel.spinCk();
            this.#stopBtn3Click = false;
        }
        this.#spinBtnClick = true;
    }

    stopClick1(){
        // spinReelsbtn();
        document.getElementById("stopSE");
        stopSE.play();
        this.#reels[0].stopCk();
        this.#reels[0].stop(this.#ctx);
        
        console.log(this.#reels[0].index);
    }
    
    stopClick2(){
        document.getElementById("stopSE");
        stopSE.play();
        this.#reels[1].stopCk();
        this.#reels[1].stop(this.#ctx);
        
        console.log(this.#reels[1].index);
    }
    
    stopClick3(){
        document.getElementById("stopSE");
        stopSE.play();
        spinSE.pause();
        this.#reels[2].stopCk();
        this.#reels[2].stop(this.#ctx);

        this.#stopBtn3Click = true;
        console.log(this.#reels[2].index);
        
    }
    

    // 잭팟 혹은 게임초과 시 게임오버 페이지로 이동
    sameIndex() {
        if(this.#reels[0].index == this.#reels[1].index && this.#reels[1].index == this.#reels[2].index){
                // this.#ctx.drawImage(this.#jackpotImg, 110, -272, 1000, 800);
                this.#jackSE.play();
                this.#ctx.drawImage(this.#jackpotImg, -330, -55, 1600, 900);
                setTimeout(() => {
                        this.#jackpot();
                    }, 3000)
                } else {
                    this.#failSE.play();
                    this.#ctx.drawImage(this.#failImg, -280, -230, 1600, 1230);
                    
                }
            };
            
            // setTimeout(() => { this.onFailImg() }, 500)
            
            // onFailImg(){
            //     this.#ctx.drawImage(this.#failImg, -280, -230, 1600, 1230);
        // };



}// class



    // 콜백
    // onDisappear() // 4
    // {

    //     this.#canvas.remove(); 
    //     console.log("remove");

    //     document.getElementById("spinBtn").style.display = "none";
    //     document.getElementById("stop1").style.display = "none";
    //     document.getElementById("stop2").style.display = "none";
    //     document.getElementById("stop3").style.display = "none";

    //     // this.#ch = true;

    // }//.bind(this)