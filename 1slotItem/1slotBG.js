export default class SlotBG{
    #img;
    #x;
    #y;

    constructor(){
        this.#img = document.getElementById("BG"); // html의 이미지를 받아온다
        this.#x = 0;
        this.#y = 0;
        
        this.#img.width = 1150;
        this.#img.height = 820;
    }

    draw(ctx){ // ctx를 넘겨받는다 , 클래스 속성을 사용한다 this.#
        let x = this.#x;
        let y = this.#y;
        let img = this.#img;
        let width = this.#img.width;
        let height = this.#img.height;
        // 함수내부에 지역변수를 사용하여 가독성

        ctx.drawImage(img, x, y, width, height); 
        // 이미지를 그려준다
        // console.log("draw");
    }


}