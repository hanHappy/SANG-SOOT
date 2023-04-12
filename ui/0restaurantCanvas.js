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
    this.#menu = new Menu(this.#ctx);

    // click ---------------------------------------------------------
    this.#sceneIndex = 0;
    this.#canvas.onclick = this.clickHandler.bind(this);

    // images --------------------------------------------------------
    this.#sceneNums = 17;
    this.#scenes = new Array(this.#sceneNums);
    // html에서 scenes 이미지 가져오기
    for (let i = 0; i < this.#scenes.length; i++) {
      this.#scenes[i] = document.getElementById(`inRstrnt${i}`);
    }
  } // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  // 클릭할 때마다 다음 scene으로 넘어감
  clickHandler() {
    if (this.#sceneIndex == 1 || this.#sceneIndex == 9)
      return;
    this.#sceneIndex++;
    this.draw();

    // Scene_1 : 메뉴판
    if (this.#sceneIndex == 1)
      this.scene1(this.#menu);
    // Scene_9 : 평가
    if (this.#sceneIndex == 9)
      this.scene9(this.#menu);
  } // click handler

  // Scene_0 : 어서오세요~
  welcome() {
    this.draw();
    let rstrntName = TownCanvas.rstrnts[Restaurant.rstrntIndex].name;
    this.#ctx.font = "37px dgm";
    this.#ctx.fillText(`${rstrntName}입니다!`, 330, 687);
  }

  // Scene_1 : 메뉴판
  scene1(menu) {
    menu.printInfo(this.#ctx);
    let btn = document.getElementById("S1-next");
    btn.style.display = "block";
    btn.addEventListener('click', function () {
      this.#sceneIndex++;
      this.draw();
      this.#menu.removeBtn();
      btn.style.display = "none";
    }.bind(this))
  }

  // Scene_9 : 음식 평가
  scene9(menu) {
    let name = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.name[Menu.menuIndex];
    let price = TownCanvas.rstrnts[Restaurant.rstrntIndex].menus.price[Menu.menuIndex];
    this.#ctx.font = "35px dgm";
    // 메뉴명
    this.#ctx.fillText(name, 122, 530);
    // 판매가격
    this.#ctx.fillText(price, 255, 618);
    // 평가
    let form = document.getElementById("S9-form");
    form.style.display = "block";
    // 입력 박스
    let input = document.getElementById("S9-input");
    // 평가 버튼
    let submit = document.getElementById("S9-submit");
    submit.addEventListener('click', function () {
      // if 판매 가격 <= 평가 가격
      if (price <= input.value) {
        this.#sceneIndex++; // -> Scene_10
        this.draw();
        form.style.display = "none";
      } else {
        // else 판매 가격 > 평가 가격
        this.#sceneIndex += 3; // -> Scene_12
        this.draw();
        form.style.display = "none";
      }
    }.bind(this));

  }
  draw() {
    let scene = this.#scenes[this.#sceneIndex];
    let x = this.#x;
    let y = this.#y;
    let w = this.#w;
    let h = this.#h;
    this.#ctx.drawImage(scene, x, y, w, h);
  }

  get canvas() {
    return this.#canvas;
  }

} // class
