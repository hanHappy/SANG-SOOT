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
  #moveBeep;

  constructor(ctx, obj, drawImage) {
    this.#ctx = ctx;
    this.#obj = obj;

    this.#img = new Image();
    this.#img.src = "3quizImg/chicken.png";
    this.#imgWidth = 280;
    this.#imgHeight = 280;

    this.#drawImage = drawImage;
    this.#imgX = 0;
    this.#imgY = this.#obj.height - this.#imgHeight / 2;
    this.#speed = 30;
    this.#dx = this.#speed;
    this.#dy = -this.#speed;

    this.#moveBeep = document.getElementById("moveBeep");
  }

  run() {
    const move = setInterval(function () {
      moveBeep.play();
      
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      this.#ctx.drawImage(this.#img, this.#imgX, this.#imgY, this.#imgWidth, this.#imgHeight);
      this.#imgX += this.#dx;
      this.#imgY += this.#dy;
      if (this.#imgX > this.#obj.width || this.#imgY < -this.#imgHeight) {
        clearInterval(move);
        this.#drawImage();
      }
    }.bind(this), 1);
  }
}