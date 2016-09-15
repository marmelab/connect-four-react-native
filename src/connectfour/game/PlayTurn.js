import update from 'react-addons-update';

import addDiscToBoard from '../board/AddDisc';
import switchGamePlayers from './SwitchPlayers';

export default function playTurn(game, columnNumber) {
    const nextBoard = addDiscToBoard(game.board, columnNumber, game.currentPlayer.color);

    let nextGame = update(game, {
        board: {
            $set: nextBoard,
        },
    });

    nextGame = switchGamePlayers(nextGame);

    return nextGame;
}
