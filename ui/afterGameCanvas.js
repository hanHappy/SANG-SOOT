import Data from "../items/data.js";

export default class AfterGameCanvas {
    #canvas;
    #ctx;
    #x;
    #y;
    #w;
    #h;
    #gameResult;
    #scenes;
    #sceneIndex;
    #trophy;
    #trophyLose;
    #btn

    constructor() {
        // canvas, constext -----------------------------------------------
        this.#canvas = document.createElement("canvas");
        document.body.append(this.#canvas);
        this.#canvas.style.display = "none";
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext("2d");

        // click ---------------------------------------------------------
        this.#sceneIndex = 0;
        this.#canvas.onclick = this.clickHandler.bind(this);

        // click ---------------------------------------------------------
        this.#sceneIndex = 0;
        this.#canvas.onclick = this.clickHandler.bind(this);

        // image load
        this.#scenes = new Array(18);
        for (let i = 0; i < this.#scenes.length; i++) {
            this.#scenes[i] = document.getElementById(`afterGame${i}`);
        }

        // 트로피
        this.#trophy = document.getElementById("trophy");
        this.#trophyLose = document.getElementById("trophyLose");

        // s0 다음버튼
        this.#btn = document.getElementById("AG-S0-nextBtn");

    } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    get canvas() {
        return this.#canvas;
    }

    // Scene_0 : 트로피 화면
    gameResult() {
        if (this.#sceneIndex >= 1)
            return;
        this.#ctx.drawImage(this.#scenes[0], 0, 0, 1150, 820);
        // 트로피
        let result = Data.gameResult;
        let ctx = this.#ctx;
        let trp = this.#trophy;
        let trpL = this.#trophyLose;
        switch (result) {
            case 0:
                ctx.drawImage(trpL, 100, 100);
                ctx.drawImage(trpL, 400, 100);
                ctx.drawImage(trpL, 700, 100);
                break;
            case 1:
                ctx.drawImage(trp, 100, 100);
                ctx.drawImage(trpL, 400, 100);
                ctx.drawImage(trpL, 700, 100);
                break;
            case 2:
                ctx.drawImage(trp, 100, 100);
                ctx.drawImage(trp, 400, 100);
                ctx.drawImage(trpL, 700, 100);
                break;
            case 3:
                ctx.drawImage(trp, 100, 100);
                ctx.drawImage(trp, 400, 100);
                ctx.drawImage(trp, 700, 100);
                break;
        }
        // 다음 버튼
        // this.#btn.style.display = "block";
        if (Data.gameResult >= 2)
            // -> Scene_1 : 게임 승리 첫 씬으로
            this.#sceneIndex++;
            // -> Scene_10 : 게임 패배 첫 씬으로
            else this.#sceneIndex = 10;
    }

    // Scene_17 : 메인 || 종료
    goMainOrEnd() {
        let btnMain = document.getElementById("AG-S17-btnToMain");
        let btnEnd = document.getElementById("AG-S17-btnToEnding");
        btnMain.style.display = "block";
        btnEnd.style.display = "block";
        btnMain.addEventListener("click", function () {
            // 메인으로
        });
        btnEnd.addEventListener("click", function () {
            // 종료하기
        });
    }

    clickHandler() {
        if (this.#sceneIndex == 1) {
            this.#btn.style.display = "none";
        }

        console.log(Data.gameResult);
        // 그리기
        this.draw();
        // Scene_17 : 메인 || 종료
        if (this.#sceneIndex == 17) {
            this.goMainOrEnd();
        }
        // Scene_8 : 게임 승리 마지막 씬
        // Scene_16 : 게임 패배 마지막 씬
        // 둘 모두 Scene_17로 이동
        if (this.#sceneIndex == 8 || this.#sceneIndex == 16) {
            this.#sceneIndex = 17;
            return;
        }
        this.#sceneIndex++;

    } // click handler

    draw() {
        let scene = this.#scenes[this.#sceneIndex];
        this.#ctx.drawImage(scene, 0, 0, 1150, 820);
    }
}
