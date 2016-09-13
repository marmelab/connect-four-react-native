export default class Board {
    colors = {
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
                this.cells[x][y] = this.colors.empty;
            }
        }
    }

    addDisc(columnNumber, color) {
        // TODO : check column exists
        // TODO : check color exists
        const column = this.cells[columnNumber];
        for (let y = column.length - 1; y >= 0; y -= 1) {
            if (column[y] === 0) {
                column[y] = color;
                return;
            }
        }
    }

    isFull() {
        for (let x = 0; x < this.cells.length; x += 1) {
            const column = this.cells[x];
            for (let y = 0; y < column.length; y += 1) {
                if (column[y] === 0) {
                    return false;
                }
            }
        }
        return true;
    }
}
