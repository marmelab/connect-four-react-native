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
        this.cells = Array.from(Array(width), () =>
            Array(height).fill(Board.colors.empty)
        );
    }

    isColumnFull(columnNumber) {
        return this.cells[columnNumber].every(cell =>
            cell !== 0
        );
    }

    isFull() {
        return this.cells.every(column =>
            column.every(cell =>
                cell !== 0
            )
        );
    }
}
