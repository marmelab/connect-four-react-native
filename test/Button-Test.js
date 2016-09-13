import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import Button from '../src/Button';
import { expect } from 'chai';

describe('<Button />', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<Button text='Connect Four' />);
        expect(wrapper.length).to.equal(1);
        expect(wrapper.containsMatchingElement(<Text>Connect Four</Text>)).to.equal(true);
    });

});
