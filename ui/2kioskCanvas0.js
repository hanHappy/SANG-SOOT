import KioskBG from "../2kioskitem/2kioskBG.js";

export default class KioskCanvas0 {

    #img;
    #x;
    #y;
    #canvas;
    #ctx;

    #startBtn;
    #started;

    // #submitBtn;
    // #ckBoxes

    constructor() {

        this.#canvas = document.createElement('canvas');
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext('2d');
        

        this.#img = document.getElementById('startkiosk');
        this.#x = 0;
        this.#y = 0;

        this.#img.width = 1150;
        this.#img.height = 820;

        this.#startBtn = document.getElementById('start-btn');
        this.#startBtn.style.display = "block";
        // this.#started = false;
    }

    get canvas(){
        return this.#canvas;
    }

    draw() {
        let img = this.#img;
        let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
        let y = this.#y;
        let width = this.#img.width;
        let height = this.#img.height;
        let ctx = this.#ctx;
        ctx.drawImage(img, x, y, width, height);
    }



}