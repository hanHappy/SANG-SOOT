export default class Quiz {
  #obj;
  #ctx;
  #correctAnswer;
  #wrongAnswer;
  #clickCount;
  #quizWBeep;
  #quizCBeep;

  constructor(ctx, obj) {
    this.#ctx = ctx;
    this.#obj = obj;

    this.#correctAnswer= document.getElementById("correctAnswer");
    this.#wrongAnswer= document.getElementById("wrongAnswer");

    this.#quizCBeep = document.getElementById("quizCBeep");
    this.#quizWBeep = document.getElementById("quizWBeep");

    this.#clickCount = 0;
  }

  drawImage() {
    const quizImg = new Image();
    quizImg.src = "3quizImg/ex_quizquiz.png";

    quizImg.onload = () => {
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      setTimeout(function () {
        this.#ctx.drawImage(quizImg, 120, 132, 911, 584);
        this.#obj.addEventListener('click', this.#clickHandler);
      }.bind(this), 500); //setT
    };
  } //drawImg

  #clickHandler = (e) => {
    if (this.#clickCount >= 1)
      return;

    const x = e.offsetX;
    const y = e.offsetY;

    if (x <= 153 && x >= 998)
      return;

    if (y >= 291 && y <= 700) { //wrong
      if (y >= 291 && y <= 420 || y >= 431 && y <= 560) {
        this.#playBeepSound(this.#quizWBeep);
        this.#showResult(this.#wrongAnswer);
      } else if (y >= 571 && y <= 700) {
        this.#playBeepSound(this.#quizCBeep);
        this.#showResult(this.#correctAnswer);
      }
      this.#clickCount++;
    }
  } // click(e)

  #showResult(img) {
    const result = new Image();

    if (typeof img === 'string') {
      result.src = img;
    } else {
      result.src = img.src;
    }

    result.onload = () => {
      this.#ctx.clearRect(0, 0, this.#obj.width, this.#obj.height);
      this.#ctx.drawImage(result, 120, 132, 911, 584);
      this.#obj.removeEventListener("click", this.#clickHandler);
    };
  }
  
  #playBeepSound(sound) {
    sound.play();
  }

} // quiz class