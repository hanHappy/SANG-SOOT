export default class SlotReel{
    #img;
    #x;
    #y;
    #w;
    #h;
    #reelsImgs;
    #stopImg;
    #stop;
    #spin;
    #index;
    #randNums;




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


        this.#spin = false;
        this.#stop = false;

        //test ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        console.log(this.#x, this.#y, this.#w, this.#h);


        this.#index = 0;
        this.#randNums = new Array(100); //값 30개 배열 생성
        for(let i=0; i<this.#randNums.length; i++){
            this.#randNums[i] = Math.floor(Math.random() * 5);
        } 


        // for(let i=0; i<1; i++){
            // console.log(this.#randNums[]);    
        // }
    }
    
    spin(ctx){
        if(this.#spin){
            let random = Math.floor(Math.random() * this.#img.length);
            let img = this.#img[random];
            let x = this.#x;
            let y = this.#y;
            let w = this.#w;
            let h = this.#h;

            ctx.drawImage(img, x, y, w, h);
            this.#stop = false;
        }
    }

    stop(ctx){
        if(this.#stop){
            let index = this.#index;
            let randNums = this.#randNums[index];
            let img = this.#img[randNums];
            let x = this.#x;
            let y = this.#y;
            let w = this.#w;
            let h = this.#h;

            ctx.drawImage(img, x, y, w, h);
            this.#spin = false;
        }   
    }


    spinCk(){
        this.#spin = true;
        this.#index++;
    }
    stopCk(){
        this.#stop = true;
        this.#spin = false;
    }


    // get index(){
    //         return this.#index;          
    //     }
            

    get index(){
        return this.#randNums[this.#index];          
    }
            

    





    




    
}// class









