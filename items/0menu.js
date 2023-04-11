import Restaurant from "./0restaurant.js";
import TownCanvas from "../ui/0townCanvas.js";

export default class Menu {
    #ctx;
    #name;
    #price;
    #ratedPrice;
    #value;
    #menuNums;
    #btns;

    constructor(ctx) {
        this.#ctx = ctx;
        this.#name = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.name;
        this.#price = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.price;
        this.#ratedPrice = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.ratedPrice;
        this.#value = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.value;
        this.#menuNums = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.name.length;
        this.#btns = [];
        for(let i = 0; i < this.#menuNums; i++){
            this.#btns[i] = document.getElementById(`menuBtn${i}`);
            this.#btns[i].addEventListener('click', () => {
                this.pickMenu(i);
            })
        }
    }

    pickMenu(i){
        this.#ctx.clearRect(645, 130, 350, 40);
        this.#ctx.font = "35px dgm";
        this.#ctx.letterSpacing = "1px";
        this.#ctx.fillText(this.#name[i], 670, 161);
    }

    // 메뉴 출력 --------------------------------------------------------
    printInfo(ctx) {
        let name = this.#name;
        let p = this.#price;
        let rP = this.#ratedPrice;
        let value = this.#value;
        let menuNums = this.#name.length;
        // 가성비 -> ★로 변환
        // 급간 : 판매 가격의 10%
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
            // 메뉴명
            ctx.fillText(name[i], 170, 65 * (i + 1) + 240);
            // 판매가격
            ctx.fillText(p[i], 544, 65 * (i + 1) + 240);
            // 평가 가격
            ctx.fillText(rP[i], 747, 65 * (i + 1) + 240);
            ctx.font = "35px arial";
            ctx.letterSpacing = "-7px";
            // 가성비 (★)
            ctx.fillText(value[i], 933, 65 * (i + 1) + 240);
        }
        // 버튼 활성화
        for(let i = 0; i < menuNums; i++){
            this.#btns[i].style.display = "block";
        }
    }

}