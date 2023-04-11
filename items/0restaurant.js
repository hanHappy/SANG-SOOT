export default class Restaurant {
    #posX;
    #posY;
    #rstIndex;
    #name;
    #img;
    #x;
    #y;
    #w;
    #h;
    #infoImg;
    #infoX;
    #infoY;
    #infoW;
    #infoH;
    #menus;
    #mouseover;

    static rstrntIndex = 0;

    constructor(name, i, j, x = 0, y = 0) {
        // 식당 정보
        this.#name = name;
        this.#img = document.getElementById(`rstrnt${i}`);
        this.#x = x;
        this.#y = y;
        this.#w = 180;
        this.#h = 126;
        // 정보 말풍선
        this.#infoImg = document.getElementById(`rstrntInfo${j}`);
        this.#infoX = x;
        this.#infoY = y - 160;
        this.#infoW = 180;
        this.#infoH = 180;
        // 메뉴
        this.#menus = {
            name: [],
            price: [],
            ratedPrice: [],
            value: []
        };

        // mouseover
        this.#mouseover = false;
    }
    // 식당 그리기
    draw(ctx) {
        let img = this.#img;
        let x = this.#x;
        let y = this.#y;
        let w = this.#w;
        let h = this.#h;
        ctx.drawImage(img, x, y, w, h);
    }
    // 정보 그리기
    drawInfo(ctx) {
        if(this.#mouseover){
            let img = this.#infoImg;
            let x = this.#infoX
            let y = this.#infoY;
            let w = this.#infoW;
            let h = this.#infoH;
            ctx.drawImage(img, x, y, w, h);
        }
    }
    
    mouseover(){
        this.#mouseover = true;
    }
    mouseleave(){
        this.#mouseover = false;
    }

    get name(){
        return this.#name;
    }
    get menus(){
        return this.#menus;
    }

    get info(){
        return this.#infoImg;
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

}