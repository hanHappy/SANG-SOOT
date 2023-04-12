import KioskBG from "../2kioskitem/2kioskBG.js";

export default class KioskResult{

    #tid;
    #canvas;
    #ctx;
    #x;
    #y;
    #w;
    #h;

    #kioskBG;

    #win;
    #winImg;
    #loseImg;
    #winsound;
    #failsound;

    constructor(){

        this.#canvas = document.createElement('canvas');
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext('2d');
        this.#tid = null;

        this.#kioskBG = new KioskBG();

        this.#x = 361;
        this.#y = 200;

        this.#winImg = document.getElementById('win');
        this.#winImg.width = 410;
        this.#winImg.height = 322;

        this.#loseImg = document.getElementById('lose');
        this.#loseImg.width = 410;
        this.#loseImg.height = 322;

        this.#win = true;

        this.#winsound = document.getElementById('winsound');
        this.#failsound = document.getElementById('failsound');
    }

    draw(ctx){
        let img = this.#winImg;
        let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
        let y = this.#y;
        if(this.#win){
            let width = this.#winImg.width;
            let height = this.#winImg.height;
            ctx.drawImage(img, x, y, width, height);
        } else {
            let width = this.#loseImg.width;
            let height = this.#loseImg.height;
            ctx.drawImage(img, x, y, width, height);
        }
        
    }

    checkResult(result){
        if(result){
            this.#win = true
            document.getElementById('win').style.display = "block";
            this.#winsound.play();

        } else{
            this.#win = false
            document.getElementById('lose').style.display = "block";
            this.#failsound.play();
        }
    }



}