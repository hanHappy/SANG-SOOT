export default class SlotMainCanvas{
  #canvas;
  #ctx;
  #img;
  #imgX;
  #imgY;
  #strBtn;



  constructor(){
    
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);
    this.#ctx = this.#canvas.getContext("2d");
    
    this.#canvas.width = 1150;
    this.#canvas.height = 820;


    this.#img = document.getElementById("slotMain");
    this.#imgX = 0;
    this.#imgY = 0;
    this.#img.width = 1150;
    this.#img.height = 820;

    this.#strBtn = document.getElementById("strBtn");
    this.#strBtn.style.display = "block";
 


  }


  draw() {
    let x = this.#imgX;
    let y = this.#imgY;
    let w = this.#img.width;
    let h = this.#img.height;
    let img = this.#img;

    this.#ctx.drawImage(img, x, y, w, h);

  }


  


}

