import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from './Button';

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

const WelcomePage = () => {
    const startPressed = () => {
        // TODO : Start a game
        console.log('test');
    };

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Welcome</Text>
            <Button onPress={startPressed} text="Start" />
        </View>
    );
};

export default WelcomePage;
