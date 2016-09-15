import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Board from '../../../src/connectfour/board/Board';
import Button from '../../../src/chrome/Button';
import Cell from '../../../src/connectfour/board/Cell';
import BoardModel from '../../../src/connectfour/board/BoardModel';

describe('<Board />', () => {
    let dropDiscCallback;

    beforeEach(() => {
        dropDiscCallback = sinon.spy();
    });

    it('should render the right amount of columns', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        expect(board.closest(View).props().children.length).to.equal(2);
    });

    it('should render the right amount of cells', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        expect(board.find(Cell).length).to.equal(4);
    });

    it('should render as many button as column', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        expect(board.find(Button).length).to.equal(2);
    });

    it('should fill board when I click on the action button', () => {
        const boardModel = new BoardModel(2, 2);

        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        board.find(Button).first().simulate('press');
        expect(dropDiscCallback.called).to.be.true;
        expect(dropDiscCallback.args[0][0]).to.be.equal(0);

        board.find(Button).first().simulate('press');
        expect(dropDiscCallback.calledTwice).to.be.true;
        expect(dropDiscCallback.args[1][0]).to.be.equal(0);
    });

    it('should make action button disappear when column full', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        const numberOfActionButtons = board.find(Button).length;

        boardModel.cells[0].fill(1);
        board.setProps({
            board: boardModel,
        });
        board.update();

        const newNumberOfActionButtons = board.find(Button).length;

        expect(numberOfActionButtons - 1).to.be.equal(newNumberOfActionButtons);
    });
});
