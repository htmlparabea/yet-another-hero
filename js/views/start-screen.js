import { Game } from "../game.js";
import { Screen } from "./screen.js";

/**
 * @public
 * @description Implements the start screen.
 */
export class StartScreen extends Screen {

    /**
     * @public
     * @constant
     * @type {string}
     * @description Id for the start screen.
     */
    static ID = "start";

    /**
     * @public
     * @description Class constructor.
     * @param {Game} game Game.
     */
    constructor(game) {
        super(game);
    }

    /**
     * @inheritdoc
     */
    mouseClicked(x, y) {
        this.game.setCurrentScreen(null);
    }

    /**
     * @inheritdoc
     */
    keyPressed(key) {
        this.game.setCurrentScreen(null);
    }

    /**
     * @inheritdoc
     */
    draw(frame) {
        this.drawBackground();
    }


    /**
    * @private
    * @description Draws the background.
    */
    drawBackground() {
        const sprites = this.game.getSprites();
        const sprite = sprites.backgrounds.start;

        const p = this.game.getP5();
        const width = p.width;
        const height = p.height;

        p.imageMode(p.CENTER);
        p.image(sprite, width / 2, height / 2, height, height);
        p.imageMode(p.CORNER);
    }


}