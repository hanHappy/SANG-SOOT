export default class User{
    #img;
    #x;
    #y;
    #w;
    #h;
    #vx;
    #vy;
    #dx;
    #dy;
    #arrived;
    
    constructor(){
        this.#img = document.getElementById("user");
        this.#x = 30;
        this.#y = 400;
        this.#w = 50;
        this.#h = 100;
        this.#vx = 0;
        this.#vy = 0;
        this.#dx = 0;
        this.#dy = 0;
        this.#arrived = false;

    }

    // 식당으로 이동 --------------------------------------------------
    moveTo(arrivalX, arrivalY){
        this.#dx = arrivalX;
        this.#dy = arrivalY;
        let w = this.#dx - this.#x;
        let h = this.#dy - this.#y;
        let a = Math.sqrt(w*w + h*h);
        this.#vx = 4*w/a;
        this.#vy = 3;
    }

    // 업뎃 ----------------------------------------------------------
    update() {
        this.#x += this.#vx;
        // 목표 x좌표에 도착했을 때 -> x 변화량 = 0
        if (this.#dx - 2 <= this.#x && this.#x <= this.#dx + 2) {
            this.#vx = 0;
        }
        // 목표 y좌표에 도착했을 때 -> y 변화량 = 0
        if (this.#dy - 2 <= this.#y && this.#y <= this.#dy + 2) {
            this.#vy = 0;
            this.#arrived = true;
            return;
        }
        // x 변화량이 0일 때 -> y좌표 이동
        if(this.#vx == 0){
            if(this.#dy > this.#y)
                this.#y += this.#vy;
            if(this.#dy < this.#y)
                this.#y -= this.#vy;
        }
    }

    // 그리기 --------------------------------------------------------
    draw(ctx){
        let img = this.#img;
        let w = this.#w;
        let h = this.#h;
        let x = this.#x - w/2;
        let y = this.#y - h/2;
        ctx.drawImage(img, x, y, w, h);
    }

    get arrived(){
        return this.#arrived;
    }

    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }
    get w(){
        return this.#w;
    }
    get h(){
        return this.#h;
    }
    
} // class