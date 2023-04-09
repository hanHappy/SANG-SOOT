import KioskCanvas0 from "./2kioskui/2kioskCanvas0.js";
import KioskCanvas1 from "./2kioskui/2kioskCanvas1.js";
import KioskCanvas2 from "./2kioskui/2kioskCanvas2.js";

window.onload = () => {
    //첫번째 캔버스
    const kioskCanvas0 = new KioskCanvas0();
    kioskCanvas0.draw();
    const startBtn = document.getElementById('start-btn');
    const kioskCanvas1 = new KioskCanvas1();
    startBtn.addEventListener('click', (e) => {
        //두번째 캔버스
        kioskCanvas0.canvas.remove();
        kioskCanvas1.draw();
    });
    //세번째 캔버스
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', (e) => {
        kioskCanvas1.canvas.remove();
        const kioskCanvas2 = new KioskCanvas2();
        kioskCanvas2.run();
    })
}
    