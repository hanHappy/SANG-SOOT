import Restaurant from "./0restaurant.js";
import TownCanvas from "../ui/0townCanvas.js";

export default class Menu {
    #name;
    #price;
    #ratedPrice;
    #value;
    #menuNums;
    #btns;

    constructor() {
        this.#name = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.name;
        this.#price = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.price;
        this.#ratedPrice = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.ratedPrice;
        this.#value = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.value;
        this.#menuNums = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.name.length;
        this.#btns = [];
        for(let i = 0; i < 7; i++){
            this.#btns[i] = document.getElementById(`menuBtn${i}`);
        }
        console.log(this.#btns);
    }

    // 메뉴 출력 --------------------------------------------------------
    printInfo(ctx) {
        let name = this.#name;
        let p = this.#price;
        let rP = this.#ratedPrice;
        let value = this.#value;
        let menuNums = this.#name.length;
        ctx.font = "45px dgm";
        ctx.fillText("메뉴            가격   평가가격   가성비", 170, 240);
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
            ctx.fillText(p[i], 541, 65 * (i + 1) + 240);
            // 평가 가격
            ctx.fillText(rP[i], 740, 65 * (i + 1) + 240);
            ctx.font = "35px arial";
            ctx.letterSpacing = "-7px";
            // 가성비 (★)
            ctx.fillText(value[i], 928, 65 * (i + 1) + 240);
        }
        // 버튼 활성화
        for(let i = 0; i < menuNums; i++){
            this.#btns[i].style.display = "block";
        }
    }

}