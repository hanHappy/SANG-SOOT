export default class KioskCanvas1 {

    #img;
    #x;
    #y;
    #canvas;
    #ctx;
    #nextBtn;
    #nexted;
    #clicksound;
    #nextCanvas;

    constructor(callback) {

        this.#canvas = document.createElement('canvas');
        document.body.append(this.#canvas);
        this.#canvas.style.display = "none";
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext('2d');
        this.#img = document.getElementById('gamerule');
        this.#x = 0;
        this.#y = 0;
        this.#img.width = 1150;
        this.#img.height = 820;
        this.#nextBtn = document.getElementById('next-btn');
        this.#clicksound = document.getElementById('clicksound');
        this.#nextCanvas = callback;
    }

    get canvas(){
        return this.#canvas;
    }

    draw() {
        this.#clicksound.play();
        let btn = document.getElementById('start-btn');
        btn.style.display = "block";
        btn.addEventListener('click', () => {
            btn.style.display = "none";
            this.#nextCanvas(this.#canvas);
        })
        let img = this.#img;
        let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
        let y = this.#y;
        let width = this.#img.width;
        let height = this.#img.height;
        let ctx = this.#ctx;
        ctx.drawImage(img, x, y, width, height);
    }

}