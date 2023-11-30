import { Item } from "./item.js";

/**
 * @public
 * @description Defines the properties of a coin.
 */
export class Coin extends Item {

    /**
     * @public
     * @static
     * @description Creates a new coin.
     * @param {Cell} cell Cell.
     */
    static create(cell) {
        const item = new Coin();
        cell.setItem(item);
        return item;
    }

    /**
     * @public 
     * @description Class constructor.
     */
    constructor() {
        super("coin");
    }

    /**
     * @inheritdoc
     */
    isVisitable(hero) {
        return true;
    }

    /**
     * @inheritdoc
     */
    apply(hero) {
        hero.addCoin();
        return true;
    }

}