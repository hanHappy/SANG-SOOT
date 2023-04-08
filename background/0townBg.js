/** @type {HTMLCanvasElement} */

export default class TownBackground{
    #img;
    constructor(){
        this.#img = document.getElementById("map");
    }
    draw(ctx){
        ctx.drawImage(this.#img, 0, 0);
    }
}