export default class SlotGauge{
    #x;
    #y;
    #width;
    #height;
    #color;

    #vx;
    #vy;

    constructor(){
        this.#x = 20;
        this.#y = 31;
        this.#width =1100;
        this.#height =50;
        this.#color = "red";
        
        this.#vx = 0;
        this.#vy = 0;

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

    update(){
        if(this.#width <= 0){ 
            return;
        }
        this.#width -= 1;
    }
    // 게이지가 0이하로 줄어들면 너비가 0에서 멈추도록한다

}



// 릴세트