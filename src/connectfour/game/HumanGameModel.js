import { randomizeColor, getOtherColor } from '../board/ColorHelper';
import PlayerModel from '../player/PlayerModel';
import Game from './GameModel';

export default class HumanGame extends Game {

    constructor(firstPlayerName = 'Player #1', secondPlayerName = 'Player #2') {
        super(firstPlayerName, secondPlayerName);
    }

    initializePlayers(firstPlayerName, secondPlayerName) {
        const firstPlayerColor = randomizeColor();
        this.player1 = new PlayerModel(firstPlayerName, firstPlayerColor);
        this.player2 = new PlayerModel(secondPlayerName, getOtherColor(firstPlayerColor));
    }
}
