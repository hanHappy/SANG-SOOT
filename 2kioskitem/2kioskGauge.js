/** @type {HTMLCanvasElement} */
export default class KioskGauge{

    #width;
    #height;
    #x;
    #y;
    #color;
    #bgWidth;

    constructor(){

        this.#width = 1050;
        this.#height = 50;
        this.#x = 50;
        this.#y = 50;
        this.#color = 'grey';
        this.#bgWidth = 1050;
    }

    draw(ctx){

        ctx.fillRect(this.#x, this.#y, this.#bgWidth, this.#height);
        ctx.fillStyle = '#00FFC7';
        
        ctx.fillRect(this.#x, this.#y, this.#width, this.#height);
        ctx.fillStyle = this.#color;


    }

    update(){ //ctx를 써야 할까?(질문)
        this.#width -= 6;
        
        if (this.#width < 0){
            this.#width = 0;            
        }

    }

    get Width(){
        return this.#width;
    }

}