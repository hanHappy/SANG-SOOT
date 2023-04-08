export default class BattleScenario {
  #img0;
  #img1;
  #img2;
  #img3;
  #scenIndex;

  constructor() {
    //대화 이미지 가져오기(변수명 다다르게 가져와야하나?)
    // this.#img1 = document.getElementById("effect1");
    // this.#img2 = document.getElementById("effect2");
    this.#img0 = document.getElementById("talk1");
    this.#img1 = document.getElementById("talk2");
    this.#img2 = document.getElementById("talk3");
    this.#img3 = document.getElementById("talk4");

    // 이미지 크기
    this.imgX = 0;
    this.imgY = 0;
    this.imgW = 1150;
    this.imgH = 820;

    // index
    this.#scenIndex = 0;

    //
  }

  draw(ctx) {
    let x = this.imgX;
    let y = this.imgY;
    let w = this.imgW;
    let h = this.imgH;

    let img0 = this.#img0;
    let img1 = this.#img1;
    let img2 = this.#img2;
    let img3 = this.#img3;

    let index = this.#scenIndex;

    switch (index) {
      case 0:
        ctx.drawImage(img0, x, y, w, h);
        break;
      case 1:
        ctx.drawImage(img1, x, y, w, h);
        break;
      case 2:
        ctx.drawImage(img2, x, y, w, h);
        break;
      case 3:
        ctx.drawImage(img3, x, y, w, h);
        break;
      case 4:
        this.#scenIndex = false;
        break;
    }
  }

  // getIndex(){
  //   return this.#scenIndex;
  // }

  get scenIndex() {
    return this.#scenIndex;
  }

  scenario(ctx) {
    this.#scenIndex++;
    this.draw(ctx);
  }
}
