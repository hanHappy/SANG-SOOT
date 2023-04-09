export default class RestaurantCanvas {
    #canvas;
    #ctx;
    #index;
    #scenes;
    #posX;
    #posY;
    #w;
    #h;
    
    static x;
    static y;
    
    constructor() {

        // canvas, constext -----------------------------------------------
        this.#canvas = document.createElement("canvas");
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext("2d");
        this.#posX = 0;
        this.#posY = 0;
        this.#w = 1150;
        this.#h = 820;


        // click ---------------------------------------------------------
        this.#canvas.onclick = this.clickHandler.bind(this);
        this.#index = 0;

        // images --------------------------------------------------------
        this.#scenes = new Array(2);
        for(let i = 0; i<this.#scenes.length; i++){
            this.#scenes[i] = document.getElementById(`inRstrnt${i}`);
        }

        // 어서오세요~
        this.#ctx.drawImage(this.#scenes[this.#index], this.#posX, this.#posY, this.#w, this.#h);
        this.#ctx.font = "30px dgm";
        this.#ctx.fillText()

    } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    clickHandler(){
        let index = this.#index;
        index++;
        let ctx = this.#ctx;
        let scene = this.#scenes[index];
        let x = this.#posX;
        let y = this.#posY;
        let w = this.#w;
        let h = this.#h;
        ctx.drawImage(scene, x, y, w, h);

    } // switch

} // class