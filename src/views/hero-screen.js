// eslint-disable-next-line no-unused-vars
import { Game } from "../game.js";
import { Screen } from "./screen.js";
import { StartScreen } from "./start-screen.js";

/**
 * @public
 * @description Implements the hero selection screen.
 */
export class HeroScreen extends Screen {

    /**
     * @public
     * @constant
     * @type {string}
     * @description Id for the hero screen.
     */
    static ID = "HERO";

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
        * @description Available herpes to show.
        * @type {object[]}
        */
        this.heroes = game.getAvailableHeroes();
        /**
         * @private
         * @description Index of the current selected hero.
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
        if (key === "ArrowLeft") {
            this.game.setCurrentScreen(StartScreen.ID);
        } else if (key === "ArrowRight") {
            //create hero
            this.game.setCurrentScreen(null);
        } else if (key === "ArrowDown") {
            const max = this.heroes.length - 1;
            this.index = (this.index + 1) > max ? max : this.index + 1;
        } else if (key === "ArrowUp") {
            const min = 0;
            this.index = (this.index - 1) < min ? min : this.index - 1;
        }
    }

    /**
     * @inheritdoc
     */
    // eslint-disable-next-line no-unused-vars
    draw(frame) {
        this.drawTitle();
        this.drawCurrentHero();
    }

    /**
     * @private
     * @description Draws the title.
     */
    drawTitle() {
        const width = this.p.width;

        this.p.textAlign(this.p.CENTER, this.p.CENTER);
        this.p.textSize(Screen.TITLE_SIZE);
        this.p.fill(255);

        let x = width / 2;
        let y = 24;
        this.p.text("Selecciona un personaje", x, y);
    }

    /**
     * @private
     * @description Draws the current hero.
     */
    drawCurrentHero() {
        const hero = this.heroes[this.index];
        const sprite = this.sprites.heroes[hero.id].portrait;

        this.p.image(sprite, 64, 64, 256, 256);

        //this.drawHeroName(x, y, hero.name);


        // let size = 32;
        // let xpad = 0;
        // let ypad = 16;
        // let xoffset;
        // let yoffset;
        // const sprite = this.sprites.getHero(hero.id, "idle", frame);
        // this.p.image(sprite, x + xpad, y + ypad, size, size);

        // xpad = -32;
        // xoffset = 96;
        // yoffset = 32;
        // this.drawInsigth((x + xpad) + xoffset, y + yoffset, "Life", hero.life);
        // this.drawInsigth((x + xpad) + 2 * xoffset, y + yoffset, "Power", 5);
        // this.drawInsigth((x + xpad) + 3 * xoffset, y + yoffset, "Sight", hero.sight);
    }

}