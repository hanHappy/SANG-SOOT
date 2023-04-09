import TownCanvas from "./ui/0townCanvas.js";
import RestaurantCanvas from "./ui/0restaurantCanvas.js";

let btn = document.getElementById("next");

window.onload = ()=>{
    const townCanvas = new TownCanvas();
    townCanvas.run();
    btn.addEventListener('click', (e) => {
        townCanvas.canvas.remove();
        const rstrntCanvas = new RestaurantCanvas();
    })
}