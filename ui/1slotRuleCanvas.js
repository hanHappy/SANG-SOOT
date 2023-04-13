export default class SlotRuleCanvas {
    #canvas;
    #ctx;
    #img0;
    #img1;
    #x0;
    #y0;
    #x1;
    #y1
    #tid;
    #conBtn;

    constructor() {

        this.#canvas = document.createElement("canvas");
        document.body.append(this.#canvas);
        this.#ctx = this.#canvas.getContext("2d");

        this.#canvas.width = 1150;
        this.#canvas.height = 820;

        this.#img0 = document.getElementById("slotRule0");
        this.#x0 = 0;
        this.#y0 = 0;
        this.#img0.width = 1150;
        this.#img0.height = 820;

        this.#img1 = document.getElementById("slotRule1");
        this.#x1 = 0;
        this.#y1 = 0;
        this.#img1.width = 1150;
        this.#img1.height = 820;

        
    }

    get canvas(){
        return this.#canvas;
    }


    draw0() {
        let img = this.#img0;
        let x = this.#x0;
        let y = this.#y0;
        let w = this.#img0.width;
        let h = this.#img0.height;

        this.#ctx.drawImage(img, x, y, w, h);
    }


    draw1() {
        let img = this.#img1;
        let x = this.#x1;
        let y = this.#y1;
        let w = this.#img1.width;
        let h = this.#img1.height;

        this.#ctx.drawImage(img, x, y, w, h);
    }

    run() {
        this.#tid = setInterval(() => {

            this.draw0();
            setTimeout(() => {
                this.draw1();
            }, 100)

        }, 200);
    }



}