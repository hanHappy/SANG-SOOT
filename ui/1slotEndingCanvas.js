// const credit = document.getElementById('ending');

// credit.addEventListener('ended', function(){
//     window.location.href = 'main.html';
// });

export default class SlotEndingCanvas{
    #video;
    #canvas;
    #ctx;
    #x;
    #y;

    constructor(){
        this.#canvas = document.createElement("canvas");
        document.body.append(this.#canvas);
        this.#ctx = this.#canvas.getContext("2d");

        this.#canvas.width = 1150;
        this.#canvas.height = 820;

        this.#video = document.getElementById("ending");
        this.#x = 0;
        this.#y = 0;
        this.#video.width = 1150;
        this.#video.height = 820;

    }

    get canvas(){
        return this.#canvas;
    }

    run() {
        
        const draw = () => {
            let x = this.#x;
            let y = this.#y;
            let w = this.#video.width;
            let h = this.#video.height;
            let video = this.#video;
    
            this.#ctx.drawImage(video, x, y, w, h);
            requestAnimationFrame(draw);

        }
        
        this.#video.addEventListener('play', function () {
            requestAnimationFrame(draw);
        });
    }
        

}
