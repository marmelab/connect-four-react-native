import { expect } from 'chai';
import { Chance } from 'chance';
import sinon from 'sinon';

import BoardModel from '../../../src/connectfour/board/BoardModel';
import GameModel from '../../../src/connectfour/game/GameModel';
import switchGamePlayers from '../../../src/connectfour/game/SwitchPlayers';

describe('Game', () => {
    let sandbox;
    let firstPlayerName;
    let secondPlayerName;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();

        const chance = new Chance();
        firstPlayerName = chance.name();
        secondPlayerName = chance.name();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('constructor', () => {
        it('should use player names parameters', () => {
            const game = new GameModel(firstPlayerName, secondPlayerName);

            expect(game.player1.name).to.be.equal(firstPlayerName);
            expect(game.player2.name).to.be.equal(secondPlayerName);
        });

        it('should initialize current player randomly to first player', () => {
            sandbox.stub(Math, 'random').returns(0.4);

            const game = new GameModel(firstPlayerName, secondPlayerName);
            expect(game.currentPlayer).to.be.equal(game.player1);
        });

        it('should initialize current player randomly to second player', () => {
            sandbox.stub(Math, 'random').returns(0.6);

            const game = new GameModel(firstPlayerName, secondPlayerName);
            expect(game.currentPlayer).to.be.equal(game.player2);
        });

        it('should initialize first player randomly to red', () => {
            sandbox.stub(Math, 'random').returns(0.4);

            const game = new GameModel(firstPlayerName, secondPlayerName);
            expect(game.player1.color).to.be.equal(BoardModel.colors.red);
        });

        it('should initialize first player randomly to yellow', () => {
            sandbox.stub(Math, 'random').returns(0.6);

            const game = new GameModel(firstPlayerName, secondPlayerName);
            expect(game.player1.color).to.be.equal(BoardModel.colors.yellow);
        });
    });

    describe('isCurrentPlayer', () => {
        it('should give the right current player upon game initialization', () => {
            sandbox.stub(Math, 'random').returns(0.3);

            const game = new GameModel(firstPlayerName, secondPlayerName);
            expect(game.isCurrentPlayer(game.player1)).to.be.true;
        });

        it('should give the right current player after switching', () => {
            sandbox.stub(Math, 'random').returns(0.3);

            let game = new GameModel(firstPlayerName, secondPlayerName);
            game = switchGamePlayers(game);

            expect(game.isCurrentPlayer(game.player2)).to.be.true;
        });
    });
});
