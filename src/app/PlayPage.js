import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Board from '../connectfour/board/Board';
import Button from '../chrome/Button';
import GameModel from '../connectfour/game/GameModel';
import PlayerBadge from '../connectfour/player/PlayerBadge';
import switchGamePlayers from '../connectfour/game/SwitchPlayers';

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
        this.setState({ game: switchGamePlayers(this.state.game) });
    }

    render() {
        const game = this.state.game;
        return (
            <View style={styles.view}>
                <Text style={styles.title}>Play</Text>

                <Button onPress={this.changeTurn} text="Change turn" />

                <PlayerBadge player={game.player1} highlighted={game.isCurrentPlayer(game.player1)} />
                <PlayerBadge player={game.player2} highlighted={game.isCurrentPlayer(game.player2)} />

                <Board board={game.board} />
            </View>
        );
    }
}
