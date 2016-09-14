import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Board from '../connectfour/Board';
import BoardModel from '../connectfour/BoardModel';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#246dd5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 32,
        marginBottom: 20,
    },
});

export default class PlayPage extends Component {
    constructor(props) {
        super(props);

        const boardModel = new BoardModel(7, 6);

        boardModel.addDisc(2, boardModel.colors.red);

        this.state = {
            board: boardModel,
        };
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>Play</Text>
                <Board board={this.state.board} />
            </View>
        );
    }
}
