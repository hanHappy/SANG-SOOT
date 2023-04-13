import Countdown from "../items/3quizGameCountdown.js";
import Move from "../items/3quizGameMove.js";
import Quiz from "../items/3quizGameQuiz.js";

export default class Game {
  #obj;
  #ctx;
  #countdown;
  #move;
  #quiz;
  #nextCanvas;
  #tid;

  constructor(callback) {
    this.#obj = document.createElement("canvas");
    document.body.append(this.#obj);
    this.#obj.style.display = "none";
    this.#ctx = this.#obj.getContext("2d");
    this.#obj.width = 1150;
    this.#obj.height = 820;
    this.#obj.style.backgroundImage = "url('3quizImg/quiz_bg2.png')";

    this.#quiz = new Quiz(this.#ctx, this.#obj);
    this.#move = new Move(
      this.#ctx,
      this.#obj,
      this.#quiz.drawImage.bind(this.#quiz)
    );
    this.#countdown = new Countdown(
      this.#ctx,
      this.#obj,
      this.#quiz.drawImage.bind(this.#quiz),
      this.#move.run.bind(this.#move)
    );
    this.#nextCanvas = callback;
    this.#tid = null;
  }

  countPlay() {
    const countBeep = document.getElementById("countBeep");
    countBeep.play();
  }

  check() {
    this.#tid = setInterval(() => {
      if (this.#quiz.btn) {
        this.#nextCanvas(this.#obj);
      }
    }, 100);
  }

  run() {
    this.#countdown.run();
  }

  get obj() {
    return this.#obj;
  }
}
