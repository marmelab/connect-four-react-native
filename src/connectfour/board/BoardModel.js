export default class Board {
    static colors = {
        empty: 0,
        red: 1,
        yellow: 2,
    }

    constructor(width, height) {
        this.cells = [];
        this.initializeCells(width, height);
    }

    initializeCells(width, height) {
        for (let x = 0; x < width; x += 1) {
            this.cells[x] = [];
            for (let y = 0; y < height; y += 1) {
                this.cells[x][y] = Board.colors.empty;
            }
        }
    }

    isFull() {
        return this.cells.every(column =>
            column.every(cell =>
                cell !== 0
            )
        );
    }
}
