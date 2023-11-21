// eslint-disable-next-line no-unused-vars
import { Game } from "../game.js";
import { Screen } from "./screen.js";
import { HeroScreen } from "./hero-screen.js";

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
    static ID = "START";

    static OPTION_PLAY = "PLAY";

    static OPTION_CONFIGURE = "CONFIGURE";

    /**
     * @public
     * @description Class constructor.
     * @param {Game} game Game.
     */
    constructor(game) {
        super(game);
        /**
         * @private
         * @readonly
         * @description Options to show.
         * @type {object[]}
         */
        this.options = [
            {
                "value": StartScreen.OPTION_PLAY,
                "text": "Jugar"
            },
            {
                "value": StartScreen.OPTION_CONFIGURE,
                "text": "Opciones"
            }
        ];
        /**
         * @private
         * @description Index of the selected option.
         * @type {number}
         */
        this.index = 0;
    }

    /**
     * @inheritdoc
     */
    // eslint-disable-next-line no-unused-vars
    mouseClicked(x, y) {
        //this.game.setCurrentScreen(null);
    }

    /**
     * @inheritdoc
     */
    keyPressed(key) {
        if (key === "ArrowRight") {
            const ns = this.getNextScreen();
            this.game.setCurrentScreen(ns);
        } else if (key === "ArrowDown") {
            const max = this.options.length - 1;
            this.index = (this.index + 1) > max ? max : this.index + 1;
        } else if (key === "ArrowUp") {
            const min = 0;
            this.index = (this.index - 1) < min ? min : this.index - 1;
        }
    }

    /**
     * @private
     * @description Gets the ID for the next screen.
     * @returns {string|null} Id for the next screen.
     */
    getNextScreen() {
        const opt = this.options[this.index];

        if (opt.value === StartScreen.OPTION_PLAY) {
            return HeroScreen.ID;
        }

        return null;
    }

    /**
     * @inheritdoc
     */
    // eslint-disable-next-line no-unused-vars
    draw(frame) {
        this.drawBackground();
        this.drawOptions();
        this.drawDate();
    }

    /**
    * @private
    * @description Draws the background.
    */
    drawBackground() {
        const sprite = this.sprites.backgrounds.start;
        const width = this.p.width;
        const height = this.p.height;

        this.p.imageMode(this.p.CENTER);
        this.p.image(sprite, width / 2, height / 2, height, height);
        this.p.imageMode(this.p.CORNER);
    }

    /**
     * @private
     * @description Draws the screen options.
     */
    drawOptions() {
        const width = this.p.width;
        const height = this.p.height;

        this.p.textAlign(this.p.LEFT, this.p.CENTER);
        this.p.textSize(Screen.TEXT_SIZE);
        this.p.fill(255);

        let x = 0.36 * width;
        let y = 0.75 * height;

        for (let i = 0; i < this.options.length; i++) {
            let opt = this.options[i];
            let txt = (i === this.index) ? `> ${opt.text}` : `  ${opt.text}`;
            this.p.text(txt, x, y + i * 24);
        }
    }

    /**
     * @private
     * @description Draws the date.
     */
    drawDate() {
        const width = this.p.width;
        const height = this.p.height;

        this.p.textAlign(this.p.CENTER, this.p.CENTER);
        this.p.textSize(Screen.FOOTER_SIZE);
        this.p.fill(255);

        let x = width / 2;
        let y = height - 24;
        this.p.text("2023, htmlparabea", x, y);
    }

}