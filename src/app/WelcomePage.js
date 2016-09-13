import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import Button from '../common/Button';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#246dd5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 32,
        marginBottom: 20,
    },
});

const WelcomePage = (props) => {
    const startPlaying = () => {
        props.navigator.push({
            id: 'PlayPage',
        });
    };

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Welcome</Text>
            <Button onPress={startPlaying} text="Start" />
        </View>
    );
};

WelcomePage.propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator),
};

export default WelcomePage;
