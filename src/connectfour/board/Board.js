import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import BoardModel from './BoardModel';
import Cell from './Cell';
import ControlButton from './ControlButton';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
    },
    header: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        padding: 10,
    },
    table: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'steelblue',
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

});

const Board = ({ board, dropDisc, style = null }) => (
    <View style={[styles.container, style]}>
        <View style={styles.header}>
            {board.cells.map((cell, x) =>
                <ControlButton board={board} column={x} onPress={dropDisc} key={`dropdisc-controlbutton-${x}`} style={styles.button} />
            )}
        </View>
        <View style={styles.table}>
            {board.cells.map((column, x) =>
                <View style={styles.row} key={`column-${x}`}>
                    {column.map((cell, y) =>
                        <Cell color={cell} key={`cell-${x}-${y}`} />
                    )}
                </View>
            )}
        </View>
    </View>
);


Board.propTypes = {
    board: React.PropTypes.instanceOf(BoardModel),
    dropDisc: React.PropTypes.func.isRequired,
    style: View.propTypes.style,
};

export default Board;
