import Restaurant from "./0restaurant.js";
import TownCanvas from "../ui/0townCanvas.js";
import Data from "./data.js";

export default class Menu {
    #ctx;
    #names;
    #prices;
    #ratedPrices;
    #values;
    #menuNums;
    #rstrntIndex;
    #menuIndex;
    #btns;

    static menuIndex;

    constructor(ctx) {
        this.#ctx = ctx;
        this.#menuIndex = 0;
        this.#names = TownCanvas.rstrnts[Data.rstrntIndex].menus.name;
        this.#prices = TownCanvas.rstrnts[Data.rstrntIndex].menus.price;
        this.#ratedPrices = TownCanvas.rstrnts[Data.rstrntIndex].menus.ratedPrice;
        this.#values = TownCanvas.rstrnts[Data.rstrntIndex].menus.value;
        this.#menuNums = TownCanvas.rstrnts[Data.rstrntIndex].menus.name.length;
        this.#btns = [];
        for(let i = 0; i < this.#menuNums; i++){
            this.#btns[i] = document.getElementById(`menuBtn${i}`);
            this.#btns[i].addEventListener('click', () => {
                this.pickMenu(i);
            })
        }
    }

    set ratedPrice(rp){
        this.#ratedPrices[this.#menuIndex] = (this.#ratedPrices + rp)/2;
    }

    get menuIndex(){
        return this.#menuIndex;
    }

    get name(){
        return this.#names;
    }
    get price(){
        return this.#prices;
    }
    get ratedPrice(){
        return this.#ratedPrices[this.#menuIndex];
    }
    get value(){
        return this.#values[this.#menuIndex];
    }

    removeBtn(){
        for(let i in this.#btns){
            this.#btns[i].style.display = "none";
        }
    }

    pickMenu(i){
        this.#ctx.clearRect(645, 130, 350, 40);
        this.#ctx.font = "35px dgm";
        this.#ctx.letterSpacing = "1px";
        this.#ctx.fillText(TownCanvas.rstrnts[Data.rstrntIndex].menus.name[i], 670, 161);
        Menu.menuIndex = i;
    }

    // 메뉴 출력 --------------------------------------------------------
    printInfo(ctx) {
        let name = TownCanvas.rstrnts[Data.rstrntIndex].menus.name;
        let p = TownCanvas.rstrnts[Data.rstrntIndex].menus.price;
        let rP = TownCanvas.rstrnts[Data.rstrntIndex].menus.ratedPrice;
        let value = TownCanvas.rstrnts[Data.rstrntIndex].menus.value;
        let menuNums = TownCanvas.rstrnts[Data.rstrntIndex].menus.name.length;
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