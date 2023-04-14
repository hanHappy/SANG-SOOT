import Data from "./data.js";

export default class KioskResult{

    #tid;
    #canvas;
    #ctx;
    #x;
    #y;
    #w;
    #h;

    #kioskBG;

    // #img;

    #win;
    #winImg;
    #loseImg;
    #winsound;
    #failsound;
    #end;
    #nextCanvas;

    #lastBtn;
    #lasted;

    constructor(callback){

        this.#winImg = document.getElementById('hcwin');
        this.#winImg.width = 1150;
        this.#winImg.height = 820;

        this.#loseImg = document.getElementById('hclose');
        this.#loseImg.width = 1150;
        this.#loseImg.height = 820;

        this.#win = true;

        this.#winsound = document.getElementById('winsound');
        this.#failsound = document.getElementById('failsound');
  
        this.#lastBtn = document.getElementById('last-btn');
        this.#lastBtn.onclick = this.onClickHandler.bind(this);
        this.#lasted = false;

        this.#end = false;
        this.#nextCanvas = callback;
   
    }

    onClickHandler(){
        this.#winImg.style.display = "none";
        this.#loseImg.style.display = "none";
        this.#lastBtn.style.display = "none";
        this.#nextCanvas();
    }

    get end(){
        return this.#end;
    }

    draw(ctx){
        this.#lastBtn.style.display = "block";
        this.#lastBtn.addEventListener('click', ()=>{
            this.#end = true;
        })
        // let img = this.#winImg;
        let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
        let y = this.#y;

        // ctx.drawImage(this.#img, 0, 0, 1150, 820);

        if(this.#win){
            Data.gameResult++;
            let width = this.#winImg.width;
            let height = this.#winImg.height;
            ctx.drawImage(this.#winImg, x, y, width, height);
        } else {
            let width = this.#loseImg.width;
            let height = this.#loseImg.height;
            ctx.drawImage(this.#loseImg, x, y, width, height);
        }
    }

    checkResult(result){
        if(result){
            this.#win = true;
            Data.gameResult++;

            document.getElementById('hcwin').style.display = "block";
            this.#winsound.play();

        } else{
            this.#win = false
            document.getElementById('hclose').style.display = "block";
            this.#failsound.play();
        }
    }
}