import update from 'react-addons-update';

import Board from './BoardModel';
import Player from './PlayerModel';

export default class Game {

    constructor(firstPlayerName = 'Player #1', secondPlayerName = 'Player #2') {
        this.board = new Board(7, 6);

        this.initializePlayers(firstPlayerName, secondPlayerName);

        this.currentPlayer = Math.random() < 0.5 ? this.player1 : this.player2;
        this.winner = null;
    }

    initializePlayers(firstPlayerName, secondPlayerName) {
        const firstPlayerColor = Math.random() < 0.5 ? this.board.colors.red : this.board.colors.yellow;

        this.player1 = new Player(firstPlayerName, firstPlayerColor);

        const secondPlayerColor = firstPlayerColor === this.board.colors.red ? this.board.colors.yellow : this.board.colors.red;

        this.player2 = new Player(secondPlayerName, secondPlayerColor);
    }

    switchPlayers() {
        const nextPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        return update(this, {
            currentPlayer: {
                $set: nextPlayer,
            },
        });
    }
}
