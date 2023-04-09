export default class Quiz {
  #obj;
  #ctx;
  #clickCount = 0;

  constructor(ctx, obj) {
    this.#ctx = ctx;
    this.#obj = obj;

  }

  drawImage() {
    const quizImg = new Image();
    quizImg.src = "3quizImg/ex_quizquiz.png";
    quizImg.onload = () => {
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      setTimeout(() => {
        this.#ctx.drawImage(quizImg, 120, 132, 911, 584);
        this.#ctx.drawImage(quizImg, 120, 132, 911, 584);
        this.#obj.addEventListener('click', this.#clickHandler);
      }, 500);
    };

  }

  #clickHandler = (e) => {
    if (this.#clickCount >= 1) return;
    const x = e.offsetX;
    const y = e.offsetY;

    if (x >= 153 && x <= 998) {
      if (y >= 291 && y <= 420) {
        // const result = new GameResult();
        // result.plus();
        const imgC = new Image();
        imgC.src = "3quizImg/ex_quizquizc.png";
        imgC.onload = () => {
          this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
          this.#ctx.drawImage(imgC, 120, 132, 911, 584);
          this.#obj.removeEventListener("click", this.#clickHandler);
        };
        this.#clickCount++;
      } else if (y >= 431 && y <= 560) {
        const imgW = new Image();
        imgW.src = "3quizImg/ex_quizquizw.png";
        imgW.onload = () => {
          this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
          this.#ctx.drawImage(imgW, 120, 132, 911, 584);
          this.#obj.removeEventListener("click", this.#clickHandler);
        };
        this.#clickCount++;
      } else if (y >= 571 && y <= 700) {
        const imgW = new Image();
        imgW.src = '3quizImg/ex_quizquizw.png';
        imgW.onload = () => {
          this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
          this.#ctx.drawImage(imgW, 120, 132, 911, 584);
          this.#obj.removeEventListener('click', this.#clickHandler);
        };
        this.#clickCount++;
      }
    }
  }
}