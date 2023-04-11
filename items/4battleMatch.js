export default class MatchPage {
  #canvas;
  #ctx;

  constructor() {
    this.#canvas = document.createElement("canvas");
    this.#ctx = canvas.getContext("2d");
  } //constructor

  draw() {
    this.#ctx.fillRect(0, 0, 300, 300);
  }
} //class
