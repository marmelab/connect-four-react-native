import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import BoardModel from '../models/Board';
import Cell from './Cell';

const styles = StyleSheet.create({
    table: {
        flexDirection: 'row',
        backgroundColor: 'steelblue',
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
});

const Board = ({ board }) =>
    <View style={styles.table}>
        {board.cells.map((column, x) =>
            <View style={styles.row} key={`column-${x}`}>
                {column.map((cell, y) =>
                    <Cell color={cell} key={`cell-${x}-${y}`} />
                )}
            </View>
        )}
    </View>
;

Board.propTypes = {
    board: React.PropTypes.instanceOf(BoardModel),
};

export default Board;
