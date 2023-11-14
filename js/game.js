import { SpriteCollection } from "./views/sprite-collection.js";

/**
 * @public
 * @description Main class for the game.
 */
export class Game {

    /**
     * @public
     * @description Class constructor.
     * @param {object} config Configuration.
     * @param {object} p Instance of p5.js
     */
    constructor(config, p) {
        /**
         * @private
         * @description Game configuration.
         * @type {object}
         */
        this.config = config;
        /**
         * @private
         * @description Instance of p5.
         * @type {object}
         */
        this.p = p;
        /**
         * @private
         * @description Font.
         * @type {object}
         */
        this.font = null;
        /**
         * @private
         * @description Collection of sprites.
         * @type {SpriteCollection}
         */
        this.sprites = new SpriteCollection(config.sprites, p);
        /**
         * @private
         * @description Collection of screens.
         * @type {object}
         */
        this.screens = {
            "start": null,
            "hero": null,
            "board": null
        };
        /**
         * @private
         * @description Current screen.
         * @type {Screen}
         */
        this.currentScreen = null;
        /**
         * @private
         * @description Current frame.
         * @type {number}
         */
        this.frame = 0;
    }

    /**
     * @public
     * @description Preloads all the resources.
     */
    preload() {
        this.font = this.p.loadFont(`../fonts/${this.config.font}`);
        this.sprites.preload();
    }

    /**
     * @public
     * @description Configures the game.
     */
    setup() {
        this.p.createCanvas(this.config.width, this.config.height);
        this.p.frameRate(5);
        this.p.noStroke();
        this.p.textFont(this.font);
    }

    /**
     * @public
     * @description Called when a mouse click occurs.
     */
    mouseClicked() {
        const x = this.p.mouseX;
        const y = this.p.mouseY;
        this.currentScreen.mouseClicked(x, y);
    }

    /**
     * @public
     * @description Called when a key is pressed.
     */
    keyPressed() {
        const key = this.p.key;
        this.currentScreen.keyPressed(key);
    }

    /**
     * @public
     * @description Called when the screen is drawn.
     */
    draw() {
        let tmp = (++this.frame) % 100;
        this.frame = tmp < 100 ? tmp : 0;
        this.currentScreen.draw(this.frame);
    }

    /**
     * @public
     * @description Gets the font for the texts.
     * @returns {object} Font.
     */
    getFont() {
        return this.font;
    }

    /**
     * @public
     * @description Sets the current screen.
     * @param {string} id Id of the screen.
     */
    setCurrentScreen(id) {
        this.currentScreen = this.screens[id];
    }

}