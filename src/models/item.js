// eslint-disable-next-line no-unused-vars
import { Hero } from "./hero.js";

/**
 * @public
 * @abstract
 * @description Defines an item contained in a cell.
 */
export class Item {

    /**
     * @protected
     * @description Class constructor.
     * @param {string} id Item ID.
     */
    constructor(id) {
        /**
         * @public
         * @readonly
         * @description Item Id.
         * @type {string}
         */
        this.id = id;
    }

    /**
     * @public
     * @abstract
     * @description Checks if the cell is visitable given the current item.
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
     * @description Applies the item over the hero.
     * @param {Hero} hero Hero.
     * @returns {boolean} True if remove item from cell or false otherwise.
     */
    // eslint-disable-next-line no-unused-vars
    apply(hero) {
        throw new Error("Implement this!");
    }

}