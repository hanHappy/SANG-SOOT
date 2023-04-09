export default class Move {
  #obj;
  #ctx;
  #drawImage;
  #img;
  #imgWidth;
  #imgHeight;
  #imgX;
  #imgY;
  #speed;
  #dx;
  #dy;

  constructor(ctx, obj, drawImage) {
    this.#ctx = ctx;
    this.#obj = obj;
    this.#drawImage = drawImage;
    this.#img = new Image();
    this.#img.src = "3quizImg/chicken.png";
    this.#imgWidth = 280;
    this.#imgHeight = 280;
    this.#imgX = 0;
    this.#imgY = obj.height - this.#imgHeight / 2;
    this.#speed = 20;
    this.#dx = this.#speed;
    this.#dy = -this.#speed;
  }

  run() {
    const move = setInterval(() => {
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      this.#ctx.drawImage(this.#img, this.#imgX, this.#imgY, this.#imgWidth, this.#imgHeight);
      this.#imgX += this.#dx;
      this.#imgY += this.#dy;
      if (this.#imgX > this.#obj.width || this.#imgY < -this.#imgHeight) {
        clearInterval(move);
        this.#drawImage();
      }
    }, 1);
  }
}