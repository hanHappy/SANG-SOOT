export default class SlotBG{
    #img;
    #x;
    #y;

    constructor(){
        this.#x = 0;
        this.#y = 0;
        this.#img = document.getElementById("BG");
        
        this.#img.width = 1150;
        this.#img.height = 820;
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