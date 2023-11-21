// eslint-disable-next-line no-unused-vars
import { Game } from "../game.js";
// eslint-disable-next-line no-unused-vars
import { SpriteCollection } from "./sprite-collection.js";

/**
 * @public
 * @abstract
 * @description Base class for the screens of the game.
 */
export class Screen {

    /**
     * @public
     * @constant
     * @type {Number}
     * @description Text size for titles.
     */
    static TITLE_SIZE = 20;

    /**
     * @public
     * @constant
     * @type {Number}
     * @description Text size for text.
     */
    static TEXT_SIZE = 16;

    /**
     * @public
     * @constant
     * @type {Number}
     * @description Text size for footers.
     */
    static FOOTER_SIZE = 12;

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
        /**
         * @protected
         * @readonly
         * @description Instance of p5.js.
         * @type {object}
         */
        this.p = game.getP5();
        /**
         * @protected
         * @readonly
         * @description Collection of sprites.
         * @type {SpriteCollection}
         */
        this.sprites = game.getSprites();
    }

    /**
      * @public
      * @abstract
      * @description Called when a mouse click occurs.
      * @param {number} x Position in x axis.
      * @param {number} y Position in y axis.
      */
    // eslint-disable-next-line no-unused-vars
    mouseClicked(x, y) {
        throw Error("Implement this!");
    }

    /**
     * @public
     * @abstract
     * @description Called when a key is pressed.
     * @param {string} key Key pressed.
     */
    // eslint-disable-next-line no-unused-vars
    keyPressed(key) {
        throw Error("Implement this!");
    }

    /**
     * @public
     * @abstract
     * @description Called when the screen is drawn.
     * @param {number} frame 
     */
    // eslint-disable-next-line no-unused-vars
    draw(frame) {
        throw Error("Implement this!");
    }

}