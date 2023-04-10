import Countdown from './3quizGameCountdown.js';
import Move from './3quizGameMove.js';
import Quiz from './3quizGameQuiz.js';

export default
class Game {
  #obj
  #ctx
  #countdown
  #move
  #quiz

  constructor() {
    const canvas = document.querySelector('canvas'); //Main의 canvas 찾기
    if (canvas) {
        canvas.remove(); //삭제
    } 

    this.#obj = document.createElement("canvas");
    document.body.append(this.#obj);
    this.#ctx = this.#obj.getContext("2d");
    this.#obj.width = 1150;
    this.#obj.height = 820;
    this.#obj.style.backgroundImage = "url('3quizImg/quiz_bg2.png')";

    this.#quiz = new Quiz(this.#ctx, this.#obj);
    this.#move = new Move(this.#ctx, this.#obj, this.#quiz.drawImage.bind(this.#quiz));
    this.#countdown = new Countdown(this.#ctx, this.#obj, this.#quiz.drawImage.bind(this.#quiz), this.#move.run.bind(this.#move));
  }

  run() {
    this.#countdown.run();
  }
}



