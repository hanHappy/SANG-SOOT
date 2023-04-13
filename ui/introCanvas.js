export default class IntroCanvas {

    #nextCanvas;
    #canvas;
    #ctx;
    #x;
    #y;
    #w;
    #h;
    #sceneIndex;
    #scenes

    constructor(callback) {
        // canvas, constext -----------------------------------------------
        this.#canvas = document.createElement("canvas");
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext("2d");
        this.#nextCanvas = callback;

        // image
        this.#x = 0;
        this.#y = 0;
        this.#w = 1150;
        this.#h = 820;

        // click ---------------------------------------------------------
        this.#sceneIndex = 0;
        this.#canvas.onclick = this.clickHandler.bind(this);

        // image load
        this.#scenes = new Array(5);
        for (let i = 0; i < this.#scenes.length; i++) {
            this.#scenes[i] = document.getElementById(`intro${i}`);
          }
    }

    // 클릭할 때마다 다음 scene으로 넘어감
    clickHandler() {
        this.#sceneIndex++;
        if(this.#sceneIndex == 5){
            this.#nextCanvas(this.#canvas);
            return;
        }
        this.draw();
    } // click handler

    firstScene() {
        this.draw();
    }

    draw() {
        let scene = this.#scenes[this.#sceneIndex];
        let x = this.#x;
        let y = this.#y;
        let w = this.#w;
        let h = this.#h;
        this.#ctx.drawImage(scene, x, y, w, h);
    }

    get canvas() {
        return this.#canvas;
    }
}