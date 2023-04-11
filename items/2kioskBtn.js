// /** @type {HTMLCanvasElement} */
// export default class KioskBtn{

//     #img;
//     #x;
//     #y;
//     #w;
//     #h;
//     #ischecked;

//     // constructor(i, x){
//     //     this.#img = document.getElementById(`btn_${i}`);
//     //     this.#x = x; //세로로 놓여있는 선지라 x좌표 초기화 가능?
//     //     this.#y = 700;
//     //     this.#w = 100;
//     //     this.#h = 70;
//     //     this.#ischecked = false;
//     // }

//     constructor(){
//         //하... 뭐라고 하죠?
//     }


//     draw(ctx){
//         let img = this.#img;
//         let x = this.#x;
//         let y = this.#y;
//         let w = this.#w;
//         let h = this.#h;
//         ctx.drawImage(img, x, y, w, h);
//     }

//     clicked(){
//         this.#ischecked = true;
//         console.log("checked");
//     }
    
//     get x(){
//         return this.#x;
//     }
//     get y(){
//         return this.#y;
//     }
//     get w(){
//         return this.#w;
//     }
//     get h(){
//         return this.#h;
//     }


// }