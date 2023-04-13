/** @type {HTMLCanvasElement} */

export default class KioskBG{
    //은닉화를 하는 공간
    #img;
    #x;
    #y;

    constructor(){
        //속성 영역
        this.#img = document.getElementById('startkiosk'); //아이디를 통해 html에 있는 요소를 불러온다
        this.#x = 0;
        this.#y = 0;

        this.#img.width = 1150;
        this.#img.height = 820;
   
    }

    draw(ctx){
        let img = this.#img;
        let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
        let y = this.#y;
        let width = this.#img.width;
        let height = this.#img.height;
        ctx.drawImage(img, x, y, width, height);

    }
}