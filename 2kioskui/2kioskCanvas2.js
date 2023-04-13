import KioskBG from "../2kioskitem/2kioskBG.js";
import KioskFood from "../2kioskitem/2kioskFood.js";
import KioskGauge from "../2kioskitem/2kioskGauge.js";
import KioskResult from "../2kioskitem/2kioskResult.js";

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

    //#kioskBtnNums;
    #img;
    #submitBtn;
    #winImg;
    #loseImg;
    #submitted;
    #ckBoxes;

    constructor() {
        // 생성자 영역. 모든 속성에는 this가 붙는다. this.#~

        this.#canvas = document.createElement('canvas');
        document.body.append(this.#canvas);
        this.#canvas.width = 1150;
        this.#canvas.height = 820;
        this.#ctx = this.#canvas.getContext('2d');
        //html body에 캔버스를 생성

        // 배경, 김밥사진, 체크박스, 줄어드는 게이지, 제출버튼
        this.#tid = null;
        this.#kioskBG = new KioskBG();
        this.#kioskFood = new KioskFood();
        this.#kioskGauge = new KioskGauge();
        this.#kioskResult = new KioskResult();

        
        
        this.#winImg = document.getElementById('win');
        this.#loseImg = document.getElementById('lose');
        
        this.#x = 100;
        this.#y = 200;
        this.#w = 300;
        this.#h = 300;
        
        this.#submitBtn = document.getElementById('submit-btn');
        this.#submitBtn.style.display = "block"; //""이렇게해도 작동되네 신기하네?
        this.#submitBtn.addEventListener('click', (e) => {this.click(e)});

        this.#ckBoxes = document.getElementById('ingredient-list');
        this.#ckBoxes.style.display = "block";
        this.#submitted = false;
        
    }

    run() {

        this.#tid = setInterval(() => {
            this.update();
            this.paint();

        }, 17);
    }


    update() {
        this.#kioskGauge.update();
    }

    paint() {
        this.#kioskBG.draw(this.#ctx); //BG객체의 draw함수 호출
        this.#kioskFood.draw(this.#ctx); //Food객체의 draw함수 호출
        this.#kioskGauge.draw(this.#ctx);
        if(this.#submitted){
            this.#kioskResult.draw(this.#ctx);
        }
    }

    click(){
        // 필요한 재료들
        const correctIngredients = ['kim', 'bap', 'wooeong', 'danmuji', 'egg']; //배열을 담는 상수 공간 //정답데이터
        const selectedIngredients = []; //선택데이터
        const checkboxes = document.querySelectorAll('input[name="ingredient"]'); //체크한것(선택데이터)을 담을수있는 체크박스
    
        for (const cb of checkboxes) {
            if (cb.checked)
                selectedIngredients.push(cb.value);
        }
        const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        const result = equals(selectedIngredients, correctIngredients);
        console.log(result);
        this.#kioskResult.checkResult(result);
        this.#submitted = true;
        this.#submitBtn.style.display = "none";
        this.#ckBoxes.style.display = "none";

        // this.#startBtn.style.display = "none";
    }

}

