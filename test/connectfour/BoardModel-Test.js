import { expect } from 'chai';

import BoardModel from '../../src/connectfour/BoardModel';

describe('Board', () => {
    describe('constructor', () => {
        it('should use width and height parameters', () => {
            const board = new BoardModel(2, 2);

            expect(board.cells.length).to.be.equal(2);

            for (let x = 0; x < board.cells.length; x += 1) {
                expect(board.cells[x].length).to.be.equal(2);
            }
        });
    });

    describe('addDisc', () => {
        it('should add a disc to the right column', () => {
            const board = new BoardModel(2, 2);
            board.addDisc(0, board.colors.red);
            expect(board.cells[0][1]).not.to.be.equal(0);
        });
    });

    describe('isFull', () => {
        it('should recognize when a board is full', () => {
            const board = new BoardModel(1, 1);
            expect(board.isFull()).to.be.false;
            board.addDisc(0, board.colors.red);
            expect(board.isFull()).to.be.true;
        });
    });
});
