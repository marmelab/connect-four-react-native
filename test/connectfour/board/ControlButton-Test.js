import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from '../../../src/chrome/Button';
import ControlButton from '../../../src/connectfour/board/ControlButton';
import BoardModel from '../../../src/connectfour/board/BoardModel';

describe('<ControlButton />', () => {
    let dropDiscCallback;

    beforeEach(() => {
        dropDiscCallback = sinon.spy();
    });

    it('should make action button disappear when column full', () => {
        const boardModel = new BoardModel(2, 2);
        const controlButton = shallow(<ControlButton board={boardModel} onPress={dropDiscCallback} column={0} />);

        expect(controlButton.find(Button).length).to.be.equal(1);

        boardModel.cells[0].fill(1);
        controlButton.setProps({
            board: boardModel,
        });
        controlButton.update();

        expect(controlButton.find(Button).length).to.be.equal(0);
    });

    it('should call the method when clicked', () => {
        const boardModel = new BoardModel(2, 2);
        const controlButton = shallow(<ControlButton board={boardModel} onPress={dropDiscCallback} column={0} />);

        controlButton.simulate('press');

        expect(dropDiscCallback.called).to.be.true;
    });

    it('should not do anything on click if column is full', () => {
        const boardModel = new BoardModel(2, 2);
        boardModel.cells[0].fill(1);

        const controlButton = shallow(<ControlButton board={boardModel} onPress={dropDiscCallback} column={0} />);

        controlButton.simulate('press');

        expect(dropDiscCallback.called).to.be.false;
    });
});
