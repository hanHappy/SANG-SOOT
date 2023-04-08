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
    #SlotReels;
    #reelsImgs
    #img;
    #reels;
    #stopBtn1;
    #stopBtn2;
    #stopBtn3;
    #reelsStopped;
    #slotRsult
    #passImg;
    #failImg;
    #stopBtn;
    #spinBtn;
    

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

        
        this.#spinBtn = document.getElementById("spinBtn");
        this.#spinBtn.addEventListener("click", ()=> {this.spinClick()})

        
        // stopButton ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

        
        this.#stopBtn1 = document.getElementById("stop1");
        this.#stopBtn1.addEventListener("click", ()=> {this.stopClick0()});

        this.#stopBtn2 = document.getElementById("stop2");
        this.#stopBtn2.addEventListener("click", ()=> {this.stopClick1()});

        this.#stopBtn3 = document.getElementById("stop3");
        this.#stopBtn3.addEventListener("click", ()=> {this.stopClick2()});


    } // constrctor




    // 이하 함수영역 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 
    run() {  // 실행영역.  반복해서 호출하기 위함. 1초에 60번 64 frame과 비슷하다
        this.#tid = setInterval(() => {

            this.update();
            this.paint();

        }, 17);
    }

    update() { // 변할 때
            this.#slotGauge.update();
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

            


    }// print

    spinClick(){
        console.log("x")
        for (let reel of this.#reels) {// 3개의 릴을 담고 reel의 spin 호출
            reel.spinCk();
        }
    }


    stopClick0(){
        // spinReelsbtn();
            this.#reels[0].stopCk();
            this.#reels[0].stop(this.#ctx);
    }

    stopClick1(){
        this.#reels[1].stopCk();
        this.#reels[1].stop(this.#ctx)
    }

    stopClick2(){
        this.#reels[2].stopCk();
        this.#reels[2].stop(this.#ctx);
    }

            
            // setTimeout(() => {
            // }, 2000);
        // }
    // } // paint()


    

}// class




        // stopBtn()
        // stopBtn(){
        //     console.log("stopBtn");
        //     if(this.#stopBtn1 == true){
        //         // this.#spinBtn = false;
        //         this.#reels[0].stop(this.#ctx);
        //     }
            
        //     if(this.#stopBtn2 == true){
        //         this.#reels[1].stop(this.#ctx);
        //     }
            
        //     if(this.#stopBtn3 == true){
        //         this.#reels[2].stop(this.#ctx);
        //         this.#spinBtn = false;
                



        //     if(this.#reels[0] == this.#reels[1] && this.#reels[1] == this.#reels[2]){
        //         // this.#slotRsult.passDraw(this.ctx);
        //         this.#ctx.drawImage(this.#passImg, 100, 100, 300, 100);
        //         } else {
        //             // this.#slotRsult.failDraw(this.ctx);
        //             this.#ctx.drawImage(this.#failImg, 100, 100, 300, 100);
        //         }
        //     }
        // }
