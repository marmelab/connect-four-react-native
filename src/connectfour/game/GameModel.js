import BoardModel from '../board/BoardModel';
import PlayerModel from '../player/PlayerModel';

export default class Game {

    constructor(firstPlayerName = 'Player #1', secondPlayerName = 'Player #2') {
        this.board = new BoardModel(7, 6);

        this.initializePlayers(firstPlayerName, secondPlayerName);

        this.currentPlayer = Math.random() < 0.5 ? this.player1 : this.player2;
        this.winner = null;
    }

    initializePlayers(firstPlayerName, secondPlayerName) {
        const firstPlayerColor = Math.random() < 0.5 ? BoardModel.colors.red : BoardModel.colors.yellow;

        this.player1 = new PlayerModel(firstPlayerName, firstPlayerColor);

        const secondPlayerColor = firstPlayerColor === BoardModel.colors.red ? BoardModel.colors.yellow : BoardModel.colors.red;

        this.player2 = new PlayerModel(secondPlayerName, secondPlayerColor);
    }

    isCurrentPlayer(player) {
        return this.currentPlayer === player;
    }
}
