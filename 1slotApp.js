import SlotMainCanvas from  "./1slotUi/1slotMainCanvas.js";
import SlotRuleCanvas from "./1slotUi/1slotRuleCanvas.js";
import SlotCanvas from "./1slotUi/1slotCanvas.js";
import SlotGauge from "./1slotItem/1slotGauge.js";
import SlotGameoverCanvas from "./1slotUi/1slotGameover.js";


window.onload = function() {
    // 1. 슬롯 메인 캔버스
    const slotMain = new SlotMainCanvas();
    slotMain.run();
    
    // const strBtn = document.getElementById("strBtn");
    
    
    // 2. 슬롯 규칙 캔버스
    const slotRule = new SlotRuleCanvas();
    strBtn.addEventListener("click", (e) => {
        slotMain.canvas.remove();
        slotRule.run();
        document.getElementById("strBtn").style.display = "none";
        document.getElementById("conBtn").style.display = "block";
    })
    
    
    // 3. 슬롯 게임 캔버스
    const slotCanvas = new SlotCanvas();
    conBtn.addEventListener("click", (e) =>{
        slotRule.canvas.remove();
        slotCanvas.run();
        document.getElementById("conBtn").style.display = "none";
        document.getElementById("spinBtn").style.display = "block";
        document.getElementById("stop1").style.display = "block";
        document.getElementById("stop2").style.display = "block";
        document.getElementById("stop3").style.display = "block";
    })
    
    
    
    const slotGuage = new SlotGauge();
    const slotGameover = new SlotGameoverCanvas();
    //  = this.onDisPage.bind(this);
    






    
    // if(slotGuage.gaugeOver){    
    //     // console.log(slotGuage.gaugeOver);
    //     onDisPage()
    //     {
    //         slotGameover.run();
    //         slotCanvas.canvas.remove();
    //         document.getElementById("spinBtn").style.display = "none";
    //         document.getElementById("stop1").style.display = "none";
    //         document.getElementById("stop2").style.display = "none";
    //         document.getElementById("stop3").style.display = "none";
            
    //     }
    // }
    

    // 슬롯 게임 캔버스


} // window.onload