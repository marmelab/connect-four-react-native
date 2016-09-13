import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import WelcomePage from '../src/WelcomePage';
import { expect } from 'chai';

describe('<WelcomePage />', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<WelcomePage/>);
        expect(wrapper.length).to.equal(1);
        expect(wrapper.containsMatchingElement(<Text >Welcome</Text>)).to.equal(true);
    });

});
