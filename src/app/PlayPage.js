import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import update from 'react-addons-update';

import Board from '../connectfour/Board';
import Button from '../chrome/Button';
import PlayerBadge from '../connectfour/PlayerBadge';
import GameModel from '../connectfour/GameModel';

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

        const gameModel = new GameModel();

        this.state = {
            game: gameModel,
        };
    }

    changeTurn = () => {
        this.setState({ game: this.state.game.switchPlayers() });
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>Play</Text>

                <Button onPress={this.changeTurn} text="Change turn" />

                <PlayerBadge player={this.state.game.player1} highlighted={this.state.game.isCurrentPlayer(this.state.game.player1)} />
                <PlayerBadge player={this.state.game.player2} highlighted={this.state.game.isCurrentPlayer(this.state.game.player2)} />

                <Board board={this.state.game.board} />
            </View>
        );
    }
}
