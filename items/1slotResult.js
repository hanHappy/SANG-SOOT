export default class SlotResult {
#x;
#y;
#width;
#height;
#passImg;
#failImg;
#img;


    constructor(){
        this.#x = 10;
        this.#y = 10;
        this.#passImg = document.getElementById("pass");
        this.#failImg = document.getElementById("fail");

        this.#width = 300;
        this.#height = 100;

        

    }

    passDraw(ctx){
        let x = this.#x;
        let y = this.#y;
        let width = this.#width;
        let height = this.#height;
        let img = this.#passImg;

        ctx.drawImage(img, x, y, width, height);
    }

    failDraw(ctx){
        let x = this.#x;
        let y = this.#y;
        let width = this.#width;
        let height = this.height;
        let img = this.#failImg;

        ctx.drawImage(img, x, y, width, height);
    }

}