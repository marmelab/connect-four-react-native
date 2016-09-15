import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5cb85c',
        borderRadius: 20,
        padding: 10,
    },
    text: {
        fontSize: 22,
        color: 'white',
    },
});

const Button = ({ onPress, text, style = null }) => (
    <View style={style}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
);

Button.propTypes = {
    onPress: React.PropTypes.func,
    text: React.PropTypes.string.isRequired,
};

export default Button;
