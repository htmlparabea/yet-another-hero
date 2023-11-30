import { Cell } from "./cell.js";
import { Item } from "./item.js";

/**
 * @public
 * @description Defines the properties of a column.
 */
export class Column extends Item {

    /**
     * @public
     * @static
     * @description Creates a new column.
     * @param {Cell} cell Cell.
     */
    static create(cell) {
        const item = new Column();
        cell.setItem(item);
        return item;
    }

    /**
     * Class constructor.
     */
    constructor() {
        super("column");
    }

    /**
      * @inheritdoc
      */
    isVisitable(hero) {
        return hero.useWeapon("hammer");
    }

    /**
     * @inheritdoc
     */
    apply(hero) {
        return true;
    }

}