import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

const PlayPage = () => (
    <View style={styles.view}>
        <Text style={styles.title}>Play</Text>
    </View>
);

export default PlayPage;
