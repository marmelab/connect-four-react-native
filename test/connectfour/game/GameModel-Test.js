import { expect } from 'chai';
import { Chance } from 'chance';
import sinon from 'sinon';

import BoardModel from '../../../src/connectfour/board/BoardModel';
import GameModel from '../../../src/connectfour/game/GameModel';

describe('Game', () => {
    let firstPlayerName;
    let secondPlayerName;

    beforeEach(() => {
        const chance = new Chance();
        firstPlayerName = chance.name();
        secondPlayerName = chance.name();
    });

    describe('constructor', () => {
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.sandbox.create();
        });

        afterEach(() => {
            sandbox.restore();
        });

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

    describe('switchPlayers', () => {
        it('should switch players when asked to', () => {
            let game = new GameModel(firstPlayerName, secondPlayerName);

            const firstPlayer = game.currentPlayer;
            game = game.switchPlayers();

            expect(game.currentPlayer).not.to.be.equal(firstPlayer);
        });
    });
});
