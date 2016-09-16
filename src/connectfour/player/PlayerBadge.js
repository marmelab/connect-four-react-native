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
        alignItems: 'center',
    },
    disc: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    1: {
        backgroundColor: 'red',
    },
    2: {
        backgroundColor: 'yellow',
    },
    highlighted: {
        backgroundColor: 'lightsteelblue',
    },
});

const PlayerBadge = ({ player, highlighted, style = null }) => {
    const wrapperStyle = [styles.wrapper];
    if (highlighted) {
        wrapperStyle.push(styles.highlighted);
    }

    return (
        <View style={[wrapperStyle, style]}>
            <View style={[styles.disc, styles[player.color]]} />
            <Text>{player.name}</Text>
        </View>
    );
};

PlayerBadge.propTypes = {
    player: React.PropTypes.instanceOf(PlayerModel).isRequired,
    highlighted: React.PropTypes.bool,
    style: View.propTypes.style,
};

export default PlayerBadge;
