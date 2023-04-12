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

  constructor() {
    this.#x = -190;
    this.#y = -150;
    this.#vx = 180;
    this.#vy = 120;

    this.#ux = 1030;
    this.#uy = 400;

    this.#vux = 650;

    this.#ceo = document.getElementById("ceo");
    this.#user = document.getElementById("4user");

    this.#velocity = 2;
  } //constructor

  //런이 실행되면 바로 이미지가 계속해서 그려지고 이미지가 목적지에 도착할떄까지 움직인다.

  run(ctx) {
    console.log("런까지 실행완료");

    this.#tid = setInterval(() => {
      this.draw(ctx);
      this.update();
    }, 16);
  }

  draw(ctx) {
    console.log("드로우까지 실행완료");

    ctx.clearRect(this.#x, this.#y, 2000, 2000);
    ctx.drawImage(this.#ceo, this.#x, this.#y, 300, 400);
    ctx.drawImage(this.#user, this.#ux, this.#uy, 300, 400);
  }

  update() {
    console.log("업뎃까지 실행완료");

    // CEO
    if (this.#x < this.#vx) {
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
