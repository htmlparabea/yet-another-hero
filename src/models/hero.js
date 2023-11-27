/**
 * @summary Defines a class for the hero.
 */
export class Hero {

    /**
     * @public
     * @description Class constructor.
     * @param {string} id Hero id.
     * @param {string} name Hero name.
     * @param {object} props Hero properties.
     */
    constructor(id, name, props) {
        /**
         * @public
         * @readonly
         * @description Id.
         * @type {string}
         */
        this.id = id;
        /**
         * @public
         * @readonly
         * @description Name.
         * @type {string}
         */
        this.name = name;
        /**
         * @private
         * @description Row.
         * @type {number}
         */
        this.row = 0;
        /**
         * @private
         * @description Column.
         * @type {number}
         */
        this.col = 0;
        /**
         * @private
         * @description Luck.
         * @type {number}
         */
        this.luck = props.luck;
        /**
         * @private
         * @description Current life.
         * @type {number}
         */
        this.life = props.life;
        /**
         * @private
         * @description Max life.
         * @type {number}
         */
        this.maxLife = props.maxLife;
        /**
         * @private
         * @description Sight.
         * @type {number}
         */
        this.sight = props.sight;
        /**
         * @private
         * @description Max sight.
         * @type {number}
         */
        this.maxSight = props.maxSight;
        /**
         * @private
         * @description Remaining shots.
         * @type {number}
         */
        this.shots = props.shots;
        /**
         * @private
         * @description Max shots.
         * @type {number}
         */
        this.maxShots = props.maxShots;
        /**
         * @private
         * @description Current weapon.
         * @type {object|null}
         */
        this.weapon = null;
        /**
         * @private
         * @description Number of coins.
         * @type {number}
         */
        this.coins = 0;
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