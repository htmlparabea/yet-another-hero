import { Cell } from "./cell.js";
import { Hero } from "./hero.js";
import { Coin } from "./coin.js";
import { Column } from "./column.js";
//import { HammerFactory } from "./hammer-factory.js";
//import { LadderFactory } from "./ladder-factory.js";
//import { PotionFactory } from "./potion-factory.js";
//import { SkullFactory } from "./skull-factory.js";
//import { ElementFactory } from "./element-factory.js";

/**
 * @public
 * @summary Defines a class for the board.
 */
export class Board {

    /**
     * @public
     * @description Class constructor.
     * @param {object} config Configuration.
     */
    constructor(config) {
        /**
         * @private
         * @readonly
         * @description Configuration.
         * @type {object}
         */
        this.config = config;
        /**
         * @private
         * @readonly
         * @description Max row.
         * @type {number}
         */
        this.maxRow = config.grid.rows - 1;
        /**
         * @private
         * @readonly
         * @description Max col.
         * @type {number}
         */
        this.maxCol = config.grid.cols - 1;
        /**
         * @private
         * @description Hero.
         * @type {Hero|null}
         */
        this.hero = null;
        /**
         * @private
         * @description Collection of cells.
         * @type {Cell[]}
         */
        this.cells = [];
        /**
         * @private
         * @description Start time.
         * @type {Date|null}
         */
        this.startTime = null;
    }

    /**
     * @public
     * @description Loads the game.
     * @param {Hero} hero Hero.
     */
    load(hero) {
        this.hero = hero;
        this.initGrid();
        this.setupWalls();
        this.setupFloor();
        this.setupItems();
        //this.setupHero(config.hero);
        //this.updateStatus();
    }

    /**
     * @private
     * @description Initializes the cells.
     */
    initGrid() {
        this.cells.length = 0;
        for (let i = 0; i < this.config.grid.rows; i++) {
            for (let j = 0; j < this.config.grid.cols; j++) {
                this.cells.push(new Cell(i, j));
            }
        }
    }

    /**
     * @private
     * @description Configures the walls.
     */
    setupWalls() {
        const f = (p) => {
            return p.row === 0
                || p.row === this.maxRow
                || p.col === 0
                || p.col === this.maxCol;
        };

        this.cells.filter(p => f(p))
            .forEach(p => p.setAsWall());
    }

    /**
     * @private
     * @description Configures the floor.
     */
    setupFloor() {
        const f = (p) => {
            return p.row > 0
                && p.row < this.maxRow
                && p.col > 0
                && p.col < this.maxCol;
        };

        const m = 8; //TODO.

        this.cells.filter(p => f(p))
            .forEach(p => p.setAsFloor(1 + Math.floor(m * Math.random())));
    }

    /**
     * @private
     * @description Configures the items at the castle.
     */
    setupItems() {
        this.setupColumns();
        this.setupCoins();

        // this.setupItem(new LadderFactory(this.sprites, config.ladders));
        // this.setupItem(new PotionFactory(this.sprites, config.potions));
        // this.setupItem(new HammerFactory(this.sprites, config.hammers));
        // this.setupItem(new SkullFactory(this.sprites, config.skulls));
    }

    /**
    * @private
    * @description Configures the columns.
    */
    setupColumns() {
        const cnf = this.config.items.columns;

        var rows = [...Array(this.maxRow - 4).keys()]
            .map(m => m + 2)
            .filter(() => Math.random() < cnf.rowDensity);
        var cols = [...Array(this.maxCol - 4).keys()]
            .map(m => m + 2)
            .filter(() => Math.random() < cnf.colDensity);

        const f = (p) => {
            return rows.includes(p.row) && cols.includes(p.col);
        };

        this.cells.filter(p => f(p)).forEach(p => Column.create(p));
    }

    /**
     * @private
     * @description Configures the coins.
     */
    setupCoins() {
        const cnf = this.config.items.coins;
        const cells = this.cells.filter(p => !p.isBlocked && !p.element);

        this.getIndexes(cells.length, cnf.density)
            .forEach(index => Coin.create(cells[index]));
    }

    /**
     * @private
     * @description Configures the given item type.
     * @param {ElementFactory} factory Factory.
     */
    setupItem(factory) {
        let cells = this.cells.filter(p => !p.isBlocked && !p.element);

        this.getIndexes(cells.length, factory.getDensity())
            .forEach(index => factory.createItem(cells[index]));
    }

    /**
     * @private
     * @description Gets an array of indexes to select cells.
     * @param {number} length Array length.
     * @param {number} density Density.
     * @returns Array of indexes.
     */
    getIndexes(length, density) {
        var indexes = [];

        if (density < 1) {
            // probability
            let tmp = [...Array(length).keys()];
            indexes = tmp.filter(() => Math.random() < density);
        } else {
            // count
            let tmp = [...Array(density).keys()];
            indexes = tmp.map(() => Math.floor(length * Math.random()));
        }

        return indexes;
    }

    /**
     * @private
     * @description Configures the hero initial values.
     * @param {object} config Configuration for hero.
     */
    setupHero(config) {
        this.hero.row = config.row;
        this.hero.col = config.col;
        this.hero.life = config.life;

        this.hero.sight = 4;
    }

    /**
     * @private
     * @description Updates the status of cells based on the position of the hero.
     */
    updateStatus() {
        this.cells.forEach(p => p.updateStatus(this.hero));
    }

    /**
     * @public
     * @description Try to move the hero.
     * @param {number} dr Row of clicked cell.
     * @param {number} dc Col of clicked cell.
     */
    tryMoveHero(dr, dc) {
        let row = this.board.hero.row + dr;
        let col = this.board.hero.col + dc;

        if (row < 0 || row > this.maxRow ||
            col < 0 || col > this.maxCol) return;

        const cell = this.cells.find(p => p.row === row && p.col === col);
        const drow = Math.abs(this.hero.row - cell.row);
        const dcol = Math.abs(this.hero.col - cell.col);
        console.log("drow=" + drow + "; dcol=" + dcol);
        if (drow + dcol !== 1) return;

        if (cell.moveHero(this.hero)) {
            this.updateStatus();
        }
    }

    /**
     * @public
     * @description Gets the remaining time.
     * @returns {number} Seconds remaining.
     */
    getRemainingTime() {
        const tmp = this.startTime != null
            ? Math.floor(300 - (new Date() - this.startTime) / 1000)
            : 0;

        return tmp > 0 ? tmp : 0;
    }

}