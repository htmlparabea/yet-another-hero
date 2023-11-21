/**
 * @summary Defines a class for the hero.
 */
export class Hero {

    /**
     * @public
     * @description Class constructor.
     */
    constructor() {
        /**
         * @description Row.
         * @type {number}
         */
        this.row = 0;
        /**
         * @description Column.
         * @type {number}
         */
        this.col = 0;
        /**
         * @description Life.
         * @type {number}
         */
        this.life = 10;
        /**
         * @description Max life.
         * @type {number}
         */
        this.maxLife = 10;

        this.sight = 5;

        this.maxSight = 4;

        this.coins = 0;

        this.weapon = null;
    }

    /**
     * @public
     * @description Moves the hero.
     * @param {number} row New row.
     * @param {number} col New col.
     */
    move(row, col) {
        if (row >= 0 && col >= 0) {
            this.row = row;
            this.col = col;
        }
    }

    /**
     * Add the given units of life to the hero.
     * @param {number} units Units of life.
     */
    addLife(units) {
        if (this.life > 0 && this.life <= this.maxLife) {
            this.life += units;
            if (this.life > this.maxLife)
                this.life = this.maxLife;
        }
    }

    addCoin() {
        this.coins++;
    }

    /**
     * @public
     * @description Sets the weapon of the hero.
     * @param {object|null} weapon Weapon.
     */
    setWeapon(weapon) {
        this.weapon = weapon;
    }

    useWeapon(type) {
        if (!this.weapon) return false;

        if (type === "hammer" && this.weapon.type === "hammer") {
            this.weapon.power--;
            return this.weapon.power > 0;
        }

        return false;
    }
}