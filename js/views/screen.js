import { Game } from "../game.js";

/**
 * @public
 * @abstract
 * @description Base class for the screens of the game.
 */
export class Screen {

    /**
     * @protected
     * @description Class constructor.
     * @param {Game} game Game.
     */
    constructor(game) {
        /**
         * @protected
         * @readonly
         * @description Game.
         * @type {Game}
         */
        this.game = game;
    }

    /**
      * @public
      * @abstract
      * @description Called when a mouse click occurs.
      * @param {number} x Position in x axis.
      * @param {number} y Position in y axis.
      */
    mouseClicked(x, y) {
        throw Error("Implement this!");
    }

    /**
     * @public
     * @abstract
     * @description Called when a key is pressed.
     * @param {string} key Key pressed.
     */
    keyPressed(key) {
        throw Error("Implement this!");
    }

    /**
     * @public
     * @abstract
     * @description Called when the screen is drawn.
     * @param {number} frame 
     */
    draw(frame) {
        throw Error("Implement this!");
    }

}