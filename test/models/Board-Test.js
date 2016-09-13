import { expect } from 'chai';

import Board from '../../src/models/Board';

describe('Board', () => {
    it('should initialize correctly', () => {
        const board = new Board(2, 2);
        expect(board.cells.length).to.be.equal(2);
    });

    it('should be able to have a disc added', () => {
        const board = new Board(2, 2);
        board.addDisc(0, board.colors.red);
        expect(board.cells[0][1]).not.to.be.equal(0);
    });

    it('should say it when it\'s full', () => {
        const board = new Board(1, 1);
        board.addDisc(0, board.colors.red);
        expect(board.isFull()).to.be.true;
    });
});
