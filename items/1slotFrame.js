export default class SlotFrame{
    #img;
    #x;
    #y;

    constructor(){
        this.#img = document.getElementById("frame");
        this.#x = 78;
        this.#y = 150;

        this.#img.width = 1000;
        this.#img.height = 400;
    }

    draw(ctx){
        let x = this.#x;
        let y = this.#y;
        let img = this.#img;
        let width = this.#img.width;
        let height = this.#img.height;

        ctx.drawImage(img, x, y, width, height);
    }
    
}