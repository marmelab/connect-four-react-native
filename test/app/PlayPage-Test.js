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
});
