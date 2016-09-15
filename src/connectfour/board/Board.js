import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import BoardModel from './BoardModel';
import Cell from './Cell';
import Button from '../../chrome/Button';

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

const Board = ({ board, dropDisc, style = null }) => {
    const controlButtons = board.cells.map((cell, y) => {
        if (board.isColumnFull(y)) {
            return (<View key={`dropdisc-button-${y}`} style={styles.button} />);
        }
        return (<Button text={String(y + 1)} onPress={() => dropDisc(y)} key={`dropdisc-button-${y}`} style={styles.button} />);
    });

    return (
        <View style={[styles.container, style]}>
            <View style={styles.header}>{controlButtons}</View>
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
};

Board.propTypes = {
    board: React.PropTypes.instanceOf(BoardModel),
    dropDisc: React.PropTypes.func.isRequired,
    style: View.propTypes.style,
};

export default Board;
