import SlotCanvas from "./1slotUi/1slotCanvas.js";

import SlotMainCanvas from  "./1slotUi/1slotMainCanvas.js";

window.onload = function() {
    // 1. 슬롯 메인 캔버스
    const slotMain = new SlotMainCanvas();
    slotMain.draw();

    const strBtn = document.getElementById("strBtn");
    strBtn.addEventListener("click", (e) => {

        SlotMainCanvas.canvas.remove();
        
        const slotCanvas = new SlotCanvas();
        slotCanvas.run();

    })


    // 2. 슬롯 규칙 캔버스



    // 슬롯 게임 캔버스


}