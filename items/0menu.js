import Restaurant from "./0restaurant.js";
import TownCanvas from "../ui/0townCanvas.js";

export default class Menu {
    #posX;
    #posY;
    #rstIndex;
    #rstrnt;

    constructor() {
        this.#posX = Restaurant.pointX;
        this.#posY = Restaurant.pointY;
        console.log(this.#posX);
        console.log(this.#posY);
        this.#rstIndex = 0;

        // 식당
        {
            let posX = this.#posX;
            let posY = this.#posY;
    
            if (posX == 440 && posY == 316)
                this.#rstIndex = 0;
            if (posX == 647 && posY == 316)
                this.#rstIndex = 1;
            if (posX == 850 && posY == 316)
                this.#rstIndex = 2;
            if (posX == 440 && posY == 520)
                this.#rstIndex = 3;
            if (posX == 647 && posY == 520)
                this.#rstIndex = 4;
            if (posX == 850 && posY == 520)
                this.#rstIndex = 5;
        }
        
        this.#rstrnt = TownCanvas.rstrnts[this.#rstIndex];
    }

    printInfo(ctx) {
        let name = this.#rstrnt.menus.name;
        let p = this.#rstrnt.menus.price;
        let rP = this.#rstrnt.menus.ratedPrice;
        let value = this.#rstrnt.menus.value;
        let menuNums = this.#rstrnt.menus.name.length;
        ctx.font = "45px dgm";
        ctx.fillText("메뉴            가격   평가가격   가성비", 140, 230);
        for (let i = 0; i < menuNums; i++) {
            if (value[i] < 80) {
                value[i] = "                    ★";
            } else if (value[i] < 90) {
                value[i] = "               ★★";
            } else if (value[i] < 110) {
                value[i] = "           ★★★";
            } else if (value[i] < 120) {
                value[i] = "     ★★★★";
            } else {
                value[i] = "★★★★★";
            }
            ctx.font = "35px dgm";
            ctx.letterSpacing = "1px";
            ctx.fillText(name[i], 140, 65 * (i + 1) + 240);
            ctx.fillText(p[i], 511, 65 * (i + 1) + 240);
            ctx.fillText(rP[i], 710, 65 * (i + 1) + 240);
            ctx.font = "35px arial";
            ctx.letterSpacing = "-7px";
            ctx.fillText(value[i], 898, 65 * (i + 1) + 240);
        }
    }

    printRstName(ctx){
        ctx.fillText(`${this.#rstrnt.name}입니다!`, 300, 681);
    }

}