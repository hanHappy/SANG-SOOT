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

    } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    get canvas() {
        return this.#canvas;
    }

    // Scene_0 : 트로피 화면
    gameResult() {
        this.#ctx.drawImage(this.#scenes[0], 0, 0, 1150, 820);
        // 트로피
        let result = Data.gameResult;
        let ctx = this.#ctx;
        let trp = this.#trophy;
        let trpL = this.#trophyLose;
        console.log(result);
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
        let btn = document.getElementById("AG-S0-nextBtn");
        btn.style.display = "block";
        // 클릭하면
        btn.addEventListener(
            "click",
            function () {
                btn.style.display = "none";
                
            }.bind(this)
        );
        this.#sceneIndex++;
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
        // 트로피 화면에서는 버튼 클릭으로만 화면 전환
        if(this.#sceneIndex==0){
            if (Data.gameResult >= 2)
                // -> Scene_1 : 게임 승리 첫 씬으로
                this.#sceneIndex++;
            // -> Scene_10 : 게임 패배 첫 씬으로
            else this.#sceneIndex = 10;
        }
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
        let x = this.#x;
        let y = this.#y;
        let w = this.#w;
        let h = this.#h;
        this.#ctx.drawImage(scene, x, y, w, h);
    }
}
