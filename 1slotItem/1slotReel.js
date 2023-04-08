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
        // this.#stopImg = this.#img[Math.floor(Math.random() * this.#img.length)];
        // 멈춘 이미지를 랜덤으로 선택하여 저장

        this.#spin = false;
        this.#stop = false;
        //test ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        console.log(this.#x, this.#y, this.#w, this.#h);
        console.log(this.#img);

        // this.#rand = Math.floor(Math.random() * 2) + 1;
        // this.#randArr = this.#randArr[this.#rand];
        // console.log(this.#randArr);

        this.#index = 0;
        this.#randNums = new Array(50); //값 30개 배열 생성
        for(let i=0; i<this.#randNums.length; i++){
            this.#randNums[i] = Math.floor(Math.random() * 5);
        }
    }
    
    
    spin(ctx){
        if(this.#spin){
            // let img = this.#img[4];
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
//속성을 함수 내부 변수로
    stop(ctx){
        if(this.#stop){
            let index = this.#index;
            let randNums = this.#randNums[index];
            // console.log(randNums);
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
        // this.#spin = false;
    }



    
}// class




    // stop(ctx){
    //     // this.#stopImg = this.#img[Math.floor(Math.random() * this.#img.length)];
        
    //     let img = this.#stopImg;
    //     // let img = Math.floor(Math.random() * this.#img.length);
    //     let x = this.#x;
    //     let y = this.#y;
    //     let w = this.#w;
    //     let h = this.#h;
    //     ctx.drawImage(img, x, y, w, h);

    //     console.log(img);
    // }
