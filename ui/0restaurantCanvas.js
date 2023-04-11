import TownCanvas from "./0townCanvas.js";
import Menu from "../items/0menu.js";
import Restaurant from "../items/0restaurant.js";

export default class RestaurantCanvas {
  #canvas;
  #ctx;
  #sceneIndex;
  #scenes;
  #sceneNums;

  #menu;

  #x;
  #y;
  #w;
  #h;

  constructor() {
    // canvas, constext -----------------------------------------------
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);
    this.#canvas.width = 1150;
    this.#canvas.height = 820;
    this.#ctx = this.#canvas.getContext("2d");

    this.#x = 0;
    this.#y = 0;
    this.#w = 1150;
    this.#h = 820;

    // Menu ---------------------------------------------------------
    // this.#menu = new Menu();

    // click ---------------------------------------------------------
    this.#canvas.onclick = this.clickHandler.bind(this);
    this.#sceneIndex = 0;

    // images --------------------------------------------------------
    this.#sceneNums = 2; // ★★★★★★★★★★★ scene 수에 따라 값 설정
    this.#scenes = new Array(this.#sceneNums);
    // html에서 scenes 이미지 가져오기
    for (let i = 0; i < this.#scenes.length; i++) {
      this.#scenes[i] = document.getElementById(`inRstrnt${i}`);
    }
  } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // Scene_1
  welcome() {
    // 어서오세요~
    this.#ctx.drawImage(
      this.#scenes[this.#sceneIndex],
      this.#x,
      this.#y,
      this.#w,
      this.#h
    );
    let rstrntName = TownCanvas.rstrnts[Restaurant.rstrntIndex].name;
    this.#ctx.font = "37px dgm";
    this.#ctx.fillText(`${rstrntName}입니다!`, 300, 681);
  }

  // 클릭할 때마다 다음 scene으로 넘어감
  clickHandler() {
    this.#sceneIndex++;
    let index = this.#sceneIndex;
    let ctx = this.#ctx;
    let scene = this.#scenes[index];
    let x = this.#x;
    let y = this.#y;
    let w = this.#w;
    let h = this.#h;
    this.#ctx.drawImage(scene, x, y, w, h);

    // Scene_2 : 메뉴판
    if (index == 1) {
      this.#menu = new Menu();
      this.#menu.printInfo(this.#ctx);
    }
  } // click handler

  get canvas() {
    return this.#canvas;
  }
} // class
