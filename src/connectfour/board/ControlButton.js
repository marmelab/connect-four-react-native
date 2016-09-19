import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import BoardModel from './BoardModel';
import Button from '../../chrome/Button';

const styles = StyleSheet.create({
    placeholder: {
        height: 40,
        width: 40,
    },
    button: {
        margin: 0,
    },
});

const ControlButton = ({ board, onPress, column, style = null }) => {
    const dropDisc = () => {
        onPress(column);
    };

    return (
        board.isColumnFull(column) ?
            <View style={styles.placeholder} /> :
            <View style={styles.placeholder} >
                <Button text={String(column + 1)} onPress={dropDisc} style={styles.button} />
            </View>
    );
};

ControlButton.propTypes = {
    board: React.PropTypes.instanceOf(BoardModel).isRequired,
    onPress: React.PropTypes.func.isRequired,
    column: React.PropTypes.number.isRequired,
    style: View.propTypes.style,
};

export default ControlButton;
