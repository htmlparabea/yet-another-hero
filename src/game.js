import { HeroFactory } from "./models/hero-factory.js";
import { Board } from "./models/board.js";
import { SpriteCollection } from "./views/sprite-collection.js";
import { StartScreen } from "./views/start-screen.js";
import { HeroScreen } from "./views/hero-screen.js";
import { BoardScreen } from "./views/board-screen.js";

/**
 * @public
 * @description Main class for the game.
 */
export class Game {

    /**
     * @public
     * @constant
     * @type {string}
     * @description Id for the start screen.
     */
    static SCREEN_START = "START";

    /**
     * @public
     * @constant
     * @type {string}
     * @description Id for the hero screen.
     */
    static SCREEN_HERO = "HERO";

    /**
     * @public
     * @constant
     * @type {string}
     * @description Id for the board screen.
     */
    static SCREEN_BOARD = "BOARD";

    /**
     * @public
     * @description Class constructor.
     * @param {object} config Configuration.
     * @param {object} p Instance of p5.js
     */
    constructor(config, p) {
        /**
         * @private
         * @readonly
         * @description Game configuration.
         * @type {object}
         */
        this.config = config;
        /**
         * @private
         * @readonly
         * @description Instance of p5.
         * @type {object}
         */
        this.p = p;
        /**
         * @private
         * @readonly
         * @description Collection of sprites.
         * @type {SpriteCollection}
         */
        this.sprites = new SpriteCollection(config.sprites, p);
        /**
         * @private
         * @readonly
         * @description Factory to create the hero.
         * @type {HeroFactory}
         */
        this.heroFactory = new HeroFactory(config.heroes);
        /**
         * @private
         * @readonly
         * @description Board game.
         * @type {Board}
         */
        this.board = new Board(config.board);
        /**
         * @private
         * @description Font.
         * @type {object}
         */
        this.font = null;
        /**
         * @private
         * @description Collection of screens.
         * @type {object}
         */
        this.screens = {};
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

        this.screens[Game.SCREEN_START] = new StartScreen(this);
        this.screens[Game.SCREEN_HERO] = new HeroScreen(this);
        this.screens[Game.SCREEN_BOARD] = new BoardScreen(this);
        this.currentScreen = this.screens[Game.SCREEN_START];
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
        if (!this.currentScreen) return;

        const x = this.p.mouseX;
        const y = this.p.mouseY;
        this.currentScreen.mouseClicked(x, y);
    }

    /**
     * @public
     * @description Called when a key is pressed.
     */
    keyPressed() {
        if (!this.currentScreen) return;

        const key = this.p.key;
        this.currentScreen.keyPressed(key);
    }

    /**
     * @public
     * @description Called when the screen is drawn.
     */
    draw() {
        this.p.background(0);
        if (!this.currentScreen) return;

        let tmp = (++this.frame) % 100;
        this.frame = tmp < 100 ? tmp : 0;
        this.currentScreen.draw(this.frame);
    }

    /**
     * @public
     * @description Gets the instance of p5.js.
     * @returns {object} Instance of p5.
     */
    getP5() {
        return this.p;
    }

    /**
     * @public
     * @description Gets the collection of sprites.
     * @returns {SpriteCollection} Collection of sprites.
     */
    getSprites() {
        return this.sprites;
    }

    /**
     * @public
     * @description Gets the available heroes.
     * @returns {object[]} Collection of available heroes.
     */
    getAvailableHeroes() {
        return this.heroFactory.getAvailable();
    }

    /**
     * @public
     * @description Creates the hero.
     * @param {object} cnf Hero config.
     */
    loadBoardForHero(cnf) {
        const hero = this.heroFactory.createHero(cnf);
        this.board.load(hero);

        console.log(this.board);
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