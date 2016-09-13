import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        padding: 5,
        width: 40,
        height: 40,
        alignItems: 'stretch',
    },
    disc: {
        flex: 1,
        borderRadius: 20,
    },
    0: {
        backgroundColor: 'white',
    },
    1: {
        backgroundColor: 'red',
    },
    2: {
        backgroundColor: 'yellow',
    },
});

const Cell = ({ color }) =>
    <View style={styles.cell}>
        <View style={[styles.disc, styles[color]]} />
    </View>
;

Cell.propTypes = {
    color: React.PropTypes.number,
};

export default Cell;
