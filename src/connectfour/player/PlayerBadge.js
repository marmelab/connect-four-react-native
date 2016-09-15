import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import PlayerModel from './PlayerModel';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    disc: {
        height: 10,
        width: 10,
        borderRadius: 5,
    },
    1: {
        backgroundColor: 'red',
    },
    2: {
        backgroundColor: 'yellow',
    },
    highlighted: {
        backgroundColor: 'yellow',
    },
});

const PlayerBadge = ({ player, highlighted }) => {
    const wrapperStyle = [styles.wrapper];
    if (highlighted) {
        wrapperStyle.push(styles.highlighted);
    }

    return (
        <View style={wrapperStyle}>
            <View style={[styles.disc, styles[player.color]]} />
            <Text>{player.name}</Text>
        </View>
    );
};

PlayerBadge.propTypes = {
    player: React.PropTypes.instanceOf(PlayerModel).isRequired,
    highlighted: React.PropTypes.bool,
};

export default PlayerBadge;
