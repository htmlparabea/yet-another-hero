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
        let cnf = this.config.find(p => p.id === id);

        let props = {
            "luck": 0.2 + 0.15 * cnf.luck,
            "maxLife": 10 + 2 * cnf.defense,
            "life": Math.floor(0.7 * (10 + 2 * cnf.defense)),
            "maxSight": 2 * Math.floor(1 + 0.5 * cnf.hability),
            "sight": Math.floor(1 + 0.5 * cnf.hability),
            "maxShots": Math.ceil(5 + 1.5 * cnf.attack),
            "shots": 0
        };

        return new Hero(cnf.id, cnf.name, props);
    }

}