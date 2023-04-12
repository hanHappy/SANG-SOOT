import TownCanvas from "../ui/0townCanvas.js";

export default class Restaurant {
    #name;
    #img;
    #x;
    #y;
    #w;
    #h;
    #infoImg;
    #infoX;
    #infoY;
    #infoW;
    #infoH;
    #menus;
    #mouseover;

    static rstrntIndex = 0;

    constructor(name, i, j, x = 0, y = 0) {
        // 식당 정보
        this.#name = name;
        this.#img = document.getElementById(`rstrnt${i}`);
        this.#x = x;
        this.#y = y;
        this.#w = 180;
        this.#h = 126;
        // 정보 말풍선
        this.#infoImg = document.getElementById(`rstrntInfo${j}`);
        this.#infoX = x;
        this.#infoY = y - 160;
        this.#infoW = 180;
        this.#infoH = 180;
        // 메뉴
        this.#menus = {
            name: [],
            price: [],
            ratedPrice: [],
            value: []
        };

        // mouseover
        this.#mouseover = false;
    }
    // 식당 그리기
    draw(ctx) {
        let img = this.#img;
        let x = this.#x;
        let y = this.#y;
        let w = this.#w;
        let h = this.#h;
        ctx.drawImage(img, x, y, w, h);
    }
    // 마우스오버 -> 식당 정보
    drawInfo(ctx) {
        if (this.#mouseover) {
            // 말풍선
            let img = this.#infoImg;
            let x = this.#infoX
            let y = this.#infoY;
            let w = this.#infoW;
            let h = this.#infoH;
            ctx.drawImage(img, x, y, w, h);
            // 식당 정보
            let menus = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus;
            let avgPrice = 0;
            let avgRatedPrice = 0;
            // 판매가격
            for (let price of menus.price) {
                avgPrice += Math.floor(price / menus.price.length);
            }
            // 평가가격
            for (let rp of menus.ratedPrice) {
                avgRatedPrice += Math.floor(rp / menus.ratedPrice.length);
            }
            let value = (avgRatedPrice / avgPrice) * 100;
            // 가성비 -> ★로 변환
            if (value < 80) {
                value = "                    ★";
            } else if (value < 90) {
                value = "               ★★";
            } else if (value < 110) {
                value = "           ★★★";
            } else if (value < 120) {
                value = "     ★★★★";
            } else {
                value = "★★★★★";
            }
            ctx.font = "18px dgm";
            ctx.letterSpacing = "0px";
            ctx.fillText(`평균가격 : ${avgPrice}원`, x + 15, y + 52);
            ctx.fillText(`평가가격 : ${avgPrice}원`, x + 15, y + 80);
            ctx.fillText(`가성비   : `, x + 15, y + 108);
            ctx.font = "18px arial";
            ctx.letterSpacing = "-5px";
            ctx.fillText(value, x + 110, y + 108);
        }
    }

    mouseover() {
        this.#mouseover = true;
    }
    mouseleave() {
        this.#mouseover = false;
    }

    get name() {
        return this.#name;
    }
    get menus() {
        return this.#menus;
    }

    get info() {
        return this.#infoImg;
    }

    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }
    get w() {
        return this.#w;
    }
    get h() {
        return this.#h;
    }

}