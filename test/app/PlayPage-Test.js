import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Button from '../../src/chrome/Button';
import PlayerBadge from '../../src/connectfour/player/PlayerBadge';
import PlayPage from '../../src/app/PlayPage';

describe('<PlayPage />', () => {
    it('should render correctly', () => {
        const playPage = shallow(<PlayPage />);

        expect(playPage.length).to.equal(1);
        expect(playPage.contains(Text)).to.equal(true);
        expect(playPage.find(Text).props().children).to.equal('Play');
    });

    it('should alternate turns when I click on the action button', () => {
        const playPage = shallow(<PlayPage />);

        const currentPlayerName = playPage.find(PlayerBadge).filter('[highlighted=true]').props().player.name;

        playPage.find(Button).first().simulate('press');

        const otherPlayerName = playPage.find(PlayerBadge).filter('[highlighted=true]').props().player.name;

        expect(currentPlayerName).not.to.be.equal(otherPlayerName);
    });
});
