import TownCanvas from "./ui/0townCanvas.js";
import RestaurantCanvas from "./ui/0restaurantCanvas.js";
import User from "./items/0user.js";
import Main from './ui/3quizMain.js';
import Rule from './ui/3quizRule.js';
import Game from './ui/3quizGame.js';

window.onload = () => {
    
    // 첫 번째 캔버스
    const townCanvas = new TownCanvas();
    townCanvas.run();

    // 두 번째 캔버스
    townCanvas.canvas.addEventListener("click", (e) => {
        // 예진 도착 여부 확인
        let checkPosition = setInterval(() => {
            // 예진 -> 식당에 도착하면
            if (User.arrived) {
                townCanvas.canvas.remove();
                clearInterval(checkPosition);
                const rstrntCanvas = new RestaurantCanvas();
            } // 도착하면
        }, 100); // set interval
    });

    //=======================세영
    let main = new Main();
    main.run();

    main.obj.addEventListener('click', (e) => {
        main.obj.remove();
        let rule = new Rule();
        rule.run();

        rule.obj.addEventListener('click', (e) => {
            rule.obj.remove();
            let game = new Game();
            game.run();
        })
    });
};

