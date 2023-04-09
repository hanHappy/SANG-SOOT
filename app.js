import Main from './3quizMain.js';
import Rule from './3quizRule.js';
import Game from './3quizGame.js';

window.onload = function () {
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
}