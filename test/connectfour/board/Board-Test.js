import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Board from '../../../src/connectfour/board/Board';
import Button from '../../../src/chrome/Button';
import Cell from '../../../src/connectfour/board/Cell';
import BoardModel from '../../../src/connectfour/board/BoardModel';

describe('<Board />', () => {
    it('should render the right amount of columns', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} />);

        expect(board.closest(View).props().children.length).to.equal(2);
    });

    it('should render the right amount of cells', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} />);

        expect(board.find(Cell).length).to.equal(4);
    });

    it('should render as many button as column', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} />);

        expect(board.find(Button).length).to.equal(2);
    });
});
