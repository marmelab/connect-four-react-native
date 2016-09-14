import React, { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Chance } from 'chance';

import PlayerModel from '../../src/connectfour/PlayerModel';
import BoardModel from '../../src/connectfour/BoardModel';
import PlayerBadge from '../../src/connectfour/PlayerBadge';

describe('<PlayerBadge />', () => {
    let playerName;

    beforeEach(() => {
        const chance = new Chance();
        playerName = chance.name();
    });

    it('should render the right player name', () => {
        const player = new PlayerModel(playerName, BoardModel.colors.red);
        const playerBadge = shallow(<PlayerBadge player={player} />);

        expect(playerBadge.find(Text).props().children).to.equal(playerName);
    });

    it('should render the right player color', () => {
        const player = new PlayerModel(playerName, BoardModel.colors.yellow);
        const playerBadge = shallow(<PlayerBadge player={player} />);

        expect(
            playerBadge.find(View).last()
            .props().style
            .some(el => el.backgroundColor === 'yellow')
        ).to.be.true;
    });

    it('should be highlighted', () => {
        const player = new PlayerModel(playerName, BoardModel.colors.yellow);
        const highlighted = true;
        const playerBadge = shallow(<PlayerBadge player={player} highlighted={highlighted} />);

        expect(
            playerBadge.closest(View)
            .props().style
            .some(el => el.backgroundColor === 'yellow')
        ).to.be.true;
    });
});
