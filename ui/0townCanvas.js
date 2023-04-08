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

        // Restaurant -----------------------------------------------------
        // 식당 객체 배열
        this.#rstrnts = [
            new Restaurant("짜장하회", 0, 0, 350, 190),
            new Restaurant("후딱이다", 1, 0, 557, 190),
            new Restaurant("토끼의부엌", 2, 0, 760, 190),
            new Restaurant("우포식당", 3, 0, 350, 520),
            new Restaurant("동강학식", 4, 0, 557, 520),
            new Restaurant("영남식당", 5, 0, 760, 520)
        ]
        // 식당 메뉴
        this.#rstrnts[0].menus.name.push("짜장면", "짬뽕", "볶음밥");
        this.#rstrnts[0].menus.price.push(4000, 5000, 5000);
        this.#rstrnts[0].menus.ratedPrice.push(4000, 5000, 5000);
        for (let i = 0; i < this.#rstrnts[0].menus.name.length; i++) {
            let rp = this.#rstrnts[0].menus.ratedPrice[i];
            let p = this.#rstrnts[0].menus.price[i];
            this.#rstrnts[0].menus.value.push(Math.floor( rp / p * 100));
        }
        this.#rstrnts[1].menus.name.push("소세지로제덮밥", "도란도란", "삼겹살카레");
        this.#rstrnts[1].menus.price.push(8400, 7900, 7900);
        this.#rstrnts[1].menus.ratedPrice.push(8400, 7900, 7900);
        for (let i = 0; i < this.#rstrnts[1].menus.name.length; i++) {
            this.#rstrnts[1].menus.value.push(Math.floor(this.#rstrnts[1].menus.ratedPrice[i] / this.#rstrnts[1].menus.price[i] * 100));
        }
        this.#rstrnts[2].menus.name.push("차돌뚝배기카레", "돈까스카레", "수제기본카레");
        this.#rstrnts[2].menus.price.push(11000, 10900, 7000);
        this.#rstrnts[2].menus.ratedPrice.push(11000, 10900, 7000);
        for (let i = 0; i < this.#rstrnts[2].menus.name.length; i++) {
            this.#rstrnts[2].menus.value.push(Math.floor(this.#rstrnts[2].menus.ratedPrice[i] / this.#rstrnts[2].menus.price[i] * 100));
        }

        // User
        this.#user = new User();

        // click
        this.#canvas.addEventListener('click', (e) => { this.click(e) });

        // mousemove
        this.#canvas.addEventListener('mousemove', (e) => { this.mousemove(e) });

    } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    // 마우스오버 - 식당 정보
    mousemove(e) {
        let mx = e.offsetX;
        let my = e.offsetY;
        for (let rstrnt of this.#rstrnts) {
            if (rstrnt.x <= mx && mx <= rstrnt.x + rstrnt.w
                && rstrnt.y <= my && my <= rstrnt.y + rstrnt.h) {
                rstrnt.mouseover();
            } else
                rstrnt.mouseleave();
        }
    }
    // 클릭 - 유저 이동 ----------------------------------------------------------
    click(e) {
        console.log(this.#rstrnts[0]);
        let user = this.#user;
        let mx = e.offsetX;
        let my = e.offsetY;
        // 개별 식당 좌표 내 클릭 시
        for (let rstrnt of this.#rstrnts) {
            // 윗라인 식당
            if (rstrnt.x <= mx && mx <= rstrnt.x + rstrnt.w
                && rstrnt.y <= my && my <= rstrnt.y + rstrnt.h && my < 400) {
                let arrivalX = (rstrnt.x + (rstrnt.w / 2));
                let arrivalY = (rstrnt.y + rstrnt.h);
                // 유저 이동
                user.moveTo(arrivalX, arrivalY);
            }
            // 아랫라인 식당
            if (rstrnt.x <= mx && mx <= rstrnt.x + rstrnt.w
                && rstrnt.y <= my && my <= rstrnt.y + rstrnt.h && my > 400) {
                let arrivalX = (rstrnt.x + (rstrnt.w / 2));
                let arrivalY = rstrnt.y;
                // 유저 이동
                user.moveTo(arrivalX, arrivalY);
            }
        }
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
        for (let rstrnt of this.#rstrnts) {
            rstrnt.draw(this.#ctx);
            rstrnt.drawInfo(this.#ctx);
        }
        // 유저 그리기
        this.#user.draw(this.#ctx);
    }

    run() {
        this.#tid = setInterval(() => {
            this.update();
            this.paint();
        }, 17)
    }
}