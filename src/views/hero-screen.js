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
        * @description Available heroes to show.
        * @type {object[]}
        */
        this.heroes = game.getAvailableHeroes();
        /**
         * @private
         * @description Index of the current selected hero.
         * @type {number}
         */
        this.index = 0;
        /**
         * @private 
         * @description Value indicating if the hero is selected.
         * @type {boolean}
         */
        this.isAnimating = false;
        /**
         * @private
         * @description Horizontal offset once the hero is selected.
         * @type {number}
         */
        this.offset = 0;
    }

    /**
     * @inheritdoc
     */
    reset() {
        this.index = 0;
        this.isAnimating = false;
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
        if (this.isAnimating) return;

        if (key === "ArrowLeft") {
            this.game.setCurrentScreen(StartScreen.ID);
        } else if (key === "ArrowRight") {
            this.createHero();
            this.isAnimating = true;
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
        if (this.isAnimating) this.offset++;

        this.drawTitle();
        this.drawFrameBorder();
        this.drawCurrentHero(frame);
        this.drawFadeout();

        const width = this.p.width;
        const o = this.getHorizontalOffset();

        if (0.5 * width + o > width) {
            this.game.setCurrentScreen(null);
        }
    }

    /**
     * @private
     * @description Creates the hero.
     */
    createHero() {
        const hero = this.heroes[this.index];
        this.game.createHero(hero.id);
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
        let o = this.getHorizontalOffset();
        this.p.text("Selecciona tu personaje", x - o, y);
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
        let o = this.getHorizontalOffset();

        this.p.image(sprite, x - o, y, s, s);

        this.p.scale(-1, 1);
        this.p.image(sprite, -x - (2 * s) + o, y, s, s);
        this.p.scale(-1, 1);

        this.p.scale(1, -1);
        this.p.image(sprite, x - o, -y - (2 * s), s, s);
        this.p.scale(1, -1);

        this.p.scale(-1, -1);
        this.p.image(sprite, -x - (2 * s) + o, -y - (2 * s), s, s);
        this.p.scale(-1, -1);
    }

    /**
     * @private
     * @description Draws the current hero.
     */
    drawCurrentHero(frame) {
        const hero = this.heroes[this.index];

        this.drawHeroPortrait(hero);
        this.drawHeroInsights(hero);
        this.drawHeroCharacter(hero, frame);
    }

    /**
     * @private
     * @description Draws the hero portrait.
     * @param {object} hero Current hero.
     */
    drawHeroPortrait(hero) {
        const sprite = this.sprites.heroes[hero.id].portrait;
        let x = 63;// + 10;
        let y = 63;
        //let s = 2 * 74;
        // Alto = 2*74 = 148
        // Ancho = 2*74 + 20 = 168

        let o = this.getHorizontalOffset();
        this.p.image(sprite, x + 45 - o, y + 55);
    }

    /**
     * @private
     * @description Draws the hero character.
     * @param {object} hero Hero.
     * @param {number} frame Current frame index.
     */
    drawHeroCharacter(hero, frame) {
        const width = this.p.width;
        const height = this.p.height;

        let x = 0.5 * width;
        let y = 0.8 * height;

        if (!this.isAnimating) {
            const sprite = this.sprites.heroes[hero.id].idle[frame % 4];
            this.p.image(sprite, x, y, 2 * 16, 2 * 28);
        } else {
            let o = this.getHorizontalOffset();
            const sprite = this.sprites.heroes[hero.id].run[frame % 4];
            this.p.image(sprite, x + o, y, 2 * 16, 2 * 28);
        }
    }

    /**
     * @private
     * @description Draws the hero's info.
     * @param {object} hero Current hero.
     */
    drawHeroInsights(hero) {
        const width = this.p.width;

        this.p.textAlign(this.p.LEFT, this.p.TOP);
        this.p.fill(255);

        let x = 32 + (width / 2) - this.getHorizontalOffset();
        let y = 72;
        let lh = 24; // line height
        let sh = 6;

        this.p.textSize(Screen.TITLE_SIZE);
        this.p.text("NOMBRE", x, y);
        this.p.text("ATAQUE", x, y + (2 * lh) + (1 * sh));
        this.p.text("DEFENSA", x, y + (4 * lh) + (2 * sh));
        this.p.text("HABILIDAD", x, y + (6 * lh) + (3 * sh));
        this.p.text("SUERTE", x, y + (8 * lh) + (4 * sh));

        this.p.textSize(Screen.TEXT_SIZE);
        this.p.text(hero.name, x, y + (1 * lh));
        const v1 = this.convertToStars(hero.attack);
        this.p.text(v1, x, y + (3 * lh) + (1 * sh));
        const v2 = this.convertToStars(hero.defense);
        this.p.text(v2, x, y + (5 * lh) + (2 * sh));
        const v3 = this.convertToStars(hero.hability);
        this.p.text(v3, x, y + (7 * lh) + (3 * sh));
        const v4 = this.convertToStars(hero.luck);
        this.p.text(v4, x, y + (9 * lh) + (4 * sh));
    }

    /**
     * @private
     * @description Draws a fadeout to black.
     */
    drawFadeout() {
        if (this.isAnimating) {
            let d = 255 * this.getHorizontalOffset() / (0.5 * this.p.width);
            let c = this.p.color(0, d);
            this.p.fill(c);
            this.p.rect(0, 0, this.p.width, this.p.height);
        }
    }

    /**
     * @private
     * @description Converts the given value to stars.
     * @param {number} value Value to convert.
     * @returns {string}
     */
    convertToStars(value) {
        let p = "";
        [...Array(value).keys()].forEach(() => p += "**");
        return p;
    }

    /**
     * @private
     * @description Gets the horizontal offset.
     * @returns Number containing horizontal offset for hero and text elements.
     */
    getHorizontalOffset() {
        return this.offset * this.getAnimationSpeed();
    }

}