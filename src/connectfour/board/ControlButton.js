import React from 'react';
import {
    View,
} from 'react-native';

import BoardModel from './BoardModel';
import Button from '../../chrome/Button';

const ControlButton = ({ board, onPress, column, style = null }) => {
    const dropDisc = () => {
        onPress(column);
    };

    return (
        board.isColumnFull(column) ?
            <View style={style} /> :
            <Button text={String(column + 1)} onPress={dropDisc} style={style} />
    );
};

ControlButton.propTypes = {
    board: React.PropTypes.instanceOf(BoardModel).isRequired,
    onPress: React.PropTypes.func.isRequired,
    column: React.PropTypes.number.isRequired,
    style: View.propTypes.style,
};

export default ControlButton;
