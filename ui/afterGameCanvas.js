import GameResult from "../items/0gameResult.js";

export default class afterGameCanvas {

    #canvas;
    #ctx;
    #x;
    #y;
    #w;
    #h;
    #gameResult;
    #scenes;
    #sceneIndex;

    constructor() {
        // canvas, constext -----------------------------------------------
        this.#canvas = document.createElement("canvas");
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext("2d");

        // image
        this.#x = 0;
        this.#y = 0;
        this.#w = 1150;
        this.#h = 820;

        // Game Result
        this.#gameResult = new GameResult(this.#ctx);

        // click ---------------------------------------------------------
        this.#sceneIndex = 0;
        this.#canvas.onclick = this.clickHandler.bind(this);

        // image load
        this.#scenes = new Array(18);
        for (let scene of this.#scenes) {
            scene = document.getElementById(`afterGame${i}`);
        }

    } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    // Scene_0 : 트로피 화면
    gameResult() {
        this.#gameResult.draw(this.#scenes[0]);
        // 다음 버튼
        let btn = document.getElementById("AG-S0-nextBtn");
        btn.style.display = "block";
        // 클릭하면
        btn.addEventListener('click', function () {
            btn.style.display = "none";
            if (Data.gameResult >= 2)
                // -> Scene_1 : 게임 승리 첫 씬으로
                this.#sceneIndex++;
            else
                // -> Scene_10 : 게임 패배 첫 씬으로
                this.#sceneIndex = 10;
        }.bind(this));
    }

    // Scene_17 : 메인 || 종료
    goMainOrEnd(){
        
    }

    clickHandler() {
        // 트로피 화면에서는 버튼 클릭으로만 화면 전환
        if(this.#sceneIndex==0){
            return;
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