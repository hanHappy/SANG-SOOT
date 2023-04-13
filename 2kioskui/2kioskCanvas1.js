export default class KioskCanvas1 {

    #img;
    #x;
    #y;
    #canvas;
    #ctx;

    #nextBtn;
    #nexted;

    constructor() {

        this.#canvas = document.createElement('canvas');
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext('2d');
        

        this.#img = document.getElementById('gamerule');
        this.#x = 0;
        this.#y = 0;

        this.#img.width = 1150;
        this.#img.height = 820;

        // this.#submitBtn = document.getElementById('submit-btn');
        // this.#submitBtn.style.display = "none";
        this.#nextBtn = document.getElementById('next-btn');

        // this.#startBtn = document.getElementById('start-btn');
        // this.#startBtn.addEventListener('click', (e) => {this.click(e)});
        // this.#ckBoxes = document.getElementById('ingredient-list');
        // this.#ckBoxes.style.display = "none";
        this.#nexted = false;
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

        this.#nextBtn.style.display = "block";
    }

    // click(){
    //     this.#nexted = true;
    //     this.#nextBtn.style.display = "none";

    // }

}