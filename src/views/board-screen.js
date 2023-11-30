// eslint-disable-next-line no-unused-vars
import { Board } from "../models/board.js";
import { Screen } from "./screen.js";

export class BoardScreen extends Screen {

    /**
     * @public
     * @description Class constructor.
     * @param {Game} game Game.
     */
    constructor(game) {
        super(game);
        /**
         * @private
         * @readonly
         * @description The board.
         * @type {Board}
         */
        this.board = game.getBoard();

        this.pos = { "x": 0, "y": 0 };
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
        //throw Error("Implement this!");
    }

    /**
     * @inheritdoc
     */
    keyPressed(key) {
        let dr = 0;
        let dc = 0;

        if (key === "ArrowLeft") dc--;
        else if (key === "ArrowRight") dc++;
        else if (key === "ArrowDown") dr++;
        else if (key === "ArrowUp") dr--;

        this.board.tryMoveHero(dr, dc);
    }

    /**
     * @inheritdoc
     */
    draw(frame) {
        this.drawCells(frame);
    }

    drawCells(frame) {
        let cellSize = this.board.config.cellSize;

        for (let cell of this.board.cells) {
            let xPos = cell.col * cellSize;
            let yPos = 64 + (cell.row * cellSize);

            let sprite = this.sprites.floors[cell.floor];
            if (sprite != null) {
                this.p.image(sprite, xPos, yPos, cellSize, cellSize);
            }

            if (cell.item) {
                this.p.imageMode(this.p.CENTER);
                sprite = this.sprites.getItem(cell.item.id, frame);
                this.p.image(sprite, xPos + 0.5 * cellSize, yPos + 0.5 * cellSize);
                this.p.imageMode(this.p.CORNER);
            }

            // sprite = cell.getElementSprite(0);
            // if (sprite != null) {
            //     this.p.image(sprite, xPos, yPos, cellSize, cellSize);
            // }
        }
    }

}