// eslint-disable-next-line no-unused-vars
import { Element } from "./element.js";
// eslint-disable-next-line no-unused-vars
import { Hero } from "./hero.js";

/**
 * @public
 * @summary Defines a class to represent a cell.
 */
export class Cell {

    /**
     * @public
     * @description Class constructor.
     * @param {number} row Row.
     * @param {number} col Column.
     */
    constructor(row, col) {
        /**
         * @private
         * @readonly
         * @description Row.
         * @type {number}
         */
        this.row = row;
        /**
         * @private
         * @readonly
         * @description Column.
         * @type {number}
         */
        this.col = col;
        /**
         * @private
         * @description Type of floor.
         * @type {number}
         */
        this.floor = 0;
        /**
         * @private
         * @description Element in cell.
         * @type {Element|null}
         */
        this.element = null;

        this.isBlocked = false;
        /**
         * @description Value indicating wheter the element of the cell is shown to user.
         * @type {boolean}
         */
        this.isVisible = false;

        this.counter = 0;

        /**
         * @description Value indicating wheter the hero has already visited the cell.
         * @type {boolean}
         */
        this.isVisited = false;
    }

    /**
     * @public
     * @description Configures the cell as wall.
     */
    setAsWall() {
        this.floor = -1;
        this.element = null;
        this.isBlocked = true;
        this.isVisible = true;
    }

    /**
     * @public
     * @description Configures the cell as floor.
     * @param {number} floor Floor index. 
     */
    setAsFloor(floor) {
        this.floor = floor;
        this.element = null;
        this.isBlocked = false;
        this.isVisible = false;
    }

    /**
     * @public
     * @description Sets the cell as element.
     * @param {Element} element Element in cell.
     */
    setAsElement(element) {
        this.element = element;
        this.isBlocked = false;
        this.isVisible = false;
    }

    // getFloorSprite() {
    //     return this.isVisible ? this.sprite : null;
    // }

    // getElementSprite(frame) {
    //     return this.isVisible && this.element != null ? this.element.getSprite(frame) : null;
    // }

    /**
     * @public
     * @description Moves the hero to the current cell.
     * @param {Hero} hero Hero.
     * @returns {boolean} True if the hero moves to the cell or false otherwise.
     */
    moveHero(hero) {
        if (this.element != null && !this.element.isVisitable(hero)) return false;

        hero.move(this.row, this.col);

        if (this.element != null) {
            if (this.element.apply(hero)) {
                this.element = null;
            }
        }

        return true;
    }

    /**
     * @public
     * @description Updates the status of the current cell.
     * @param {Hero} hero Hero.
     */
    updateStatus(hero) {
        if (this.isBlocked) return;

        if (this.isVisible) {
            this.counter++;
            this.isVisible = this.counter < 5;
        }

        if (Math.abs(hero.row - this.row) < hero.sight && Math.abs(hero.col - this.col) < hero.sight) {
            this.isVisible = true;
            this.counter = 0;
        }

    }

}