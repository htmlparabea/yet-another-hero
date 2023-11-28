// eslint-disable-next-line no-unused-vars
import { Hero } from "./hero.js";

/**
 * @public
 * @abstract
 * @description Defines an element contained in a cell.
 */
export class Element {

    /**
     * @public
     * @description Class constructor.
     * @param {string} id Element ID.
     */
    constructor(id) {
        /**
         * @public
         * @readonly
         * @description Element Id.
         * @type {string}
         */
        this.id = id;
    }

    /**
     * @public
     * @abstract
     * @description Checks if the cell is visitable given the current element.
     * @param {Hero} hero Hero.
     * @returns {boolean} True if the hero can visit the cell or false otherwise.
     */
    // eslint-disable-next-line no-unused-vars
    isVisitable(hero) {
        throw new Error("Implement this!");
    }

    /**
     * @public
     * @abstract
     * @description Applies the element over the hero.
     * @param {Hero} hero Hero.
     * @returns {boolean} True if remove element from cell or false if not.
     */
    // eslint-disable-next-line no-unused-vars
    apply(hero) {
        throw new Error("Implement this!");
    }

}