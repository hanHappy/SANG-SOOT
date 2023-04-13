import KioskBG from "../items/2kioskBG.js";
import KioskFood from "../items/2kioskFood.js";
import KioskGauge from "../items/2kioskGauge.js";
import KioskResult from "../items/2kioskResult.js";

export default class KioskCanvas2 {

    // 클래스 은닉화 영역
    #tid;
    #kioskBG;
    #kioskFood;
    #kioskGauge;
    #kioskResult;
    #canvas;
    #ctx;
    #x;
    #y;
    #w;
    #h;
    #nextCanvas;

    // #img;
    // #winImg;
    // #loseImg;
    #submitBtn;
    #submitted;
    #ckBoxes;

    constructor(callback) {
        // 생성자 영역. 모든 속성에는 this가 붙는다. this.#~

        this.#canvas = document.createElement('canvas');
        document.body.append(this.#canvas);
        // this.#canvas.style.display = "none";
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext('2d');
        this.#nextCanvas = callback;

        //html body에 캔버스를 생성
        // 배경, 김밥사진, 체크박스, 줄어드는 게이지, 제출버튼
        this.#tid = null;
        this.#kioskBG = new KioskBG();
        this.#kioskFood = new KioskFood();
        this.#kioskGauge = new KioskGauge();
        this.#kioskResult = new KioskResult();

        this.#submitBtn = document.getElementById('submit-btn');
        this.#submitBtn.addEventListener('click', (e) => { this.click(e) });
        this.#ckBoxes = document.getElementById('ingredient-list');
        this.#submitted = false;
    }

    get canvas() {
        return this.#canvas;
    }

    run() {
        this.#ckBoxes.style.display = "block";

        this.#tid = setInterval(() => {
            this.update();
            this.paint();

        }, 17);
        // this.#kioskFood.hide();
    }
    
    update() {
        this.#kioskGauge.update();
        if(this.#kioskResult.end){
            this.#nextCanvas(this.#canvas);
        }
    }

    paint() {
        this.#kioskBG.draw(this.#ctx); //BG객체의 draw함수 호출
        this.#kioskGauge.draw(this.#ctx);
        if ( this.#kioskGauge.Width > 0) {
            this.#kioskFood.draw(this.#ctx); //Food객체의 draw함수 호출
        }
        if (this.#submitted) {
            this.#kioskResult.draw(this.#ctx);
        }
    }

    click() {
        // 필요한 재료들
        const correctIngredients = ['kim', 'bap', 'bbobbye', 'danmuji', 'carrot', 'egg']; //배열을 담는 상수 공간 //정답데이터
        const selectedIngredients = []; //선택데이터
        const checkboxes = document.querySelectorAll('input[name="ingredient"]'); //체크한것(선택데이터)을 담을수있는 체크박스

        for (const cb of checkboxes) {
            if (cb.checked)
                selectedIngredients.push(cb.value);
        }
        const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        const result = equals(selectedIngredients, correctIngredients);
        // console.log(result);
        this.#kioskResult.checkResult(result);
        this.#kioskResult.draw();

        this.#submitted = true;
        this.#submitBtn.style.display = "none";
        this.#ckBoxes.style.display = "none";
    }
}
