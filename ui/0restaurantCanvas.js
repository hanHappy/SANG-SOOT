import TownCanvas from "./0townCanvas.js";
import Menu from "../items/0menu.js";

export default class RestaurantCanvas {
    #canvas;
    #ctx;
    #index;
    #scenes;
    #sceneNums;

    #menu;

    #x;
    #y;
    #w;
    #h;

    static x;
    static y;

    constructor() {

        // canvas, constext -----------------------------------------------
        this.#canvas = document.createElement("canvas");
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext("2d");

        this.#x = 0;
        this.#y = 0;
        this.#w = 1150;
        this.#h = 820;

        // Menu ---------------------------------------------------------
        this.#menu = new Menu();

        // click ---------------------------------------------------------
        this.#canvas.onclick = this.clickHandler.bind(this);
        this.#index = 0;

        // images --------------------------------------------------------
        this.#sceneNums = 2; // ★★★★★★★★★★★★★★★★★★★★★★★★★
        this.#scenes = new Array(this.#sceneNums);
        for (let i = 0; i < this.#scenes.length; i++) {
            this.#scenes[i] = document.getElementById(`inRstrnt${i}`);
        }
        
    } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    
    draw(){
        // 어서오세요~
        this.#ctx.drawImage(this.#scenes[this.#index], this.#x, this.#y, this.#w, this.#h);
        this.#ctx.font = "37px dgm";
        this.#ctx.fillText(`${this.#rstrnt.name}입니다!`, 300, 681)
    }

    clickHandler() {
        this.#index++;
        let index = this.#index;
        let ctx = this.#ctx;
        let scene = this.#scenes[index];
        let x = this.#x;
        let y = this.#y;
        let w = this.#w;
        let h = this.#h;
        ctx.drawImage(scene, x, y, w, h);

        if (index == 1) {
            this.#menu.printInfo(this.#ctx);
        }

    } // click handler

    get canvas() {
        return this.#canvas;
    }

} // class