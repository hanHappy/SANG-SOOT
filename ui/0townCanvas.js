import RestaurantCanvas from "./0restaurantCanvas.js";
import TownBackground from "../background/0townBG.js";
import Restaurant from "../items/0restaurant.js";
import User from "../items/0user.js";

export default class TownCanvas {
    #tid;
    #canvas;
    #ctx;
    #background;
    #rstrntNums;
    #rstrnts;
    #rstrntImg;
    #user;
    #arrived;

    static rstrnts = [
        new Restaurant("짜장하회", 0, 0, 350, 190),
        new Restaurant("후딱이다", 1, 0, 557, 190),
        new Restaurant("토끼의부엌", 2, 0, 760, 190),
        new Restaurant("우포식당", 3, 0, 350, 520),
        new Restaurant("동강학식", 4, 0, 557, 520),
        new Restaurant("영남식당", 5, 0, 760, 520)
    ]

    constructor() {
        // timer ID
        this.#tid = null;

        // canvas, constext -----------------------------------------------
        this.#canvas = document.createElement("canvas");
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext("2d");

        // Background -----------------------------------------------------
        this.#background = new TownBackground(this.#ctx);

        // 식당 및 메뉴 --------------------------------------------------------
        // 짜장상회
        {
            let menus = TownCanvas.rstrnts[0].menus;
            menus.name.push("짜장면", "짬뽕", "볶음밥", "짬짜면", "해물볶음짬뽕", "쟁반짜장", "우동");
            menus.price.push(5000, 6000, 6500, 7500, 8500, 8500, 6000);
            menus.ratedPrice.push(5000, 6000, 6500, 7500, 8500, 8500, 6000);
        }
        // 뜸들이다
        {
            let menus = TownCanvas.rstrnts[1].menus;
            menus.name.push("소세지로제덮밥", "도란도란", "삼겹살카레", "소세지카레", "어깨살간장덮밥", "간장계란밥", "매콤꼬막덮밥");
            menus.price.push(8400, 7900, 7900, 8400, 7400, 4400, 8900);
            menus.ratedPrice.push(8400, 7900, 7900, 8400, 7400, 4400, 8900);
        }
        // 거북이의주방
        {
            let menus = TownCanvas.rstrnts[2].menus;
            menus.name.push("차돌뚝배기카레", "돈까스카레", "모듬버섯카레", "소세지카레", "치킨가라아게카레", "왕새우카레", "고로케카레");
            menus.price.push(11000, 10900, 8500, 9900, 9900, 9900, 9900);
            menus.ratedPrice.push(11000, 10900, 8500, 9900, 9900, 9900, 9900);
        }
        // 마포쌈밥식당
        {
            let menus = TownCanvas.rstrnts[3].menus;
            menus.name.push("쌈밥정식");
            menus.price.push(9000);
            menus.ratedPrice.push(9000);
        }
        // 동강학식
        {
            let menus = TownCanvas.rstrnts[4].menus;
            menus.name.push("떡볶이", "돈까스", "우정라면", "자율한식");
            menus.price.push(5000, 4800, 3500, 5500);
            menus.ratedPrice.push(5000, 4800, 3500, 5500);
        }
        // 영남식당
        {
            let menus = TownCanvas.rstrnts[5].menus;
            menus.name.push("제육볶음", "부대찌개", "뚝불", "김치찌개", "순두부", "떡만두국");
            menus.price.push(7000, 7000, 7000, 7000, 7000, 7000);
            menus.ratedPrice.push(7000, 7000, 7000, 7000, 7000, 7000);
        }
        // 각 식당 가성비 계산
        for (let j = 0; j < 6; j++) {
            let rstrnt = TownCanvas.rstrnts[j];
            let menuNums = rstrnt.menus.name.length;
            let menusValue = rstrnt.menus.value;
            for (let i = 0; i < menuNums; i++) {
                let p = rstrnt.menus.price[i];
                let rp = rstrnt.menus.ratedPrice[i];
                let value = Math.floor(rp / p * 100);
                menusValue.push(value);
            }
        }

        // User
        this.#user = new User();
        this.#arrived = this.#user.arrived;

        // click
        this.#canvas.addEventListener('click', (e) => { this.click(e) });

        // mousemove
        this.#canvas.addEventListener('mousemove', (e) => { this.mousemove(e) });

    } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    // 마우스오버 - 식당 정보
    mousemove(e) {
        let mx = e.offsetX;
        let my = e.offsetY;
        for (let rstrnt of TownCanvas.rstrnts) {
            if (rstrnt.x <= mx && mx <= rstrnt.x + rstrnt.w
                && rstrnt.y <= my && my <= rstrnt.y + rstrnt.h && my < 400) {
                mx = (rstrnt.x + (rstrnt.w / 2));
                my = (rstrnt.y + rstrnt.h);
                this.updateInfo(mx, my);
                rstrnt.mouseover();
            } else if (rstrnt.x <= mx && mx <= rstrnt.x + rstrnt.w
                && rstrnt.y <= my && my <= rstrnt.y + rstrnt.h && my > 400) {
                let mx = (rstrnt.x + (rstrnt.w / 2));
                let my = rstrnt.y;
                this.updateInfo(mx, my);
                rstrnt.mouseover();
            } else
                rstrnt.mouseleave();
        }
    }
    // 클릭 - 유저 이동 ----------------------------------------------------------
    click(e) {
        let user = this.#user;
        let mx = e.offsetX;
        let my = e.offsetY;
        // 개별 식당 좌표 내 클릭 시
        for (let rstrnt of TownCanvas.rstrnts) {
            // 윗라인 식당
            if (rstrnt.x <= mx && mx <= rstrnt.x + rstrnt.w
                && rstrnt.y <= my && my <= rstrnt.y + rstrnt.h && my < 400) {
                let arrivalX = (rstrnt.x + (rstrnt.w / 2));
                let arrivalY = (rstrnt.y + rstrnt.h);
                // 유저 이동
                user.moveTo(arrivalX, arrivalY);
                this.updateInfo(arrivalX, arrivalY);
            }
            // 아랫라인 식당
            if (rstrnt.x <= mx && mx <= rstrnt.x + rstrnt.w
                && rstrnt.y <= my && my <= rstrnt.y + rstrnt.h && my > 400) {
                let arrivalX = (rstrnt.x + (rstrnt.w / 2));
                let arrivalY = rstrnt.y;
                // 유저 이동
                user.moveTo(arrivalX, arrivalY);
                this.updateInfo(arrivalX, arrivalY);
            }
        }
    }

    updateInfo(x, y) {
        if (x == 440 && y == 316)
            Restaurant.rstrntIndex = 0;
        if (x == 647 && y == 316)
            Restaurant.rstrntIndex = 1;
        if (x == 850 && y == 316)
            Restaurant.rstrntIndex = 2;
        if (x == 440 && y == 520)
            Restaurant.rstrntIndex = 3;
        if (x == 647 && y == 520)
            Restaurant.rstrntIndex = 4;
        if (x == 850 && y == 520)
            Restaurant.rstrntIndex = 5;
    }

    // town canvas getter -----------------------------------------------------
    get canvas() {
        return this.#canvas;
    }

    // 식당 배열 getter
    get rstrnts() {
        return TownCanvas.rstrnts;
    }

    // 업뎃 ---------------------------------------------------------------------
    update() {
        this.#user.update();
    }

    // 그리기 ---------------------------------------------------------------------
    paint() {
        // 배경 그리기
        this.#background.draw(this.#ctx);
        // 식당 그리기
        for (let rstrnt of TownCanvas.rstrnts) {
            rstrnt.draw(this.#ctx);
            rstrnt.drawInfo(this.#ctx);
        }
        // 유저 그리기
        this.#user.draw(this.#ctx);
    }

    // run --------------------------------------------------------------------
    run() {
        this.#tid = setInterval(() => {
            this.update();
            this.paint();
        }, 17)
    }
}