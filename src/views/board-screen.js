import { Screen } from "./screen.js";

export class BoardScreen extends Screen {

   

    /**
     * @public
     * @description Class constructor.
     * @param {Game} game Game.
     */
    constructor(game) {
        super(game);


    }

    /**
     * @inheritdoc
     */
    reset() {
        throw Error("Implement this!");
    }

    /**
     * @inheritdoc
     */
    // eslint-disable-next-line no-unused-vars
    mouseClicked(x, y) {
        throw Error("Implement this!");
    }

    /**
     * @inheritdoc
     */
    // eslint-disable-next-line no-unused-vars
    keyPressed(key) {
        throw Error("Implement this!");
    }

    /**
     * @inheritdoc
     */
    // eslint-disable-next-line no-unused-vars
    draw(frame) {
        throw Error("Implement this!");
    }

}