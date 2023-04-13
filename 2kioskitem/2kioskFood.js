/** @type {HTMLCanvasElement} */

export default class KioskFood{

    #img;
    #x;
    #y;

    constructor(){

        this.#img = document.getElementById('food');
        this.#x = 361;
        this.#y = 200;

        this.#img.width = 410;
        this.#img.height = 322;
    }

    draw(ctx){
        let img = this.#img;
        let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
        let y = this.#y;
        let width = this.#img.width;
        let height = this.#img.height;
        ctx.drawImage(img, x, y, width, height);

    }
}