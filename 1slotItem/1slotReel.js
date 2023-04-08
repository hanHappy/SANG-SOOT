export default class SlotReel{
    #img;
    #x;
    #y;
    #w;
    #h;
    #reelsImgs;
    #stopImg;
    #spinBtn;



    constructor(x){ // 생성자는 생성될 때 생성자의 모든 것들이 실행된다
        this.#reelsImgs = 5; // 이미지 갯수
        this.#img = new Array(this.#reelsImgs);
        // 5개의 이미지를 담는 배열 객체 생성
        for (let i = 0; i < this.#img.length; i++) {
            this.#img[i] = (`f${i + 1}`);
            this.#img[i] = document.getElementById(`f${i + 1}`);
        }  // 반복으로 배열에 이미지를 담는다


        
        // this.#img = this.#img;
        this.#x = x;
        this.#y = 284;
        this.#w = 213;
        this.#h = 213;
        this.#stopImg = this.#img[Math.floor(Math.random() * this.#img.length)];
        // 멈춘 이미지를 랜덤으로 선택하여 저장



        //test ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        console.log(this.#x, this.#y, this.#w, this.#h);
        console.log(this.#img);
    }
    
    spin(ctx){
        let random = Math.floor(Math.random() * this.#img.length);
        let img = this.#img[random];
        // let img = this.#img[4];
        let x = this.#x;
        let y = this.#y;
        let w = this.#w;
        let h = this.#h;
        ctx.drawImage(img, x, y, w, h);
    }
    
    stop(ctx){
        // this.#stopImg = this.#img[Math.floor(Math.random() * this.#img.length)];
        
        let img = this.#stopImg;
        // let img = this.#img[Math.floor(Math.random() * this.#img.length)];
        let x = this.#x;
        let y = this.#y;
        let w = this.#w;
        let h = this.#h;
        ctx.drawImage(img, x, y, w, h);


        console.log(img);
    }



    
}