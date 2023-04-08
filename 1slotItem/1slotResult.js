export default class SlotResult {
#x;
#y;
// #width;
// #height;
#passImg;
#failImg;
#img;


    constructor(){
        this.#x = 10;
        this.#y = 10;
        this.#passImg = document.getElementById("pass");
        this.#failImg = document.getElementById("fail");

        this.#passImg.width = 300;
        this.#passImg.height = 100;
        this.#failImg.width = 300;
        this.#failImg.height = 100;
        

    }

    passDraw(ctx){
        let x = this.#x;
        let y = this.#y;
        let width = this.#passImg.width;
        let height = this.#passImg.height;
        let img = this.#passImg;

        ctx.drawImage(img, x, y, width, height);
    }

    failDraw(ctx){
        let x = this.#x;
        let y = this.#y;
        let width = this.#failImg.width;
        let height = this.#failImg.height;
        let img = this.#failImg;

        ctx.drawImage(img, x, y, width, height);
    }

}