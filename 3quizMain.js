import Rule from './3quizRule.js';

export default class Main {
  #ctx;
  #obj;
  #startbtn;
  #startbtn2;

  constructor() {
    this.#obj = document.createElement("canvas");
    document.body.append(this.#obj);
    this.#ctx = this.#obj.getContext("2d");
    this.#obj.width = 1150;
    this.#obj.height = 820;
    this.#obj.style.backgroundImage = `url(${document.getElementById("bg1").src})`;

    this.#startbtn = new Image();
    this.#startbtn.src = "3quizImg/button_start.png";

    this.#startbtn2 = new Image();
    this.#startbtn2.src = "3quizImg/button_start2.png";

    this.#obj.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  draw() {
    this.#ctx.drawImage(this.#startbtn, 372, 610);
  };

  onMouseMove(e) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    if (372 <= mouseX && mouseX <= 772 && 610 <= mouseY && mouseY <= 731) {
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      this.#ctx.drawImage(this.#startbtn2, 372, 610, 400, 120);
    } else {
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      this.#ctx.drawImage(this.#startbtn, 372, 610, 400, 120);
    }
  }

  get obj() {
    return this.#obj;
  }

  run() {
    this.draw();
  };
}