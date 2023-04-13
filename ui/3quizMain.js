export default class Main {
  #ctx;
  #obj;
  #startbtn1;
  #startbtn2;

  constructor() {
    this.#obj = document.createElement("canvas");
    document.body.append(this.#obj);
    this.#ctx = this.#obj.getContext("2d");
    this.#obj.width = 1150;
    this.#obj.height = 820;
    this.#obj.style.backgroundImage = `url(${document.getElementById("bg1").src})`;
    this.#startbtn1 = document.getElementById("startbtn1");
    this.#startbtn2 = document.getElementById("startbtn2");

    this.#obj.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  draw() {
    this.#ctx.drawImage(this.#startbtn1, 372, 610);
  };

  onMouseMove(e) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    if (372 <= mouseX && mouseX <= 772 && 610 <= mouseY && mouseY <= 731) {
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      this.#ctx.drawImage(this.#startbtn2, 372, 610, 400, 120);
    } else {
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      this.#ctx.drawImage(this.#startbtn1, 372, 610, 400, 120);
    }
  }

  mainPlay() {
    const startBeep = document.getElementById("startBeep");
    startBeep.play();
  }

  get obj() {
    return this.#obj;
  }

  run() {
    this.draw();
  };
}