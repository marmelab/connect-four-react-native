import update from 'react-addons-update';

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

    addDisc(columnNumber, color) {
        // TODO : check column exists
        // TODO : check color exists

        const column = this.cells[columnNumber];
        let rowNumber = -1;
        for (rowNumber = column.length - 1; rowNumber >= 0; rowNumber -= 1) {
            if (column[rowNumber] === 0) {
                break;
            }
        }

        return update(this, {
            cells: {
                [columnNumber]: {
                    [rowNumber]: {
                        $set: color,
                    },
                },
            },
        });
    }

    isColumnFull(column) {
        return this.cells[column].every(cell =>
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
