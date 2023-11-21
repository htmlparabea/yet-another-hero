import { Hero } from "./hero.js";

/**
 * @public
 * @description Factory to create the hero.
 */
export class HeroFactory {

    /**
     * @public
     * @description Class constructor.
     * @param {object} config Configuration.
     */
    constructor(config) {
        /**
         * @private
         * @description Configuration.
         * @type {object}
         */
        this.config = config;
    }

    /**
     * @public
     * @description Gets the available heroes.
     * @returns {object[]} Collection of available heroes.
     */
    getAvailable() {
        const keys = Object.keys(this.config);
        return keys.map(p => this.config[p]);
    }

    /**
     * @public
     * @description Creates a new hero.
     * @param {string} id Hero id.
     * @returns {Hero} New hero.
     */
    createHero(id) {
        return new Hero();
    }

}