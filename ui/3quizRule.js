export default
    class Rule {
    #obj;
    #ctx;
    #rule;
    #rulebtn

    constructor() {
        this.#obj = document.createElement("canvas");
        document.body.append(this.#obj);
        this.#ctx = this.#obj.getContext("2d");
        this.#obj.width = 1150;
        this.#obj.height = 820;
        this.#obj.style.backgroundImage = `url(${document.getElementById("bg2").src})`;

        this.#rulebtn = document.getElementById("rulebtn");
        this.#rule = document.getElementById("rule");
    }

    draw() {
        this.#ctx.drawImage(this.#rule, 95, 110, 960, 600);
        this.#ctx.drawImage(this.#rulebtn, 778, 580, 244, 94);
    };

    rulePlay() {
        const ruleBeep = document.getElementById("ruleBeep");
        ruleBeep.play();
    }

    run() {
        this.draw();
        // this.draw();
    }

    get obj() {
        return this.#obj;
    }

    get rule() {
        return this.#rulebtn;
    }
}