/**
 * @public
 * @description Holds the sprites.
 */
export class SpriteCollection {

    /**
     * @public
     * @description Class constructor.
     * @param {object} config Configuration.
     * @param {object} p Instance of p5.js.
     */
    constructor(config, p) {
        /**
         * @private
         * @description Configuration.
         * @type {object}
         */
        this.config = config;
        /**
         * @private
         * @description Instance of p5.js.
         * @type {object}
         */
        this.p = p;
        /**
         * @public
         * @description Backgrounds.
         * @type {object}
         */
        this.backgrounds = {
            "start": null,
            "frame": null
        };
        /**
         * @public
         * @description Sprites for UI.
         * @type {object}
         */
        this.ui = {
            "heart": {
                "empty": null,
                "half": null,
                "full": null
            }
        };
        /**
         * @public
         * @description Floors.
         * @type {object}
         */
        this.floors = null;
        /**
         * @public
         * @description Walls.
         * @type {object}
         */
        this.walls = {
            "wall": null
        };
        /**
         * @public
         * @description Items.
         * @type {object}
         */
        this.items = {
            "coin": null,
            "column": null,
            "hammer": null,
            "ladder": null,
            "potion": null,
            "skull": null
        };
        /**
         * @public
         * @description Heroes.
         * @type {object}
         */
        this.heroes = {
        };
    }

    /**
     * @public
     * @description Preloads required resources.
     */
    preload() {
        this.loadBackgrounds();
        //this.loadUI();
        //this.loadFloors();
        //this.loadWalls();
        //this.loadItems();
        this.loadHeroes();
    }

    /**
     * @private
     * @description Loads the sprites for the backgrounds.
     */
    loadBackgrounds() {
        let cnf = this.config.backgrounds;
        Object.keys(cnf).forEach(x => {
            this.backgrounds[x] = this.p.loadImage(cnf[x]);
        });
    }

    /**
     * @private
     * @description Loads the sprites for the UI.
     */
    loadUI() {
        let cnf = this.config.ui;
        let sprites = this.ui;
        sprites.heart.empty = this.loadImage(cnf.heart.empty);
        sprites.heart.half = this.loadImage(cnf.heart.half);
        sprites.heart.full = this.loadImage(cnf.heart.full);
    }

    /**
     * @private
     * @description Loads the sprites for the floors.
     */
    loadFloors() {
        let cnf = this.config.floors;
        this.floors = cnf.map(s => this.loadImage(s));
    }

    /**
      * @private
      * @description Loads the sprites for the walls.
      */
    loadWalls() {
        let cnf = this.config.walls;
        let sprites = this.walls;
        sprites.wall = this.loadImage(cnf.wall);
    }

    /**
     * @private
     * @description Loads the sprites for the items.
     */
    loadItems() {
        let cnf = this.config.items;
        let sprites = this.items;
        sprites.coin = this.loadImage(cnf.coin);
        sprites.column = this.loadImage(cnf.column);
        sprites.hammer = this.loadImage(cnf.hammer);
        sprites.ladder = this.loadImage(cnf.ladder);
        sprites.potion = this.loadImage(cnf.potion);
        sprites.skull = this.loadImage(cnf.skull);
    }

    /**
     * @private
     * @description Loads the sprites for the heroes.
     */
    loadHeroes() {
        let cnf = this.config.heroes;
        let keys = Object.keys(cnf);
        let spt = {};

        for (let key of keys) {
            spt[key] = this.loadObject(cnf[key]);
        }

        this.heroes = spt;
    }

    /**
     * @private
     * @description Loads the sprites for a hero.
     * @param {object} cnf Configuration
     * @returns {object} Object containing the sprites.
     */
    loadObject(cnf) {
        let keys = Object.keys(cnf);
        let spt = {};

        for (let key of keys) {
            let tmp = cnf[key];
            if (Array.isArray(tmp)) {
                spt[key] = tmp.map(x => this.p.loadImage(x));
            } else {
                spt[key] = this.p.loadImage(tmp);
            }
        }

        return spt;
    }

    /**
     * @public
     * @description Gets random floor sprite.
     * @returns {object} Random sprite for the floor.
     */
    getRandomFloor() {
        let c = this.floors.length;
        let index = Math.floor(c * Math.random());
        return this.floors[index];
    }

    /**
     * @public
     * @description Gets the current image for the given hero.
     * @param {string} id ID of the hero.
     * @param {string} state State of the hero.
     * @param {number} frame Current frame.
     * @returns {object} Image for the sprite.
     */
    getHero(id, state, frame) {
        let i = frame % 4;
        return this.heroes[id][state][i];
    }

}