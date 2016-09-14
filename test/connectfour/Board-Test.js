import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Board from '../../src/connectfour/Board';
import Cell from '../../src/connectfour/Cell';
import BoardModel from '../../src/connectfour/BoardModel';

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
});
