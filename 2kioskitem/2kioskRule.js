/** @type {HTMLCanvasElement} */

export default class KioskRule{

    #img;
    #x;
    #y;


    constructor(){

        //속성 영역
        this.#img = document.getElementById('gamerule');
        this.#x = 0;
        this.#y = 0;

        this.#img.width = 1150;
        this.#img.height = 820;

    }

    draw(ctx){
        let img = this.#img;
        let x = this.#x;
        let y = this.#y;
        let width = this.#img.width;
        let height = this.#img.height;
        ctx.drawImage(img, x, y, width, height);
    }


}