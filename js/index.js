import { config } from "./config.js";
import { Game } from "./game.js";

let main = (p) => {
    /**
     * @description Game logic.
     * @type {Game}
     */
    const game = new Game(config, p);

    p.preload = () => {
        game.preload();
    };

    p.setup = () => {
        game.setup();
    };

    p.mouseClicked = () => {
        game.mouseClicked();
    };

    p.keyPressed = () => {
        game.keyPressed();
    };

    p.draw = () => {
        game.draw();
    };

}

let myp5 = new p5(main);