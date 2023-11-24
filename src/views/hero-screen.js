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

        this.s = false;//seleccionado -> empieza animación.
        this.e = false;//acaba animación.
        this.offset = 0;
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
        if (this.s) return;

        if (key === "ArrowLeft") {
            this.game.setCurrentScreen(StartScreen.ID);
        } else if (key === "ArrowRight") {
            this.s = true;
            //create hero
            //this.game.setCurrentScreen(null);
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
    draw(frame) {
        this.drawTitle();
        this.drawFrameBorder();
        this.drawCurrentHero(frame);
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
        this.p.text("Selecciona tu personaje", x, y);
    }

    /**
     * @private
     * @description Draws the frame border.
     */
    drawFrameBorder() {
        const sprite = this.sprites.backgrounds.frame;
        let x = 64;
        let y = 64;
        let s = 128;

        this.p.image(sprite, x, y, s, s);

        this.p.scale(-1, 1);
        this.p.image(sprite, -x - (2 * s), y, s, s);
        this.p.scale(-1, 1);

        this.p.scale(1, -1);
        this.p.image(sprite, x, -y - (2 * s), s, s);
        this.p.scale(1, -1);

        this.p.scale(-1, -1);
        this.p.image(sprite, -x - (2 * s), -y - (2 * s), s, s);
        this.p.scale(-1, -1);
    }

    /**
     * @private
     * @description Draws the current hero.
     */
    drawCurrentHero(frame) {
        const hero = this.heroes[this.index];

        this.drawHeroPortrait(hero);
        this.drawHeroInfo(hero);
        this.drawHeroCharacter(hero, frame);
    }

    /**
     * @private
     * @description Draws the hero portrait.
     * @param {object} hero Current hero.
     */
    drawHeroPortrait(hero) {
        const sprite = this.sprites.heroes[hero.id].portrait;
        let x = 64 + 10;
        let y = 64;
        let s = 2 * 73;

        let o = this.getHorizontalOffset();
        this.p.image(sprite, x + 45 - o, y + 55, s, s);
    }

    drawHeroCharacter(hero, frame) {
        const width = this.p.width;
        const height = this.p.height;

        let x = 0.5 * width;
        let y = 0.8 * height;

        if (this.e) {
            this.game.setCurrentScreen(null);
        }
        else if (!this.s) {
            // no se ha seleccionado.
            const sprite = this.sprites.heroes[hero.id].idle[frame % 4];
            this.p.image(sprite, x, y, 2 * 16, 2 * 28);
        } else {
            // se ha seleccionado.
            this.offset++;
            let o = this.getHorizontalOffset();

            if (x + o < width) {
                const sprite = this.sprites.heroes[hero.id].run[frame % 4];
                this.p.image(sprite, x + o, y, 2 * 16, 2 * 28);
            } else {
                this.e = true;
            }
        }
    }

    /**
     * @private
     * @description Draws the hero's info.
     * @param {object} hero Current hero.
     */
    drawHeroInfo(hero) {
        const width = this.p.width;

        this.p.textAlign(this.p.LEFT, this.p.TOP);
        this.p.fill(255);

        let x = 32 + (width / 2) - this.getHorizontalOffset();
        let y = 72;
        let lh = 24; // line height
        let sh = 6;

        this.p.textSize(Screen.TITLE_SIZE);
        this.p.text("Nombre", x, y);
        this.p.text("Energía", x, y + (2 * lh) + (1 * sh));
        this.p.text("Fuerza", x, y + (4 * lh) + (2 * sh));
        this.p.text("Agilidad", x, y + (6 * lh) + (3 * sh));

        this.p.textSize(Screen.TEXT_SIZE);
        this.p.text(hero.name, x, y + (1 * lh));
        const v1 = this.convertToStars(hero.maxLife);
        this.p.text(v1, x, y + (3 * lh) + (1 * sh));
        const v2 = this.convertToStars(hero.maxSight);
        this.p.text(v2, x, y + (5 * lh) + (2 * sh));
        const v3 = this.convertToStars(hero.maxSight);
        this.p.text(v3, x, y + (7 * lh) + (3 * sh));
    }

    /**
     * @private
     * @description Converts the given value to stars.
     * @param {number} value Value to convert.
     * @returns {string}
     */
    convertToStars(value) {
        let p = "";
        [...Array(value).keys()].forEach(() => p += "*");
        return p;
    }

    getHorizontalOffset() {
        return 3 * this.offset * this.p.frameRate();
    }

}