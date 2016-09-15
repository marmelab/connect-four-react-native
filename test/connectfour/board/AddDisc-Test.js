import { expect } from 'chai';

import addDiscToBoard from '../../../src/connectfour/board/AddDisc';
import BoardModel from '../../../src/connectfour/board/BoardModel';

describe('addDiscToBoard', () => {
    it('should add a disc to the right column', () => {
        let board = new BoardModel(2, 2);
        board = addDiscToBoard(board, 0, BoardModel.colors.red);
        expect(board.cells[0][1]).not.to.be.equal(0);
    });
});
