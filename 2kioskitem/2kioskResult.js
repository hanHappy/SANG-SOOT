export default class KioskResult{

    #win;
    #winImg;
    #loseImg;
    #x;
    #y;


    constructor(){

        this.#x = 0;
        this.#y = 0;

        this.#winImg = document.getElementById('win');
        this.#winImg.width = 1150;
        this.#winImg.height = 820;

        this.#loseImg = document.getElementById('lose');
        this.#loseImg.width = 1150;
        this.#loseImg.height = 820;

        this.#win = true;

    }

    draw(ctx){
        if(this.#win){
            let img = this.#winImg;
            let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
            let y = this.#y;
            let width = this.#winImg.width;
            let height = this.#winImg.height;
            ctx.drawImage(img, x, y, width, height);
        } else {
            let img = this.#loseImg;
            let x = this.#x; //지역변수를 만들어서 값을 넣어주기^*^
            let y = this.#y;
            let width = this.#loseImg.width;
            let height = this.#loseImg.height;
            ctx.drawImage(img, x, y, width, height);
        }
        
    }

    checkResult(result){
        if(result){
            this.#win = true
        } else{
            this.#win = false
        }
    }

}