export default class MatchPage {
  #canvas;
  #ctx;
  #tid;
  #x;
  #y;
  #ux;
  #uy;
  #vx;
  #vy;
  #vux;
  #velocity;
  #ceo;
  #user;
  #background;

  constructor() {
    this.#x = -190;
    this.#y = 0;

    //ceo location
    this.#vx = 100;
    this.#vy = 210;

    //user location
    this.#ux = 980;
    this.#uy = -300;

    this.#vux = 150;

    this.#ceo = document.getElementById("ceo");
    this.#user = document.getElementById("4user");
    this.#background = document.getElementById("background");

    this.#velocity = 2.5;
  } //constructor

  //런이 실행되면 바로 이미지가 계속해서 그려지고 이미지가 목적지에 도착할떄까지 움직인다.

  run(ctx) {
    this.#tid = setInterval(() => {
      this.draw(ctx);
      this.update();
    }, 16);
  }

  draw(ctx) {
    ctx.clearRect(this.#x, this.#y, 2000, 2000);
    ctx.drawImage(this.#background, 0, 0, 1150, 820);
    ctx.drawImage(this.#ceo, this.#x, this.#y, 380, 400);
    ctx.drawImage(this.#user, this.#ux, this.#uy, 300, 400);
  }

  update() {
    console.log("update");
    // 멈추기
    if (this.#x == this.#vx) {
      clearInterval(this.#tid);
    }

    if (this.#x < this.#vx) {
      // CEO
      this.#x += this.#velocity;
    } else if (this.#x > this.#vx) {
      this.#x -= this.#velocity;
    }

    if (this.#y < this.#vy) {
      this.#y += this.#velocity;
    } else if (this.#y > this.#vy) {
      this.#y -= this.#velocity;
    }

    //USER
    if (this.#ux > this.#vux) {
      this.#ux -= this.#velocity;
    } else if (this.#ux < this.#vux) {
      this.#ux += this.#velocity;
    }

    if (this.#uy > this.#vy) {
      this.#uy -= this.#velocity;
    } else if (this.#uy < this.#vy) {
      this.#uy += this.#velocity;
    }
  }
} //class
