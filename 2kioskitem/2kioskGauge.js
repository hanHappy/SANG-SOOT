/** @type {HTMLCanvasElement} */

export default class KioskGauge{

    #width;
    #height;
    #x;
    #y;
    #color;

    constructor(){

        this.#width = 1050;
        this.#height = 50;
        this.#x = 50;
        this.#y = 50;
        this.#color = 'red';

    }

    draw(ctx){
        let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
        let y = this.#y;
        let width = this.#width;
        let height = this.#height;
        let color = this.#color;
        ctx.fillRect(x, y, width, height);
        ctx.fillStyle = color;
        ctx.strokeRect(x, y, 1050, 50);
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
    }

    update(뭐든써도상관없지롱안써줄뿐이지롱){ //ctx를 써야 할까?(질문)
        this.#width -= 6;
        if (this.#width < 0){
            this.#width = 0;
        }

    }

}