export default class BattleGauge {
  #x;
  #y;
  #width;
  #height;
  #color;
  #redBoxWidth;

  constructor() {
    //게이지 x,y 좌표
    this.#x = 100;
    this.#y = 600;

    //게이지 너비, 높이, 색
    this.#width = 950;
    this.#height = 65;
    this.#color = "red";

    //게이지 너비
    this.#redBoxWidth = 450;
  }

  //클래스 내에 함수에서는 지역변수를 선언해서 사용하는 걸 지향하자.

  //게이지 그리기
  draw(ctx) {
    let x = this.#x;
    let y = this.#y;
    let width = this.#width;
    let height = this.#height;
    let color = this.#color;
    let redBoxWidth = this.#redBoxWidth;

    //background gauge
    ctx.fillStyle = "pink";
    ctx.fillRect(x, y, width, height);

    //red gauge
    ctx.fillStyle = color;
    ctx.fillRect(x, y, redBoxWidth, height);

    //black stroke box
    ctx.fillStyle = "black";
    //ctx.lineWidth = 8;
    //ctx.strokeRect(x, y, width, height);
  }

  update() {
    if (0 >= this.#redBoxWidth) {
      // if가 하기문장보다 위에있어야 줄어들지않음(업데이트함수는 계속 실행됨)
      //alert("LOSE");
      let img = document.getElementById("lose");
      ctx.drawImage(img, 0, 0, 1150, 820);
      return;
    }

    if (this.#redBoxWidth >= this.#width) {
      //win
      return;
    }

    this.#redBoxWidth += 1;
  }

  plus() {
    // if 게이지 너비가 틀 너비 보다 작을때, 게이지 너비 ++
    if (0 <= this.#redBoxWidth) {
      this.#redBoxWidth -= 15;
    }
  }
}
