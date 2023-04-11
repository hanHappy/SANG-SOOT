import TownCanvas from "./0townCanvas.js";
import Menu from "../items/0menu.js";
import Restaurant from "../items/0restaurant.js";

export default class RestaurantCanvas {
<<<<<<< HEAD
  #canvas;
  #ctx;
  #index;
  #scenes;

  #x;
  #y;
  #w;
  #h;
  #rstrnt;

  static x;
  static y;
=======
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
>>>>>>> aab0dab5a2aa0c6a21a745770e5033cdb5972634

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

    // click ---------------------------------------------------------
    this.#canvas.onclick = this.clickHandler.bind(this);
    this.#index = 0;

<<<<<<< HEAD
    // images --------------------------------------------------------
    this.#scenes = new Array(2);
    for (let i = 0; i < this.#scenes.length; i++) {
      this.#scenes[i] = document.getElementById(`inRstrnt${i}`);
=======
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
    welcome(){
        // 어서오세요~
        this.#ctx.drawImage(this.#scenes[this.#sceneIndex], this.#x, this.#y, this.#w, this.#h);
        let rstrntName = TownCanvas.rstrnts[Restaurant.rstrntIndex].name;
        this.#ctx.font = "37px dgm";
        this.#ctx.fillText(`${rstrntName}입니다!`, 300, 681);
>>>>>>> aab0dab5a2aa0c6a21a745770e5033cdb5972634
    }
  } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

<<<<<<< HEAD
  draw() {
    // 어서오세요~
    this.#ctx.drawImage(
      this.#scenes[this.#index],
      this.#x,
      this.#y,
      this.#w,
      this.#h
    );
    this.#ctx.font = "37px dgm";
    this.#ctx.fillText(`${this.#rstrnt.name}입니다!`, 300, 681);
  }

  clickHandler() {
    this.#index++;
    let index = this.#index;
    let ctx = this.#ctx;
    let scene = this.#scenes[index];
    let x = this.#x;
    let y = this.#y;
    let w = this.#w;
    let h = this.#h;
    this.#ctx.drawImage(scene, x, y, w, h);

    if (index == 1) {
      let name = this.#rstrnt.menus.name;
      let p = this.#rstrnt.menus.price;
      let rP = this.#rstrnt.menus.ratedPrice;
      let value = this.#rstrnt.menus.value;
      let menuNums = this.#rstrnt.menus.name.length;
      ctx.font = "45px dgm";
      ctx.fillText("메뉴            가격   평가가격   가성비", 140, 230);
      for (let i = 0; i < menuNums; i++) {
        if (value[i] < 80) {
          value[i] = "                    ★";
        } else if (value[i] < 90) {
          value[i] = "               ★★";
        } else if (value[i] < 110) {
          value[i] = "           ★★★";
        } else if (value[i] < 120) {
          value[i] = "     ★★★★";
        } else {
          value[i] = "★★★★★";
=======
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
>>>>>>> aab0dab5a2aa0c6a21a745770e5033cdb5972634
        }
        ctx.font = "35px dgm";
        ctx.letterSpacing = "1px";
        ctx.fillText(name[i], 140, 65 * (i + 1) + 240);
        ctx.fillText(p[i], 511, 65 * (i + 1) + 240);
        ctx.fillText(rP[i], 710, 65 * (i + 1) + 240);
        ctx.font = "35px arial";
        ctx.letterSpacing = "-7px";
        ctx.fillText(value[i], 898, 65 * (i + 1) + 240);
      }
    }
  } // click handler

  get canvas() {
    return this.#canvas;
  }
} // class
