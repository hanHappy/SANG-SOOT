export default class SlotGauge{
    #x;
    #y;
    #width;
    #height;
    #color;
    #disappear;


    constructor(){
        this.#x = 20;
        this.#y = 31;
        this.#width =1100;
        this.#height =50;
        this.#color = "red";

        this.#disappear = null;
    }
    
    //콜백
    set disappear(callBack){
        this.#disappear = callBack;
    }

    update(){
        if(this.#width <= 0){
            if(this.#disappear){
                this.#disappear();
            }
            return;
        }
        // 게이지가 0이하로 줄어들면 다음페이지
        this.#width -= 1;
    }
        
    draw(ctx){
        let x = this.#x;
        let y = this.#y;
        let w = this.#width;
        let h = this.#height;
        let color = this.#color;

        ctx.fillStyle = color;
        ctx.strokeStyle = "yellow";
        ctx.lineWidth = 15;
        ctx.strokeRect(x, y, 1100, 50);
        ctx.fillRect(x, y, w, h);
    }
}

