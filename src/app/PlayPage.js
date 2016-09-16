import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import Board from '../connectfour/board/Board';
import Button from '../chrome/Button';
import GameModel from '../connectfour/game/GameModel';
import PlayerBadge from '../connectfour/player/PlayerBadge';
import playTurn from '../connectfour/game/PlayTurn';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#246dd5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 0,
        alignSelf: 'stretch',
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
    },
    players: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
    },
    playerBadge: {
        padding: 10,
    },
    board: {
        flex: 0,
        alignSelf: 'stretch',
    },
});

export default class PlayPage extends Component {
    constructor(props) {
        super(props);

        const gameModel = new GameModel(this.props.againstComputer);

        this.state = {
            game: gameModel,
        };
    }

    backToHome = () => {
        this.props.navigator.replace({
            id: 'WelcomePage',
        });
    }

    playAgain = () => {
        this.setState({ game: new GameModel() });
    }

    showGameStatus = (status, winner) => {
        const message = status === 'draw' ? 'Draw !' : `${winner.name} wins !`;

        Alert.alert(
            'Game over',
            message,
            [
                {
                    text: 'Back to home ',
                    style: 'cancel',
                    onPress: this.backToHome,
                },
                {
                    text: 'Play again',
                    style: 'default',
                    onPress: this.playAgain,
                },
            ],
            {
                cancelable: false,
            }
        );
    }

    dropDisc = (column) => {
        const nextGame = playTurn(this.state.game, column);
        this.setState({ game: nextGame });

        const { status, winner } = nextGame.getStatus();

        if (status !== 'playing') {
            this.showGameStatus(status, winner);
        }
    }

    render() {
        const game = this.state.game;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Play</Text>

                <View style={styles.players}>
                    <PlayerBadge player={game.player1} highlighted={game.isCurrentPlayer(game.player1)} style={styles.playerBadge} />
                    <PlayerBadge player={game.player2} highlighted={game.isCurrentPlayer(game.player2)} style={styles.playerBadge} />
                </View>

                <Board board={game.board} dropDisc={this.dropDisc} style={styles.board} />

                <Button onPress={this.backToHome} text="< Cancel game" />
            </View>
        );
    }
}


PlayPage.propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator),
    againstComputer: React.PropTypes.bool,
};
