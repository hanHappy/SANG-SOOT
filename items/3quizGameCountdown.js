export default class Countdown {
  #obj;
  #ctx;
  #move;
  #count;
  #imageCount;
  #imagePaths;
  #img;

  constructor(ctx, obj, drawImage, move) {
    this.#ctx = ctx;
    this.#obj = obj;
    this.#move = move;
    this.#count = 3;
    this.#imageCount = 0;
    this.#imagePaths = ["3quizImg/countdown3.png", "3quizImg/countdown2.png", "3quizImg/countdown1.png", "3quizImg/countdown4.png"];
    this.#img = new Image();
  }

  run() {
    const countdown = setInterval(function () {
      if (this.#count > 0) {
        this.#img.src = this.#imagePaths[this.#imageCount % this.#imagePaths.length];
        this.#img.onload = this.drawImage.bind(this);
        this.#imageCount++;
      } else if (this.#count === 0) {
        this.#img.src = this.#imagePaths[3];
        this.#img.onload = this.drawImage.bind(this);
      } else {
        clearInterval(countdown);
        this.#move();
      }
      this.#count--;
    }.bind(this), 720);
  }

  drawImage() {
    this.#ctx.drawImage(this.#img, 365, 220, 400, 400);
  }
}