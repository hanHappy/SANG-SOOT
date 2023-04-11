export default class SlotGameoverCanvas{
  #canvas;
  #ctx;
  #x0;
  #y0;
  #x1;
  #y1;
  #img0;
  #img1;
  #tid; // timeID
  #toMainBtn;
  #toOverBtn;


  constructor(){

    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);
    this.#ctx = this.#canvas.getContext("2d");

    this.#canvas.width = 1120;
    this.#canvas.height = 820;

    this.#img0 = document.getElementById("slotOver0");
    this.#x0;
    this.#y0;
    this.#img0.width = 1150;
    this.#img0.height = 820;

    this.#img1 = document.getElementById("slotOver1");
    this.#x1;
    this.#y1;
    this.#img1.width = 1150;
    this.#img1.height = 820;

    this.#toMainBtn = document.getElementById("toMainBtn");
    this.#toOverBtn = document.getElementById("toOverBtn");
  }

get canvas(){
  return this.#canvas;
}

draw0(){
  let x = this.#x0;
  let y = this.#y0;
  let w = this.#img0.width;
  let h = this.#img0.height;
  let img = this.#img0;

  this.#ctx.drawImage(img, x, y, w, h);
}

draw1(){
  let x = this.#x1;
  let y = this.#y1;
  let w = this.#img1.width;
  let h = this.#img1.height;
  let img = this.#img1;

  this.#ctx.drawImage(img, x, y, w, h);
}

  run() {
    this.#tid = setInterval(() => {

      this.draw0();
      setTimeout(() => {
        this.draw1();
      }, 100)

    }, 200);
  }


}

