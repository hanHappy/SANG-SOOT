import Data from "./data.js";

export default class GameResult {
    #ctx;
    #trophy;
    #trophyLose;
    #fistPosX;
    #fistPosY;
    #secondPosX;
    #secondPosY;
    #thirdPosX;
    #thirdPosY;

    constructor(ctx) {
        this.#ctx = ctx;

        this.#trophy = document.getElementById("trophy");
        this.#trophyLose = document.getElementById("trophyLose");

    }

    // 트로피 그리기()
    drawTrophies() {
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
    } // draw trophies

} // class