export default class battleFood {
  #onion;
  #onioncut;
  #spaceUp;
  #spaceDown;
  #foodX;
  #foodY;
  #foodW;
  #foodH;
  #spaceX;
  #spaceY;
  #spaceW;
  #spaceH;

  #pressIndex;

  constructor() {
    // food
    this.#onion = document.getElementById("food");
    this.#onioncut = document.getElementById("cutfood");

    // food location
    this.#foodX = 400;
    this.#foodY = 300;

    // food size
    this.#foodW = 350;
    this.#foodH = 300;

    // space
    this.#spaceUp = document.getElementById("spaceUp");
    this.#spaceDown = document.getElementById("spaceDown");

    // space location
    this.#spaceX = 450;
    this.#spaceY = 670;

    // space size
    this.#spaceW = 300;
    this.#spaceH = 150;

    // 눌렸는지 확인
    this.#pressIndex = true;
  }

  //새로운 함수 (실행창)
  press() {
    this.#pressIndex = this.#pressIndex == true ? false : true;
  }

  draw(ctx) {
    if (this.#pressIndex) {
      let onion = this.#onion;
      let onioncut = this.#onioncut;
      let spaceUp = this.#spaceUp;
      let foodX = this.#foodX;
      let foodY = this.#foodY;

      let foodW = this.#foodW;
      let foodH = this.#foodH;

      ctx.drawImage(onioncut, foodX, foodY, foodW, foodH);
      ctx.drawImage(spaceUp, 450, 670, 300, 150);
    }
  }

  //스페이스바 입력시 cut(이미지1 지우고, 이미지2)
  cut(ctx) {
    if (this.#pressIndex == false) {
      let onion = this.#onion;
      let onioncut = this.#onioncut;
      let spaceDown = this.#spaceDown;
      let foodX = this.#foodX;
      let foodY = this.#foodY;
      let foodW = this.#foodW;
      let foodH = this.#foodH;

      ctx.drawImage(onion, foodX, foodY, foodW, foodH);
      ctx.drawImage(spaceDown, 450, 670, 300, 150);
    }
  }
}
